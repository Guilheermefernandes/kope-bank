
import AccountBalance from "@/components/accountBalance";
import Header from "@/components/header";
import HomeActions from "@/components/homeActions";
import { SafeAreaView } from "react-native-safe-area-context";

export default function Screen(){
    return (
        <SafeAreaView className="dark:bg-dark-bg flex-1 px-8">
            <Header />
            <AccountBalance/>
            <HomeActions/>
        </SafeAreaView>
    )
}