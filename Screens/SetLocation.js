import React from "react";

import { StatusBar, View, Text, TouchableOpacity, Image } from "react-native";

const location = () => {

    return (
        <View >
            <StatusBar backgroundColor= '#FFFFFF'></StatusBar>          
           
            <Text style={{alignSelf:'center', color:'#000000', marginTop: 40, fontSize: 15, fontFamily:'Roboto-Black'}}>Not available</Text>
            <Text style= {{ alignSelf: 'center', marginTop: 5}}>Sorry, blinkit is not available at your current </Text>
            <Text style= {{ alignSelf: 'center'}}>location yet. We will be there soon - hang on</Text>
            <Text style= {{ alignSelf: 'center'}}> tight!</Text>
            <TouchableOpacity style={{backgroundColor:'#048419', width: '80%',alignSelf: 'center', height: 50, marginTop: 10, borderRadius: 10}}>
                <Text style={{color: '#FFFFFF', fontSize: 18, alignSelf: 'center', paddingTop: 11}}>Set Location Manually</Text>
            </TouchableOpacity>
        </View>
    );
}

export default location