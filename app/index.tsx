import { DancingScript_400Regular, useFonts } from '@expo-google-fonts/dancing-script';
import Fontisto from '@expo/vector-icons/Fontisto';
import { router } from "expo-router";
import { Pressable, Text, View } from "react-native";
import defaultStyle from "../styles/defaultStyle";


export default function Home() {
  let [fontsLoaded] = useFonts({
    DancingScript: DancingScript_400Regular,
  });
  if (!fontsLoaded) {
    return null;
  }

  return (
    <View style={defaultStyle.container}>

      <View style={defaultStyle.superCircle}>      
        <View style={defaultStyle.superHole} />
        <Text style={[defaultStyle.superTitle, { fontFamily: 'DancingScript' }]}>Shopping List</Text>

        <Fontisto
          name="shopping-bag-1"
          style={defaultStyle.shoppingbagIcon}
        />
      </View>

      <View style={defaultStyle.buttonContainer}>
        <Pressable
          style={[defaultStyle.button, defaultStyle.primaryButton]}
          onPress={() => router.push("/NewList")}>

          <Text style={defaultStyle.primaryButtonText}>Uusi lista</Text>
        </Pressable>
      </View>
    </View>
  );
}
