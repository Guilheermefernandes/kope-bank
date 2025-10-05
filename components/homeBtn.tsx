import { colors } from "@/theme/colors";
import { ChevronRight } from "lucide-react-native";
import { useColorScheme } from "nativewind";
import { ReactNode } from "react";
import { Text, View } from "react-native";

type Props = {
    label: string,
    icon: ReactNode
}

export default function HomeBtn({ label, icon }: Props){

    const { colorScheme, setColorScheme } = useColorScheme()

    return (
        <View className="flex flex-row justify-between items-center">
            <View className="flex flex-row items-center gap-6">
                {icon}
                <Text className="text-slim-med color-primary-text-light dark:color-primary-text-dark">{label}</Text>
            </View>
            <ChevronRight 
                color={colorScheme === 'light' ? colors.color_light : colors.color_dark}
            />
        </View>
    )
}