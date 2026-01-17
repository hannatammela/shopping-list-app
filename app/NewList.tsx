import { useState } from 'react';
import { Pressable, Text, TextInput, View } from 'react-native';
import commonStyles from "../styles/commonStyles";

export default function NewList() {
  const [listName, setListName] = useState('');
  const [product, setProduct] = useState('');
  const [quantity, setQuantity] = useState('');

  const saveList = () => {
    console.log('Tallennetaan lista:', {
    listName,
    product,
    quantity,
    });

    setListName('');
    setProduct('');
    setQuantity('');
  };

  return (
    <View style={commonStyles.container}>
      <Text style={commonStyles.title}>Uusi lista</Text>
    
<TextInput
  placeholder="Anna listan nimi"
  value={listName}
  onChangeText={setListName}
  style={commonStyles.input}
/>
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
  style={[commonStyles.button, commonStyles.primaryButton]}
  onPress={saveList}
>
  <Text style={commonStyles.primaryButtonText}>Tallenna</Text>
</Pressable>
    </View>
  );
}
