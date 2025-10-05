import { Inbox, User } from 'lucide-react-native';
import { Image, View } from "react-native";

export default function Header(){
    return (
         <View className="h-36 flex-row items-center justify-between">
            <Image 
                source={require('../assets/images/bank_logo.png')} 
                className="size-24"
            />
            <View className='flex flex-row gap-4'>
                <View className="bg-secondary-bg-dark w-14 h-14 rounded-full justify-center items-center">
                    <User color="#fff"/>
                </View>
                <View className="bg-secondary-bg-dark w-14 h-14 rounded-full justify-center items-center">
                    <Inbox color="#fff"/>
                </View>
            </View>
            
        </View>
    )
}