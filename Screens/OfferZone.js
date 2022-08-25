import React from "react";
import { View, Text, TouchableOpacity, Image,ScrollView } from "react-native";

import ImageSlider from "./ImageSlider";

export default function OfferZone() {
    return (
        <View style={{ backgroundColor: '#FFFFFF', height:'100%' }}>
            
            <View >
                <ScrollView>
                <Text style={{padding:10, fontSize: 25, fontFamily: 'Roboto-Black', color: '#000000' }}>
                    Offer Zone
                </Text>

                <Text style={{paddingLeft:10, color:'#000000'}}>
                    The best of offers on everyday essential for you
                </Text>

                <TouchableOpacity>
                    <Image source={{ uri: 'https://cdn.grofers.com/cdn-cgi/image/f=auto,fit=scale-down,q=50,metadata=none,w=450/layout-engine/2022-08/HUL.jpg'}} style={{width:'90%', alignSelf:'center', height:200, marginTop: 20,}}></Image>
                </TouchableOpacity>

                <TouchableOpacity>
                    <Image source={{ uri: 'https://cdn.grofers.com/cdn-cgi/image/f=auto,fit=scale-down,q=50,metadata=none,w=450/layout-engine/2022-08/Home-care_RN.jpg'}} style={{width:'90%', alignSelf:'center', height:200, marginTop: 20,marginBottom:10}}></Image>
                </TouchableOpacity>

                <ImageSlider></ImageSlider>
                
                </ScrollView>
                
            </View>
        </View>
    );
}