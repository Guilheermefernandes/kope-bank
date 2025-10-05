import { Text, View } from "react-native";

export default function AccountBalance(){

    const format = new Intl.NumberFormat('pt-BR', {
        style: 'currency',
        currency: 'BRL'
    })

    return(
        <View>
            <Text className="text-default font-normal color-primary-text-light dark:color-primary-text-dark">Saldo em conta</Text>
            <Text className="font-bold text-boom color-primary-text-light dark:color-primary-text-dark">
                {format.format(24517)}
            </Text>
        </View>
    )
}