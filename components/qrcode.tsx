import { View } from "react-native";
import QRCode from 'react-native-qrcode-svg';

export default function QrCodeGenerate(){
    return(
        <View className="justify-center items-center my-20">
            <View className="p-4 bg-primary-color-light dark:bg-primary-color-dark rounded-default">
                <View className="p-6 bg-secondary-bg-light dark:bg-secondary-bg-dark rounded-default">
                    <QRCode 
                        value="Olá estou funcionando"
                        color="#fff"
                        backgroundColor="#000"
                        size={200}
                    />
                </View>
            </View>
        </View>
    )
}