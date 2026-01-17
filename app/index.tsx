import { router } from "expo-router";
import { Pressable, Text, View } from "react-native";
import defaultStyle from "../styles/defaultStyle";

export default function Home() {
    return (
        <View style={defaultStyle.container}>
            <Text style={defaultStyle.title}>Shopping List!</Text>

            <View style={defaultStyle.buttonContainer}>
            <Pressable
                style={[defaultStyle.button, defaultStyle.primaryButton]}
                onPress={() => router.push("/NewList")}
        >
            <Text style={defaultStyle.primaryButtonText}>+ Uusi lista</Text>
        </Pressable>

        <Pressable
          style={defaultStyle.button}
          onPress={() => {}}
        >
          <Text style={defaultStyle.buttonText}>Omat listat</Text>
        </Pressable>
        </View>
    </View>
    )
}