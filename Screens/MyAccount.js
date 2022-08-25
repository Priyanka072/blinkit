import React from "react";
import { Component } from "react";
import { View, Text, TouchableOpacity } from "react-native";

import AntDesign from "react-native-vector-icons/AntDesign"
import MaterialIcons from "react-native-vector-icons/MaterialIcons"
import FontAwesome from "react-native-vector-icons/FontAwesome"


export default class MyAccount extends Component {
    render() {
        return (
            <View style={{backgroundColor: '#ffffff', height:'100%'}}>
                <View style={{ padding: 5 }}>
                    <Text style={{ marginLeft: 5, fontSize: 25, fontFamily: 'Roboto-Black', color: '#000000' }}>
                        My Account
                    </Text>

                    <Text style={{ paddingTop: 10, marginLeft: 5, color:'#000000' }}>
                        123456789
                    </Text>
                </View>

                <View style={{borderRadius:10 ,flexDirection: "row", flexWrap: "wrap", backgroundColor:'#eef4ff', width:'95%',height: 100,alignSelf:'center',paddingTop: 25, marginTop: 30}}>
                    <TouchableOpacity style={{width: '33%',}}>
                        <AntDesign name="wallet" size={25} color= '#000000' style={{alignSelf:'center'}}></AntDesign>
                        <Text style={{color:'#000000',alignSelf:'center'}}>Wallet</Text>
                    </TouchableOpacity>

                    <TouchableOpacity style={{width: '33%',}}>
                        <MaterialIcons name="chat" size={25} color= '#000000'  style={{alignSelf:'center'}}></MaterialIcons>
                        <Text style={{color:'#000000', alignSelf:'center'}}>Support</Text>
                    </TouchableOpacity>

                    <TouchableOpacity style={{width: '33%'}}>
                        <MaterialIcons style={{alignSelf:'center'}} name="payment" size={25} color= '#000000'></MaterialIcons>
                        <Text style={{color:'#000000',alignSelf:'center'}}>Payments</Text>
                    </TouchableOpacity>
                </View>

                <Text style={{marginTop:20,paddingLeft:10,marginBottom:10,color:'#808080'}}>YOUR INFORMATION</Text>

                <TouchableOpacity style={{padding:10,flexDirection: "row", flexWrap: "wrap"}}>
                    <MaterialIcons name="history" size={20} color='#000000'></MaterialIcons>
                    <Text style={{color:'#000000' ,paddingLeft: 10}}>Order History</Text>
                </TouchableOpacity>

                <TouchableOpacity style={{padding:10,flexDirection: "row", flexWrap: "wrap"}}>
                    <FontAwesome name="address-book-o" size={20} color='#000000'></FontAwesome>
                    <Text style={{color:'#000000' ,paddingLeft: 10}}>Address Book</Text>
                </TouchableOpacity>

                <TouchableOpacity style={{padding:10,flexDirection: "row", flexWrap: "wrap"}}>
                <FontAwesome name="share" size={20} color='#000000'></FontAwesome>
                    <Text style={{color:'#000000' ,paddingLeft: 10}}>Share The App</Text>
                </TouchableOpacity>


                <Text style={{marginTop:20,paddingLeft:10,marginBottom:10,color:'#808080'}}>OTHER INFORMATION</Text>

                <TouchableOpacity style={{padding:10,flexDirection: "row", flexWrap: "wrap"}}>
                    <AntDesign name="infocirlceo" size={20} color='#000000'></AntDesign>
                    <Text style={{color:'#000000' ,paddingLeft: 10}}>About</Text>
                </TouchableOpacity>

                <TouchableOpacity style={{padding:10,flexDirection: "row", flexWrap: "wrap"}}>
                <AntDesign name="staro" size={20} color='#000000'></AntDesign>
                    <Text style={{color:'#000000' ,paddingLeft: 10}}>Rate us on the Play Store</Text>
                </TouchableOpacity>

                <TouchableOpacity style={{padding:10,flexDirection: "row", flexWrap: "wrap"}}>
                <AntDesign name="poweroff" size={20} color='#000000'></AntDesign>
                    <Text style={{color:'#000000' ,paddingLeft: 10}}>Log Out</Text>
                </TouchableOpacity>

                <Text style={{alignSelf:'center',marginTop:80, fontSize:25,fontFamily:'Roboto-Black'}}>blinkit</Text>
                <Text style={{alignSelf:'center', fontSize:10,fontFamily:'Roboto-Black'}}>v14.4.467.0</Text>

            </View>
        );
    }
}