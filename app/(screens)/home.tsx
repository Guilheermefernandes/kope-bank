
import AccountBalance from "@/components/accountBalance";
import Card from "@/components/card";
import Cards from "@/components/cards";
import Header from "@/components/header";
import HomeActions from "@/components/homeActions";
import InvestimentsBtn from "@/components/investimentsBtn";
import Limit from "@/components/limit";
import SearchHome from "@/components/searchHome";
import { SafeAreaView } from "react-native-safe-area-context";

export default function Screen(){
    return (
        <SafeAreaView className="dark:bg-dark-bg flex-1 px-8">
            <Header />
            <AccountBalance/>
            <HomeActions/>
            <SearchHome/>
            <Card>
                <Limit/>
            </Card>
            <Card>
                <Cards/>
            </Card>
            <Card>
                <InvestimentsBtn />
            </Card>
        </SafeAreaView>
    )
}