import { ReactNode } from "react";
import { View } from "react-native";

type Props = {
    children: ReactNode
}

export default function Card({children}: Props){
    return (
        <View className="">
            {children}
        </View>
    )
}