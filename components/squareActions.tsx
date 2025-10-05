import { ReactNode } from "react";
import { Text, View } from "react-native";

type Props = {
    icon: ReactNode;
    title: string
}

export default function SquareActions({icon, title}: Props){
    return (
        <View className="mr-4 bg-secondary-bg-light dark:bg-secondary-bg-dark w-28 h-28 rounded-default justify-center items-center">
            <View>
                {icon}
                <Text className="text-slim color-black dark:color-white text-center">{title}</Text>
            </View>
        </View>
    )
}