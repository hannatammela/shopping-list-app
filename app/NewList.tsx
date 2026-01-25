
import { DancingScript_400Regular, useFonts } from '@expo-google-fonts/dancing-script';
import { MaterialIcons } from '@expo/vector-icons';
import { router } from 'expo-router';
import { useEffect, useState } from 'react';
import { Pressable, Text, TextInput, View } from 'react-native';
import commonStyles from "../styles/commonStyles";
import { supabase } from '../supabaseClient';

export default function NewList() {
  const [fontsLoaded] = useFonts({ DancingScript: DancingScript_400Regular });
  const [product, setProduct] = useState('');
  const [quantity, setQuantity] = useState('');
  const [items, setItems] = useState<{ product: string; quantity: string; checked: boolean }[]>([]);
  
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
      fetchItems();
    }
  )
  .subscribe();

  return () => {
    supabase.removeChannel(channel);
  }
  }, []);

  // LISÄÄMINEN
  const addProduct = async () => {
    if (!product || !quantity) return;
    // Lisätään Supabaseen ja palautetaan rivi
    const { data, error } = await supabase
      .from('shopping_list')
      .insert([{ product, quantity, checked: false }])
      .select()
      .single();
      console.log('Supabase data:', data);
      console.log('Supabase error:', error);
    if (error) {
      console.log('Error adding product:', error);
      return;
    }
    if (data) setItems([...items, { product: data.product, quantity: data.quantity, checked: data.checked }]);
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
    if (data) {
      // Asetetaan tilaan
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
    const { error } = await supabase
      .from('shopping_list')
      .delete()
      .eq('product', itemToDelete.product);
    if (error) console.log('Error deleting item:', error);
    setItems(items.filter((_, i) => i !== index));
  };




  // PAINIKKEEN PÄIVITTÄMINEN TIETOKANTAAN
    const toggleChecked = async (index: number) => {
    const newItems = [...items];
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
      <Text style={commonStyles.title}>Uusi lista</Text>
      <TextInput
        placeholder="Tuote"
        value={product}
        onChangeText={setProduct}
        style={commonStyles.input}
      />
      <TextInput
        placeholder="Määrä"
        value={quantity}
        onChangeText={setQuantity}
        style={commonStyles.input}
      />
      <Pressable
        style={({ pressed }) => [commonStyles.button, pressed && commonStyles.pressedButton]}
        onPress={addProduct}
      >
        <Text style={commonStyles.buttonText}>Lisää</Text>
      </Pressable>
      <View style={commonStyles.listContainer}>
        {items.map((item, index) => (
          <View key={index} style={commonStyles.itemBox}>
            <Pressable
              style={commonStyles.checkbox}
              onPress={() => toggleChecked(index)}
            >
              {item.checked && <View style={commonStyles.checkedDot} />}
            </Pressable>
            <Text style={commonStyles.itemText}>{item.product}</Text>
            <Text style={commonStyles.itemText}>{item.quantity}</Text>
            <Pressable
              onPress={() => removeItem(index)}
              style={({ pressed }) => [commonStyles.deleteIcon, pressed && commonStyles.pressedDeleteIcon]}
            >
              <MaterialIcons name="delete" style={commonStyles.deleteIcon} />
            </Pressable>
          </View>
        ))}
      </View>
      <Pressable
        style={({ pressed }) => [commonStyles.backButton, pressed && commonStyles.pressedBackButton]}
        onPress={() => router.push("/")}
      >
        <MaterialIcons name="arrow-back" style={commonStyles.backIcon} />
      </Pressable>
    </View>
  );
}