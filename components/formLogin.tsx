import { colors } from "@/theme/colors";
import { useColorScheme } from "nativewind";
import { TextInput, View } from "react-native";

export default function FormLogin(){

    const { colorScheme, setColorScheme } = useColorScheme()

    return(
        <View className="mt-20">
            <TextInput
                className="py-6 pl-8 color-primary-text-light: dark:color-primary-text-dark bg-secondary-bg-light dark:bg-secondary-bg-dark rounded-default"
                placeholder="CPF"
                cursorColor={colorScheme === 'light' ? colors.text_light : colors.text_dark}
                placeholderTextColor={colorScheme === 'dark' ? colors.text_dark : ''}
            />
        </View>
    )
}