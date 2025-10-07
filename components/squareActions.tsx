import { RelativePathString, router } from "expo-router";
import { ReactNode } from "react";
import { Pressable, Text, View } from "react-native";

type Props = {
    icon: ReactNode;
    title: string
    path: RelativePathString
}

export default function SquareActions({icon, title, path}: Props){
    return (
        <Pressable 
                className="mr-4 bg-secondary-bg-light dark:bg-secondary-bg-dark w-28 h-28 rounded-default justify-center items-center"
                onPress={() => router.push({
                    pathname: path
                })}
            >
            <View className="flex flex-col justify-center  items-center">
                {icon}
                <Text className="text-slim color-black dark:color-white text-center">{title}</Text>
            </View>
        </Pressable>
    )
}