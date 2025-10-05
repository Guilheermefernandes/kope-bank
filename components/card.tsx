import { ReactNode } from "react";
import { View } from "react-native";

type Props = {
    children: ReactNode
}

export default function Card({children}: Props){
    return (
        <View className="p-4 w-auto h-28 bg-secondary-bg-light dark:bg-secondary-bg-dark rounded-default">
            {children}
        </View>
    )
}