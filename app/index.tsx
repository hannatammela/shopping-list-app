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

      <View style={defaultStyle.bottomCircle}>      
        <View style={defaultStyle.topCircle} />
        <Text style={[defaultStyle.superTitle, { fontFamily: 'DancingScript' }]}>Shopping List</Text>

        <Fontisto
          name="shopping-bag-1"
          style={defaultStyle.shoppingbagIcon}
        />
      </View>

    <Pressable
        style={({ pressed }) => [
            defaultStyle.button,
            pressed && defaultStyle.pressedButton
            ]}
            onPress={() => router.push("/NewList")}>

    <Text style={defaultStyle.buttonText}>Uusi lista</Text>
    </Pressable>
      </View>
  );
}
