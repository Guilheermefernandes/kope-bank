import { Text, View } from "react-native";

type Props = {
    title: string;
    plus: string
}

export default function Title({title, plus}: Props){
    return(
        <View>
            <Text className="font-bold text-boom color-primary-text-light dark:color-primary-text-dark">{title}</Text>
            <Text className="text-slim color-primary-text-light dark:color-primary-text-dark">{plus}</Text>
        </View>
    )
}