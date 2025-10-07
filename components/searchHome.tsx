import { colors } from "@/theme/colors";
import { router } from "expo-router";
import { Search } from "lucide-react-native";
import { useColorScheme } from "nativewind";
import { Pressable, TextInput } from "react-native";

export default function SearchHome(){

    const { colorScheme, setColorScheme } = useColorScheme()

    return(
        <Pressable 
            className="mb-10 flex flex-row items-center bg-secondary-bg-light dark:bg-secondary-bg-dark pl-6 rounded-default"
            onPress={() => router.push({
                pathname: "/(screens)/search"
            })}
        >
            <Search color={colorScheme === 'light' ? colors.text_light : colors.text_dark}/>
            <TextInput
                placeholder="Pesquisar"
                className="flex-1 py-5 px-4 bg-transparent rounded-default color-primary-text-light dark:color-primary-text-dark"
                placeholderTextColor={colorScheme === 'light' ? colors.text_light : colors.text_dark}
                onFocus={() => router.push({
                    pathname: '/(screens)/search'
                })}        
            />
        </Pressable>
    )
}