import { router } from "expo-router";
import { Button, Text } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

export default function Screen(){
    return(
        <SafeAreaView>
            <Text>Olá mundo</Text>
            <Button title="ir para login" onPress={() => router.push({
                pathname: "/(auth)/login"
            })}/>
        </SafeAreaView>
    )
}