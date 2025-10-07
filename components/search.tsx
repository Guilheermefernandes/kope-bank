import { colors } from "@/theme/colors";
import { tree, TreeItem } from "@/tree_tracking/tree";
import { router } from "expo-router";
import { LibraryBig } from "lucide-react-native";
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
            <View className="flex flex-row items-center bg-secondary-bg-light dark:bg-secondary-bg-dark pr-2 rounded-default">
                <View className="ml-4">
                    <LibraryBig color={colorScheme === 'light' ? colors.text_light: colors.text_dark}/>
                </View>
                <TextInput
                    placeholder="Pesquisar"
                    className="flex-1 py-5 pl-4 pr-8 bg-secondary-bg-light dark:bg-secondary-bg-dark rounded-default color-primary-text-light dark:color-primary-text-dark"
                    placeholderTextColor={colorScheme === 'light' ? colors.text_light : colors.text_dark}
                    value={search}
                    onChangeText={t => setSearch(t)}
                    autoFocus           
                />
            </View>
            <View className="mt-10 gap-4">
                {result.length > 0 &&
                    <View>
                        <Text className="text-med mb-8 color-primary-text-light dark:color-primary-text-dark">Resultados</Text>
                        {
                            result.map(i => (
                                <Pressable key={i.path} 
                                    className="py-4 border-b border-secondary-bg-light dark:border-secondary-bg-dark"
                                onPress={() => router.push({
                                    pathname: i.path
                                })}>
                                    <Text className="color-primary-text-light dark:color-primary-text-dark">{i.name}</Text>
                                    <Text className="text-slim color-slate-400">{i.describe}</Text>
                                </Pressable>
                            ))
                        }
                    </View>
                }
            </View>
        </View>
    )
}