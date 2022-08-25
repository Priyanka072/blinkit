import React from "react";

import { NavigationContainer } from "@react-navigation/native";
import Tabs from "./Tabs";
import { Animated, Dimensions, View } from "react-native";
import { transform } from "@babel/core";


const NavigationContain = () => {
    return (
        <NavigationContainer><Tabs />
            <Animated.View style={{ 
                width: getWidth(), 
                height: 5, 
                borderRadius: 5, 
                backgroundColor: '#000000', 
                position: "absolute", 
                bottom: 55,
                transform: [
                    {translateX: tabOffsetValue}
                ]}}>
            </Animated.View>
        </NavigationContainer>
    );

    function getWidth(){
        let width = Dimensions.get("window").width
        width = width - 40
        return width/5
    }
}

export default NavigationContain;