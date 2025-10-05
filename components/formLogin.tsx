import { router } from "expo-router";
import { Pressable, Text, View } from "react-native";

export default function FormLogin(){
    return(
        <View>
            <Pressable 
                    className="p-4 bg-secondary-color-light dark:bg-primary-color-dark rounded-lg"
                    onPress={() => router.push({
                        pathname: "/(screens)/home"
                    })}
                >
                <Text className="text-black">
                    Ir para a home
                </Text>
            </Pressable>
        </View>
    )
}