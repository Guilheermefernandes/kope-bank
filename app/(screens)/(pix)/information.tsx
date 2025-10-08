import { Text } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

export default function Screen(){
    return(
        <SafeAreaView className="flex-1 dark:bg-dark-bg p-default-screen-x">
            <Text>Informações</Text>
        </SafeAreaView>
    )
}