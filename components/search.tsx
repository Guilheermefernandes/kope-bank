import { colors } from "@/theme/colors";
import { tree, TreeItem } from "@/tree_tracking/tree";
import { router } from "expo-router";
import { useColorScheme } from "nativewind";
import { useEffect, useState } from "react";
import { Pressable, Text, TextInput, View } from "react-native";

export default function Search(){

    const [search, setSearch] = useState<string | undefined>(undefined)
    const [result, setResult] = useState<TreeItem[] | []>([])
    
    const { colorScheme, setColorScheme } = useColorScheme()

    useEffect(() => {
        if(search == undefined || search.length == 0){
            setResult([])
            return
        }
        const result = tree.screens.filter(i => i.name.toLowerCase().includes(search.toLocaleLowerCase()))
        setResult(result)
    }, [search])

    return(
        <View className="mb-10">
            <TextInput
                placeholder="Pesquisar"
                className="py-5 px-10 bg-secondary-bg-dark rounded-default color-primary-text-light dark:color-primary-text-dark"
                placeholderTextColor={colorScheme === 'light' ? colors.text_light : colors.text_dark}
                value={search}
                onChangeText={t => setSearch(t)}            
            />
            <View className="color-white absolute gap-2 top-[60px] z-50 rounded-default p-4 left-0 right-0 bg-black dark:bg-black">
                {result.length > 0 &&
                    result.map(i => (
                        <Pressable key={i.path} 
                            className="py-4 px-6 bg-secondary-bg-dark rounded-default"
                        onPress={() => router.push({
                            pathname: i.path
                        })}>
                            <Text className="color-white">{i.name}</Text>
                        </Pressable>
                    ))
                }
            </View>
        </View>
    )
}