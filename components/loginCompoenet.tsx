import { View } from "react-native";
import FormLogin from "./formLogin";
import Title from "./title";

export default function Login(){
    return(
        <View className="w-[80%] h-[60%] rounded-[20px]">
            <Title title="Entrar" plus="Insira seus dados para acessar a conta"/>
            <FormLogin/>
        </View>
    )
}