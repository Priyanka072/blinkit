import React from "react";

import { Image, View, StatusBar } from "react-native";

var logo = require('./Assets/logo.png')
const Splash = () => {
    return (
        <View style={{ width: '100%', height: '100%', backgroundColor: '#ffe23f' }}>
            <StatusBar backgroundColor='#ffe23f'></StatusBar>
            <Image source={logo} style={{
                alignSelf: 'center',
                justifyContent: 'center',
                marginTop: 300,
                width: 250,
                height: 100,
            }} ></Image>
        </View>

    );
}
export default Splash;