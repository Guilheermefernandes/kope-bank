import { colors } from "@/theme/colors";
import { BanknoteArrowUp, CalendarClock, Handshake, QrCode } from "lucide-react-native";
import { useColorScheme } from "nativewind";
import { ScrollView } from "react-native";
import SquareActions from "./squareActions";

export default function SquaresPix(){

    const { colorScheme, setColorScheme } = useColorScheme()

    return(
        <ScrollView horizontal>
            <SquareActions 
                title="Enviar" 
                icon={<BanknoteArrowUp color={colorScheme === 'light' ? colors.color_light : colors.color_dark} />}
                path="../(screens)/(pix)/send"

            />
            <SquareActions title="Receber" path="../(screens)/(pix)/receiv" icon={<Handshake color={colorScheme === 'light' ? colors.color_light : colors.color_dark}/>}/>
            <SquareActions title="Qr code" path="../(screens)/(pix)" icon={<QrCode color={colorScheme === 'light' ? colors.color_light : colors.color_dark}/>}/>
            <SquareActions title="Agendar" path="../(screens)/(pix)" icon={<CalendarClock color={colorScheme === 'light' ? colors.color_light : colors.color_dark}/>}/>        
        </ScrollView>
    )
}