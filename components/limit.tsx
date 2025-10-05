import { Dot } from "lucide-react-native";
import { Text, View } from "react-native";


export default function Limit(){
    return(
        <View className="flex-row">
            <View className="flex flex-1 flex-row w-auto justify-between">
                <Text className="text-default color-primary-text-light dark:color-primary-text-dark">Gastos</Text>
                <View className="bg-primary-color-light dark:bg-primary-color-dark py-0.5 pr-4 flex-row justify-center items-center rounded-default">
                    <Dot/>
                    <Text className="text-slim color-black">Ativo</Text>
                </View>
            </View>
        </View>
    )
}