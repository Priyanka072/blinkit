import React from "react";
import { View, Text, StatusBar } from "react-native";

import OTPInputView from "@twotalltotems/react-native-otp-input";


const otp = () => {
    return (
        <View>
            <View>
                <StatusBar backgroundColor='#808080'></StatusBar>
                <Text style={{ alignSelf: 'center', marginTop: 30, color: '#000000' }}>We've sent a verification code to</Text>

                <Text style={{ alignSelf: 'center', marginTop: 5, color: '#000000' }}>+91 123456789</Text>


                <View>
                    <OTPInputView
                    codeInputFieldStyle={{ height: 50,borderWidth: 1, borderRadius: 10, borderColor: '#808080'}}
                        codeInputHighlightStyle={{ borderWidth: 1.2, borderColor: '#000000', borderRadius: 10 }}
                        pinCount={4}
                        style={{
                           width: '75%',
                           alignSelf: 'center',
                           height: 100,
                           marginTop: 10,
                           borderRadius: 10,
                        }}
                    >
                    </OTPInputView>
                </View>
                <Text style={{alignSelf: 'center', marginTop: 30}}>
                    Resend OTP in 19
                </Text>

            </View>
            <View>

            </View>
        </View>);
}

export default otp