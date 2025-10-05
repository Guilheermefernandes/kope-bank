import { ReactNode } from "react";
import { View } from "react-native";

type Props = {
    children: ReactNode
}

export default function Card({children}: Props){
    return (
        <View className="mb-10 p-6 w-auto bg-secondary-bg-light dark:bg-secondary-bg-dark rounded-default">
            {children}
        </View>
    )
}