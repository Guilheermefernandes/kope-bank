import { router } from "expo-router";
import { useColorScheme } from "nativewind";
import { useEffect } from "react";
import { Image } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

export default function Screen(){

    const { colorScheme, setColorScheme } = useColorScheme()

    const wait = () => new Promise(resolver => setTimeout(resolver, 2000))

    const do_ = async () => {
        await wait()
        router.replace({
            pathname: "/(auth)/login"
        })
    }

    useEffect(() => {
        do_()
    }, [])

    return(
        <SafeAreaView className="flex flex-1 justify-center items-center dark:bg-dark-bg">
            {colorScheme === 'light' &&
                <Image
                    source={require('../assets/images/dark_Logo.png')}
                    className="size-52"
                />
            }
            {colorScheme === 'dark' &&
                <Image
                    source={require('../assets/images/bank_logo.png')}
                    className="size-52"
                />
            }
        </SafeAreaView>
    )
}