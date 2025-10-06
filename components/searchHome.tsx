import { colors } from "@/theme/colors";
import { useColorScheme } from "nativewind";
import { TextInput, View } from "react-native";

export default function SearchHome(){

    const { colorScheme, setColorScheme } = useColorScheme()

    return(
        <View className="mb-10">
            <TextInput
                placeholder="Pesquisar"
                className="py-5 px-10 bg-secondary-bg-dark rounded-default color-primary-text-light dark:color-primary-text-dark"
                placeholderTextColor={colorScheme === 'light' ? colors.text_light : colors.text_dark}
            />
        </View>
    )
}