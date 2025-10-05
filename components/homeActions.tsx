import { BanknoteArrowUp, Barcode, Box, HandCoins, Smartphone } from "lucide-react-native";
import { useColorScheme } from "nativewind";
import { ScrollView } from "react-native";
import SquareActions from "./squareActions";

export default function HomeActions(){

    const { colorScheme, setColorScheme } = useColorScheme()

    return (
        <ScrollView horizontal showsVerticalScrollIndicator={false} className="my-10" >
            <SquareActions 
                icon={<BanknoteArrowUp color={colorScheme == 'light' ? '#F0A500' : '#FFC542'} size={30}/>}
                title="Pix"
            />
            <SquareActions 
                icon={<Barcode color={colorScheme == 'light' ? '#F0A500' : '#FFC542'} size={30}/>}
                title="Pagar"
            />
            <SquareActions 
                icon={<Smartphone color={colorScheme == 'light' ? '#F0A500' : '#FFC542'} size={30}/>}
                title="Recarga"
            />
            <SquareActions 
                icon={<HandCoins color={colorScheme == 'light' ? '#F0A500' : '#FFC542'} size={30}/>}
                title="Emprestado"
            />
            <SquareActions 
                icon={<Box color={colorScheme == 'light' ? '#F0A500' : '#FFC542'} size={30}/>}
                title="Caixinha"
            />
        </ScrollView>
    )
}