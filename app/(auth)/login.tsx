import Login from "@/components/loginCompoenet";
import * as LocalAuthentication from 'expo-local-authentication';
import { router } from "expo-router";
import { useColorScheme } from "nativewind";
import { useEffect } from "react";
import { Pressable, Text } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import '../../global.css';

export default function Screen(){

    const { colorScheme, setColorScheme } = useColorScheme()

    const auth = async () => {
        const hasHardware = await LocalAuthentication.hasHardwareAsync()
        const isEnrolled = await LocalAuthentication.isEnrolledAsync()

        if(!hasHardware || !isEnrolled){
            alert('O aparelho não possui suporte ou não há nenhuma autenticação cadastrada.')
            return;
        }

        const result = await LocalAuthentication.authenticateAsync({
            promptMessage: 'Confirme sua identidade',
            fallbackLabel: 'Prencher senha',
            cancelLabel: 'Cancelar',
        })

        if(result.success){
            router.replace({
                pathname: "/(screens)/home"
            })
        }else{
            alert('Ocorreu um erro tente novamente!')
        }
    }

    useEffect(() => {
        auth()
    }, [])

    return(
        <SafeAreaView className="flex-1 bg-white dark:bg-dark-bg justify-center items-center">
            <Login/>
            <Pressable 
                    className="py-4 px-8 bg-primary-color-light dark:bg-primary-color-dark rounded-default"
                    onPress={() => auth()}
                >
                <Text>Usar biometria</Text>
            </Pressable>
        </SafeAreaView>
    )
}