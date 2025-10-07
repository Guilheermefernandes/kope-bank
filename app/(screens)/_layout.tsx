import { Stack } from "expo-router";
import { useColorScheme } from "nativewind";

export default function ScreensLayout(){

    const {colorScheme, setColorScheme} = useColorScheme()

    return (
        <Stack screenOptions={{
            headerShown: false
        }}>
            <Stack.Screen name="home"/>
            <Stack.Screen name="cards" />
            <Stack.Screen name="search" />
        </Stack>
    )
}