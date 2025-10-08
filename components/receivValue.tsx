import { colors } from "@/theme/colors";
import { useColorScheme } from "nativewind";
import { useState } from "react";
import { Text, TextInput, View } from "react-native";

export default function ReceivValue(){

    const [ value, setValue ] = useState('0')

    const n = new Intl.NumberFormat('pt-BR', {
            style: 'currency',
            currency: 'BRL'
        })

    const { colorScheme, setColorScheme } = useColorScheme()

    const formatValue = (text: string) => {
        const onlyNums = text.replace(/\D/g, "");
        const number = parseFloat(onlyNums) / 100 || 0;
        return n.format(number);
    };

    const handleChange = (text: string) => {
        const onlyNums = text.replace(/\D/g, "");
        setValue(onlyNums);
    };

    return(
        <View>
            <Text className="text-boom color-primary-text-light dark:color-primary-text-dark">
                Informe o valor a receber
            </Text>
            <Text className="text-slim-med my-4 color-primary-opacity-color-text">
                O Valor inserido neste campo será depositdo em sua conta.
            </Text>
            <TextInput
                className="py-4 border-b text-med-boom font-bold color-primary-text-light dark:color-primary-text-dark"
                placeholder="R$ 0,00"
                keyboardType="numeric"
                value={formatValue(value)}
                onChangeText={handleChange}
                placeholderTextColor={colorScheme === 'light' ? colors.text_light : colors.text_dark}
            />
        </View>
    )
}