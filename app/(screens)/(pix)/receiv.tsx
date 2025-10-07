import QrCodeGenerate from "@/components/qrcode";
import { Text, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

export default function Receiv(){

    const format = new Intl.NumberFormat('pt-BR', {
        style: 'currency',
        currency: 'BRL'
    })

    return(
        <SafeAreaView className="flex-1 dark:bg-dark-bg p-default-screen-x">
            <Text className="text-boom font-normal color-primary-text-light dark:color-primary-text-dark mb-2">
                Como você quer fazer a cobrança?
            </Text>
            <Text className="color-primary-opacity-color-text text-slim-med">
                Para você fazer a cobrança basta ler o qrcode que aparece logo abaixo desta messagem que a combrança será feita para sua conat imediatamente.
            </Text>
            <QrCodeGenerate/>
            <View className="">
                <Text className="text-slim-med color-primary-text-light dark:color-primary-text-dark font-semibold">Valor a ser pago</Text>
                <Text className="font-normal text-boom color-primary-text-light dark:color-primary-text-dark">{format.format(100)}</Text>
                <Text className="text-default font-light color-primary-opacity-color-text">Para Rodrigos Gaspar Duntra</Text>
            </View>

        </SafeAreaView>
    )
}