import { WalletCards } from "lucide-react-native";
import { useColorScheme } from "nativewind";
import { View } from "react-native";
import HomeBtn from "./homeBtn";

export default function Cards(){

    const { colorScheme, setColorScheme } = useColorScheme()

    return (
        <View className="flex flex-row justify-between items-center">
            <HomeBtn label="Meus cartões" path="../(screens)/cards" icon={<WalletCards color={colorScheme === 'light' ? '#F0A500' : '#FFC542'} />}/>
        </View>
    )
}