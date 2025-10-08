import { colors } from "@/theme/colors";
import { Stack } from "expo-router";
import { useColorScheme } from "nativewind";

export default function PixLayout(){

    const { colorScheme, setColorScheme } = useColorScheme()

    return (
        <Stack screenOptions={{
            headerShown: true,
            headerStyle: {
                backgroundColor: colorScheme === 'light' ? colors.bg_color_light : colors.bg_color_dark,
            },
            headerTintColor: colorScheme === 'light' ? colors.text_light : colors.text_dark,
        }}>
            <Stack.Screen name="index" options={{
                headerShown: true,
                title: 'Pix',
                headerStyle: {
                    backgroundColor: colorScheme === 'light' ? colors.bg_color_light : colors.bg_color_dark,
                },
                headerTintColor: colorScheme === 'light' ? colors.text_light : colors.text_dark,
                headerTitleStyle: {
                    fontWeight: 'bold'
                },
                headerShadowVisible: false
            }}/>
            <Stack.Screen name="receiv" />
            <Stack.Screen name="send" options={{
                title: 'Enviar pix'
            }}/>
            <Stack.Screen name="information" options={{
                title: 'Informações'
            }}/>
        </Stack>
    )
}