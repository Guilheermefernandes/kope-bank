import { BanknoteArrowUp, Barcode, Box, HandCoins, Smartphone } from "lucide-react-native";
import { useColorScheme } from "nativewind";
import { ScrollView, View } from "react-native";
import SquareActions from "./squareActions";

export default function HomeActions(){

    const { colorScheme, setColorScheme } = useColorScheme()

    return (
        <View>
            <ScrollView horizontal showsHorizontalScrollIndicator={false} className="my-10">
                <SquareActions 
                    icon={<BanknoteArrowUp color={colorScheme == 'light' ? '#F0A500' : '#FFC542'} size={30}/>}
                    title="Pix"
                    path="../(screens)/(pix)"
                />
                <SquareActions 
                    icon={<Barcode color={colorScheme == 'light' ? '#F0A500' : '#FFC542'} size={30}/>}
                    title="Pagar"
                    path="../(screens)/(pix)"
                />
                <SquareActions 
                    icon={<Smartphone color={colorScheme == 'light' ? '#F0A500' : '#FFC542'} size={30}/>}
                    title="Recarga"
                    path="../(screens)/(pix)"
                />
                <SquareActions 
                    icon={<HandCoins color={colorScheme == 'light' ? '#F0A500' : '#FFC542'} size={30}/>}
                    title="Emprestado"
                    path="../(screens)/(pix)"
                />
                <SquareActions 
                    icon={<Box color={colorScheme == 'light' ? '#F0A500' : '#FFC542'} size={30}/>}
                    title="Caixinha"
                    path="../(screens)/(pix)"
                />
            </ScrollView>
        </View>
    )
}