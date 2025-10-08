import * as LocalAuthentication from 'expo-local-authentication';
import { router } from 'expo-router';
import { useEffect, useState } from "react";
import { Pressable, Text, View } from "react-native";
import InputValuePrice from "./inputValuePrice";

export default function Pix(){

    const [ value, setValue ] = useState(0)
    const [ error, setError ] = useState<string | undefined>(undefined)

    const next = async () => {

        if(value == 0){
            setError('Informe uma quantidade!')
            return
        }

        if(value >= 2000){

            const resultAuth = await auth()
            if(resultAuth == 0) return;

        }

        router.push({
            pathname: "/(screens)/(pix)/information"
        })

        //Implementar

    }

    const auth = async (): Promise<number> => {
        const hasHarware = await LocalAuthentication.hasHardwareAsync()
        const isEnrolled = await LocalAuthentication.isEnrolledAsync()
    
        if(!hasHarware || !isEnrolled){
            alert('Seus dispositivo não possui autenticação local para proseguir!')
            return 0
        }

        const do_ = await LocalAuthentication.authenticateAsync({
            cancelLabel: 'Cancelar',
            promptMessage: 'Para proseguir, confirme!'
        })

        if(!do_.success){
            alert('Autenticação negada!')
            return 0
        }

        return 1

    }

    useEffect(() => {
        if(value > 0){
            setError(undefined)
        }
    }, [value])

    return (
        <View className="flex-1 mt-0 justify-between">



            <View>
                <InputValuePrice 
                    label="Informe a quantidade que deseja enviar"
                    describe="O valor informado no campo a baixo será debitado em sua conta!"
                    onChange={setValue}
                />
                <View className="mt-6">
                    {error != undefined &&
                        <Text className="color-primary-text-light dark:color-primary-text-dark">{error}</Text>
                    }  
                </View>
            </View>

            <Pressable 
                className="py-6 bg-primary-color-light dark:bg-primary-color-dark rounded-default"
                onPress={() => next()}    
            >
                <Text className="text-center">Próximo</Text>
            </Pressable>
        </View>
    )
}