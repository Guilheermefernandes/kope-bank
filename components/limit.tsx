import { ChevronRight, Dot } from "lucide-react-native";
import { Pressable, Text, View } from "react-native";


export default function Limit(){

    const format = new Intl.NumberFormat('pt-BR', {
        style: 'currency',
        currency: 'BRL'
    })

    return(
        <View className="flex flex-col">
            <View className="flex flex-row w-auto justify-between">
                <Text className="text-slim-med color-primary-text-light dark:color-primary-text-dark">Cartão de crédito</Text>
                <View className="bg-primary-color-light dark:bg-primary-color-dark py-0.5 pr-4 flex-row justify-center items-center rounded-default">
                    <Dot/>
                    <Text className="text-slim color-black">Em aberto</Text>
                </View> 
            </View>
            <View className="flex flex-col gap-4">
                <Text className="text-default font-medium color-primary-text-light dark:color-primary-text-dark">{format.format(2340)}</Text>
                <Text className="text-slim color-primary-text-light dark:color-primary-text-dark">Vencimento {'08/12'}</Text>
            </View>
            <Pressable className="rounded-default mt-5 py-4 px-8 bg-primary-color-light dark:bg-primary-color-dark">
                <View className="flex flex-row items-center">
                    <Text className="mr-4">Adiantar fatura</Text>
                    <ChevronRight />
                </View>
            </Pressable>
        </View>
    )
}