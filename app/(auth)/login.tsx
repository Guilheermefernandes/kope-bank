import Login from "@/components/loginCompoenet";
import { useColorScheme } from "nativewind";
import { SafeAreaView } from "react-native-safe-area-context";
import '../../global.css';

export default function Screen(){

    const { colorScheme, setColorScheme } = useColorScheme()

    return(
        <SafeAreaView className="flex-1 bg-white dark:bg-dark-bg justify-center items-center">
            <Login/>
        </SafeAreaView>
    )
}