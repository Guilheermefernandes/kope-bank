import { Inbox, SunMoon, User } from 'lucide-react-native';
import { useColorScheme } from 'nativewind';
import { Image, Pressable, View } from "react-native";

export default function Header(){

    const { colorScheme, setColorScheme }= useColorScheme()

    return (
         <View className="h-36 flex-row items-center justify-between">
            {colorScheme === 'dark' &&
                <Image 
                    source={require('../assets/images/bank_logo.png')} 
                    className="size-24"
                />
            }
            {colorScheme === 'light' &&
                <Image 
                    source={require('../assets/images/dark_Logo.png')} 
                    className="size-24"
                />
            }
            <View className='flex flex-row gap-4'>
                <View className="bg-secondary-bg-light dark:bg-secondary-bg-dark w-14 h-14 rounded-full justify-center items-center">
                    <User color={colorScheme === 'light' ? '#121212' : '#FFFFFF'}/>
                </View>
                <View className="bg-secondary-bg-light dark:bg-secondary-bg-dark w-14 h-14 rounded-full justify-center items-center">
                    <Inbox color={colorScheme === 'light' ? '#121212' : '#FFFFFF'}/>
                </View>
                <Pressable 
                        className="bg-secondary-bg-light dark:bg-secondary-bg-dark w-14 h-14 rounded-full justify-center items-center"
                        onPress={() => setColorScheme(colorScheme === 'dark' ? 'light' : 'dark')}
                    >
                    
                    <SunMoon color={colorScheme === 'light' ? '#121212' : '#FFFFFF'} />
                </Pressable>
            </View>
            
        </View>
    )
}