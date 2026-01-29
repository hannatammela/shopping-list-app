
import { DancingScript_400Regular, useFonts } from '@expo-google-fonts/dancing-script';
import { MaterialIcons } from '@expo/vector-icons';
import * as Notifications from 'expo-notifications';
import { router } from 'expo-router';
import { useEffect, useState } from 'react';
import { Alert, Platform, Pressable, Text, TextInput, View } from 'react-native';
import commonStyles from "../styles/commonStyles";
import { supabase } from '../supabaseClient';

// Notifikaatioiden handler
Notifications.setNotificationHandler({
  handleNotification: async () => ({
    shouldPlaySound: true,
    shouldSetBadge: false,
    shouldShowBanner: true,
    shouldShowList: true,
  }),
});

export default function NewList() {
  const [fontsLoaded] = useFonts({ 
    DancingScript: DancingScript_400Regular });
  
  // Lomakkeen tilat, tuote ja määrä
  const [product, setProduct] = useState('');
  const [quantity, setQuantity] = useState('');

  // Ostoslistan tilataulukko
  const [items, setItems] = useState<{ 
    product: string; 
    quantity: string; 
    checked: boolean 
  }[]>([]);



  // Notifikaatioluvat
    useEffect(() => {
    (async () => {
      if (Platform.OS === 'android') {
        await Notifications.setNotificationChannelAsync('default', {
          name: 'Default',
          importance: Notifications.AndroidImportance.MAX,
        });
      }

      const { status } = await Notifications.getPermissionsAsync();

      if (status !== 'granted') {
        const { status: requestStatus } =
          await Notifications.requestPermissionsAsync();

        if (requestStatus !== 'granted') {
          Alert.alert(
            'Lupa tarvitaan',
            'Notifikaatiot eivät toimi ilman lupaa'
          );
        }
      }
    })();
  }, []);




  // REAALIAIKAINEN KUUNTELU Realtimen avulla
  // Haetaan tuotteet ja kuunnellaan reaaliaikaisia muutoksia
   useEffect(() => {
    fetchItems();
    const channel = supabase
    .channel('shopping-list-realtime')
    .on(
    'postgres_changes',
    {
      event: '*',
      schema: 'public',
      table: 'shopping_list',
    },
    (payload) => {
      console.log('Realtime event:', payload);
      fetchItems(); // Lista päivitetään muutoksien jälkeen

    if ((payload.new as { product?: string })?.product) {
      showNotification((payload.new as { product: string }).product);
      }
    }
  )
  .subscribe(); // Websocket yhteys

  
  
  // Siivotaan kanava pois komponentin poistuessa
  return () => {
    supabase.removeChannel(channel);
  }
  }, []);


  // Funktio notifikaatiolle
    const showNotification = async (productName: string) => {
    await Notifications.scheduleNotificationAsync({
      content: {
        title: 'Uusi tuote lisätty!',
        body: `${productName} lisättiin listaan`,
        ...(Platform.OS === 'android'
          ? { channelId: 'default' }
          : {}),
      },
      trigger: null, // heti näkyviin
    });
  };









  // LISÄÄMINEN
  const addProduct = async () => {
    if (!product || !quantity) return;

    // Lisätään Supabaseen ja palautetaan rivi
    const { data, error } = await supabase
      .from('shopping_list')
      .insert([{ product, quantity, checked: false }])
      .select()
      .single();

      // Lokitukset mahdollisia virheitä varten
      console.log('Supabase data:', data);
      console.log('Supabase error:', error);

    if (error) {
      console.log('Error adding product:', error);
      return;
    }

    // Lisätään uusi tuote myös paikalliseen tilaan
    if (data) 
      setItems([
    ...items, 
    { 
      product: data.product, 
      quantity: data.quantity, 
      checked: data.checked }]);
    
    // Tyhjennetään inputit
    setProduct('');
    setQuantity('');
  };





  // HAKEMINEN
    const fetchItems = async () => {
    const { data, error } = await supabase
      .from('shopping_list')
      .select('*');  // haetaan kaikki sarakkeet

    if (error) {
      console.log('Error fetching items:', error);
      return;
    }
    // Tallennetaan tuotteet tilaan
    if (data) {
      setItems(data.map(item => ({
        product: item.product,
        quantity: item.quantity,
        checked: item.checked,
      })));
    }
  };





  // POISTAMINEN
    const removeItem = async (index: number) => {
    const itemToDelete = items[index];

    // Poistetaan tietokannasta
    const { error } = await supabase
      .from('shopping_list')
      .delete()
      .eq('product', itemToDelete.product);

    if (error) console.log('Error deleting item:', error);

    // Poistetaan myös paikallisesta tilasta
    setItems(items.filter((_, i) => i !== index));
  };




  // TOGGLEBUTTONIN/CHECKBOXIN PÄIVITTÄMINEN TIETOKANTAAN
    const toggleChecked = async (index: number) => {
    const newItems = [...items];

    // Vaihdetaan checked-tila
    newItems[index].checked = !newItems[index].checked;

    // Päivitetään Supabaseen
    const { error } = await supabase
      .from('shopping_list')
      .update({ checked: newItems[index].checked })
      .eq('product', newItems[index].product); // oletetaan, että product on uniikki
    if (error) console.log('Error updating item:', error);
    setItems(newItems);
  };







  return (
    <View style={commonStyles.container}>

      {/* Otsikko */}
      <Text style={commonStyles.title}>Uusi lista</Text>
      <TextInput
        placeholder="Tuote"
        value={product}
        onChangeText={setProduct}
        style={commonStyles.input}
      />

      {/* Tuotteen määrä */}
      <TextInput
        placeholder="Määrä"
        value={quantity}
        onChangeText={setQuantity}
        style={commonStyles.input}
      />



      {/* Lisää-painike */}
      <Pressable
        style={({ pressed }) => 
          [commonStyles.button, 
            pressed && commonStyles.pressedButton
          ]}
        onPress={addProduct}
        >
      <Text style={commonStyles.buttonText}>Lisää</Text>
      </Pressable>



      {/* Ostoslista */}
      <View style={commonStyles.listContainer}>
        {items.map((item, index) => (
          <View key={index} style={commonStyles.itemBox}>



      {/* Checkbox */}
      <Pressable
        style={commonStyles.checkbox}
        onPress={() => toggleChecked(index)}
        >
        {item.checked && <View style={commonStyles.checkedDot} />}
        </Pressable>
        



        {/* Tuote ja määrä */}
        <Text style={commonStyles.itemText}>{item.product}</Text>
        <Text style={commonStyles.itemText}>{item.quantity}</Text>
        


        {/* Poistopainike */}
        <Pressable
              onPress={() => removeItem(index)}
              style={({ pressed }) => [
                commonStyles.deleteIcon, 
                pressed && commonStyles.pressedDeleteIcon]}
            >
              <MaterialIcons name="delete" style={commonStyles.deleteIcon} />
        </Pressable>
          </View>
        ))}
      </View>



      {/* Takaisin-nappi */}
      <Pressable
        style={({ pressed }) => [
          commonStyles.backButton, 
          pressed && commonStyles.pressedBackButton]}
        onPress={() => router.push("/")}
      >
        <MaterialIcons name="arrow-back" style={commonStyles.backIcon} />
      </Pressable>
    </View>
  );
}