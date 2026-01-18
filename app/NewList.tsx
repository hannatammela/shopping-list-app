import { DancingScript_400Regular, useFonts } from '@expo-google-fonts/dancing-script';
import { MaterialIcons } from '@expo/vector-icons';
import { router } from 'expo-router';
import { useState } from 'react';
import { Pressable, Text, TextInput, View } from 'react-native';
import commonStyles from "../styles/commonStyles";

// Käyttäjä voi lisätä tuotteita ostoslistaan
export default function NewList() {

  // Tilamuuttujat
  const [product, setProduct] = useState(''); // Tuote
  const [quantity, setQuantity] = useState(''); // Määrä
  const [items, setItems] = useState<{ product: string; quantity: string; checked: boolean }[]>([]); // Lista lisätyistä tuotteista

  // Fonttien lataus
  const [fontsLoaded] = useFonts({
    DancingScript: DancingScript_400Regular,
  });

  if (!fontsLoaded) return null; // Odotetaan, että fontit latautuu



  // Funktio, jonka avulla lisätään uusi tuote
  const addProduct = () => {
    if (!product || !quantity) return; // Estetään tyhjien kenttien lisääminen

    const newItem = { product, quantity, checked: false }; // Uusi tuote
    setItems([...items, newItem]); // Lisätään listaan uusi tuote
    setProduct(''); // Tyhjennetään
    setQuantity(''); // Tyhjennetään
  };


  // Funktio, jonka avulla poistetaan tuote
  const removeItem = (index: number) => {
    setItems(items.filter((_, i) => i !== index)); // Poistaa valitun tuotteen
  };

  return (
    <View style={commonStyles.container}>
      <Text style={commonStyles.title}>Uusi lista</Text> 

      {/* Tuote tekstikenttä */}
      <TextInput
        placeholder="Tuote"
        value={product}
        onChangeText={setProduct}
        style={commonStyles.input}
      />


      {/* Määrä tekstikenttä */}
      <TextInput
        placeholder="Määrä"
        value={quantity}
        onChangeText={setQuantity}
        style={commonStyles.input}
      />


      {/* Lisää-painike */}
      <Pressable
        style={({ pressed }) => [
          commonStyles.button,
          pressed && commonStyles.pressedButton
        ]}
        onPress={addProduct}>

        <Text style={commonStyles.buttonText}>Lisää</Text>
      </Pressable>


      {/* Lista lisätyistä tuotteista */}
      <View style={commonStyles.listContainer}>
        {items.map((item, index) => ( // items.map=taulukko. Jokainen lisätty tuote on objekti.
                                      // map = käy läpi jokaisen tuotteen ja renderöi sille oman näkymän.
                                      // index = yksilöllinen numero, joka kertoo tuotteen paikan listassa
          
          // View sisältää yhden tuotteen rivin
          // key={index} = kertoo mikä elementti on kyseessä
          // style={commonStyles.itemBox} tyylimäärittelyt 
          <View key={index} style={commonStyles.itemBox}>

            <Pressable
              style={commonStyles.checkbox} 
              onPress={() => {
                const newItems = [...items]; // Luodaan kopio nykyisestä items taulukosta
                newItems[index].checked = !newItems[index].checked; // Vaihdetaan checked arvo
                setItems(newItems); // Päivitetään items-state uudella taulukolla
              }}
            >
              {item.checked && <View style={commonStyles.checkedDot} />} 
            </Pressable>
            
            <Text style={commonStyles.itemText}>{item.product}</Text> 
            <Text style={commonStyles.itemText}>{item.quantity}</Text>



            {/* Poista tuote */}
            <Pressable
              onPress={() => removeItem(index)}
              style={({ pressed }) => [
                commonStyles.deleteIcon,
                pressed && commonStyles.pressedDeleteIcon
                ]}>
                <MaterialIcons name="delete" style={commonStyles.deleteIcon} />
            </Pressable>
          </View>
        ))}
      </View>


      {/* Takaisin etusivulle */}
      <Pressable
        style={({ pressed }) => [
        commonStyles.backButton,
        pressed && commonStyles.pressedBackButton
        ]}
        onPress={() => router.push("/")}>
          <MaterialIcons
          name="arrow-back"
          style={commonStyles.backIcon}/>
      </Pressable>
    </View>
  );
}
