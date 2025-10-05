import { ChevronRight, WalletCards } from "lucide-react-native";
import { useColorScheme } from "nativewind";
import { Text, View } from "react-native";

export default function Cards(){

    const { colorScheme, setColorScheme } = useColorScheme()

    return (
        <View className="flex flex-row justify-between items-center">
            <View className="flex flex-row items-center gap-6">
                <WalletCards color={colorScheme === 'light' ? '#F0A500' : '#FFC542'} />
                <Text className="text-slim-med color-primary-text-light dark:color-primary-text-dark">Meus cartões</Text>
            </View>
            <ChevronRight 
                color={colorScheme === 'light' ? '#F0A500' : '#FFC542'}
            />
        </View>
    )
}