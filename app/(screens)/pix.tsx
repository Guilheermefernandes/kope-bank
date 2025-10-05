import GlobalHeader from "@/components/globaHeader";
import SquaresPix from "@/components/squaresPix";
import { SafeAreaView } from "react-native-safe-area-context";

export default function Screen(){
    return (
        <SafeAreaView className="flex-1 dark:bg-dark-bg px-8">
            <GlobalHeader/>
            <SquaresPix/>
        </SafeAreaView>
    )
}