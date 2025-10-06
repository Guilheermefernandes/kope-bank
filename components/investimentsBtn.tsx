import { colors } from "@/theme/colors";
import { ChartSpline } from "lucide-react-native";
import { useColorScheme } from "nativewind";
import { View } from "react-native";
import HomeBtn from "./homeBtn";

export default function InvestimentsBtn(){

    const { colorScheme, setColorScheme } = useColorScheme()

    return(
        <View>
            <HomeBtn label="Meus investimentos" path="./(screens)/pix" icon={<ChartSpline color={colorScheme == 'light' ? colors.color_light : colors.color_dark} />}/>
        </View>
    )
}