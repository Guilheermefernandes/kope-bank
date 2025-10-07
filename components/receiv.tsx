import { ReactNode } from "react";
import { Pressable, ScrollView, Text, View } from "react-native";

type Props = {
    children: ReactNode;
    index: number;
    onChange: (n: number) => void
}

export default function ReceivComponent({index, children, onChange}: Props){
    return(
        <View className="flex-1 justify-between">
            <ScrollView showsVerticalScrollIndicator={false} className="flex-1">
                {children}
            </ScrollView>
            <Pressable 
                onPress={() => onChange(index + 1)}
                className="py-6 rounded-default px-10 bg-primary-color-light dark:bg-primary-color-dark"
            >
                <Text className="text-center">Gerar QRCode</Text>
            </Pressable>
        </View>
    )
}