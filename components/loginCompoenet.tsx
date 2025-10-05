import { Link } from "expo-router";
import { Text, View } from "react-native";
import FormLogin from "./formLogin";

export default function Login(){
    return(
        <View className="w-[80%] h-[60%] rounded-[20px]">
            
            <FormLogin/>
            <Text className="text-center mt-10 color-primary-opacity-color-text">
                Não possui conta? <Link href="/(auth)/register" className="color-primary-text-light dark:color-primary-text-dark">Criar conta</Link>
            </Text>
        </View>
    )
}