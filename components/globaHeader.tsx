import { useColorScheme } from "nativewind";
import { Image, Text, View } from "react-native";

export default function GlobalHeader(){

    const { colorScheme, setColorScheme } = useColorScheme()

    const format = new Intl.NumberFormat('pt-BR', {
        style: 'currency',
        currency: 'BRL'
    })

    return (
        <View className="flex flex-row justify-between items-center">
            {colorScheme === 'light' &&
                <Image source={require('../assets/images/dark_Logo.png')} className="size-24"/>
            }
            {colorScheme === 'dark' &&
                <Image source={require('../assets/images/bank_logo.png')} className="size-24"/>
            }
            <View>
                <Text className="font-medium color-primary-text-light text-slim-med dark:color-primary-text-dark">
                    {format.format(24517)}
                </Text>
            </View>
        </View>
    )
}