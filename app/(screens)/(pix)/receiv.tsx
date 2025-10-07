import ReceivComponent from "@/components/receiv";
import ReceivValue from "@/components/receivValue";
import Test from "@/components/teste";
import { ReactNode, useState } from "react";
import { SafeAreaView } from "react-native-safe-area-context";

export default function Screen(){

    const [index, setIndex] = useState<number>(0)

    const [pages, setPages] = useState<ReactNode[]>([
        <ReceivValue/>, <Test/>
    ])

    const format = new Intl.NumberFormat('pt-BR', {
        style: 'currency',
        currency: 'BRL'
    })

    const addValue = (n: number) => {
        setIndex(n)
    }

    return(
        <SafeAreaView className="flex-1 dark:bg-dark-bg p-default-screen-x">
            <ReceivComponent index={index} onChange={v => addValue(v)}>
                {pages[index]}
            </ReceivComponent>
        </SafeAreaView>
    )
}