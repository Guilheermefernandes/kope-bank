import { colors } from "@/theme/colors";
import { RelativePathString, router } from "expo-router";
import { ChevronRight } from "lucide-react-native";
import { useColorScheme } from "nativewind";
import { ReactNode } from "react";
import { Pressable, Text, View } from "react-native";

type Props = {
    label: string;
    icon: ReactNode;
    path: RelativePathString;
}

export default function HomeBtn({ label, icon, path }: Props){

    const { colorScheme, setColorScheme } = useColorScheme()

    return (
        <Pressable 
               className="flex flex-row justify-between items-center"
                onPress={() => router.push({
                    pathname: path
                })}
        >
            
            <View className="flex flex-row items-center gap-6">
                {icon}
                <Text className="text-slim-med color-primary-text-light dark:color-primary-text-dark">{label}</Text>
            </View>
            <ChevronRight 
                color={colorScheme === 'light' ? colors.color_light : colors.color_dark}
            />
        </Pressable>
    )
}