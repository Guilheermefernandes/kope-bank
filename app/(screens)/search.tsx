import Search from "@/components/search";
import { SafeAreaView } from "react-native-safe-area-context";

export default function Screen(){
    return (
        <SafeAreaView className="flex-1 dark:bg-dark-bg p-default-screen-x">
            <Search/>
        </SafeAreaView>
    )
}