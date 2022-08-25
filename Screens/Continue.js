import React, { useState, useRef } from "react";

import { View, Text, StyleSheet, StatusBar, TouchableOpacity, ImageBackground } from "react-native";

import ImageBlurShadow from "react-native-image-blur-shadow";

import PhoneInput from "react-native-phone-number-input";

var continueimg = require('./Assets/continue.png')

const ContinueView = () => {

    const [phoneNumber, setPhoneNumber] = useState('');

    const phoneInput = useRef(null);

    return (
        <View>
            <View style= {{ width: '100%', height: '100%', backgroundColor: '#FFFFFF' }}>
                <StatusBar backgroundColor='#f8cb46'></StatusBar>

                <View>
                    <ImageBackground source={continueimg} style={{ width: '100%', height: 300, }}>
                        <TouchableOpacity style={{ alignSelf: 'flex-end', marginRight: 25, marginTop: 15, opacity: 0.8 }}>
                            <Text style={{ color: '#FFFFFF', backgroundColor: '#000000',paddingLeft:12, width: 100,fontSize:17, borderRadius: 20, height: 30, paddingTop: 2, alignSelf: 'center' }}>Skip login</Text>
                        </TouchableOpacity>
                    </ImageBackground>
                </View>



                <View >
                    <Text style={styles.textA}>Grocery delivery</Text>

                    <Text style={styles.textB}>in minutes</Text>

                    <Text style={{ alignSelf: 'center', marginTop: 10, }}>Log in or sign up</Text>


                    <PhoneInput
                        ref={phoneInput}
                        defaultValue={phoneNumber}
                        defaultCode="IN"
                        layout="second"
                        withShadow
                        autoFocus
                        containerStyle={styles.phoneNumberView}
                        textContainerStyle={{ paddingVertical: 0 }}
                        onChangeFormattedText={text => {
                            setPhoneNumber(text);
                        }}
                    />



                    <TouchableOpacity style={{ marginTop: 15, backgroundColor: '#048419', width: '90%', alignSelf: 'center', height: 45, borderRadius: 10 }}>
                        <Text style={{ fontSize: 15, marginTop: 10, color: '#FFFFFF', alignSelf: 'center', fontFamily: 'Roboto-Black' }}>Continue</Text>
                    </TouchableOpacity>

                    <TouchableOpacity>
                        <Text style={{ alignSelf: 'center', marginTop: 10, color: '#0000FF' }}>or Log in via truecaller</Text>
                    </TouchableOpacity>


                </View>
                <View >
                    <TouchableOpacity style={{ marginTop: 50, }}>
                        <Text style={{ alignSelf: 'center', marginTop: 10 }}>Terms of services</Text>
                    </TouchableOpacity>
                </View>

                <View>
                    <TouchableOpacity>
                        <Text style={{ alignSelf: 'center', marginTop: 10 }}>Privacy Policy</Text>
                    </TouchableOpacity>
                </View>



            </View>
        </View>

    );
}
export default ContinueView;

const styles = StyleSheet.create({
    textA: {
        fontSize: 20,
        color: '#000000',
        alignSelf: 'center',
        marginTop: 50,
        fontFamily: 'Roboto-Black'
    },

    textB: {
        fontSize: 20,
        color: '#000000',
        alignSelf: 'center',
        fontFamily: 'Roboto-Black'
    },

    textInput: {
        width: '90%',
        height: 45,
        alignSelf: 'center',
        marginTop: 30,
        borderColor: '#000000',
        borderWidth: 1,
        borderRadius: 10,
    },
    phoneNumberView: {
        marginTop: 30,
        width: '90%',
        height: 50,
        backgroundColor: 'white',
        alignSelf: 'center',

    },
})