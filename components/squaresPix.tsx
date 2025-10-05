import { colors } from "@/theme/colors";
import { BanknoteArrowUp, CalendarClock, QrCode } from "lucide-react-native";
import { useColorScheme } from "nativewind";
import { ScrollView } from "react-native";
import SquareActions from "./squareActions";

export default function SquaresPix(){

    const { colorScheme, setColorScheme } = useColorScheme()

    return(
        <ScrollView horizontal>
            <SquareActions 
                title="Enviar" 
                icon={<BanknoteArrowUp color={colorScheme === 'light' ? colors.color_light : colors.color_dark}
            />}/>
            <SquareActions title="Qr code" icon={<QrCode color={colorScheme === 'light' ? colors.color_light : colors.color_dark}/>}/>
            <SquareActions title="Agendar" icon={<CalendarClock color={colorScheme === 'light' ? colors.color_light : colors.color_dark}/>}/>
        </ScrollView>
    )
}