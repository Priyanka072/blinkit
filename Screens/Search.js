import React, { Component } from "react";
import { View, Text, TouchableOpacity, Image, ScrollView } from "react-native";

import SearchBar from "react-native-search-bar";
import SimpleLineIcons from "react-native-vector-icons/SimpleLineIcons";
import Feather from "react-native-vector-icons/Feather"


export default class Search extends Component {
    render() {
        return (
            <View style={{ height: '100%', backgroundColor: '#FFFFFF' }}>
                <View style={{ marginTop: 10 }}>
                    <SearchBar placeholder='Search for atta, dal, coke and more' style={{ marginTop: 5, borderColor: '#000000', borderWidth: 20, borderRadius: 15, padding: 5, width: '98%', alignSelf: 'center' }}></SearchBar>
                </View>

                <View style={{ flexDirection: "row", flexWrap: "wrap", padding: 10, width: '100%' }}>
                    <SimpleLineIcons name="clock" color='#000000' size={15}></SimpleLineIcons>
                    <Text style={{ color: '#000000', paddingLeft: 5, fontSize: 15, fontFamily: 'Roboto-Black' }}>Recent searches</Text>
                    <TouchableOpacity>
                        <Text style={{paddingLeft:150 ,color: '#318616', fontFamily: 'Roboto-Black' }}>Clear</Text>
                    </TouchableOpacity>

                </View>

                <View style={{ flexDirection: "row", flexWrap: "wrap", padding: 10, width: '100%' }}>
                    <Feather name="trending-up" color='#000000' size={15}></Feather>
                    <Text style={{ color: '#000000', paddingLeft: 15, fontSize: 15, fontFamily: 'Roboto-Black' }}>Trending</Text>
                </View>
                <View style={{ width: '100%', flexDirection: "row", flexWrap: "wrap",  marginTop: 10, padding: 5 }}>
                    <TouchableOpacity style={{ width: '25%' }}>
                        <Image source={{ uri: 'https://cdn.grofers.com/cdn-cgi/image/f=auto,fit=scale-down,q=50,metadata=none,w=225/app/images/products/sliding_image/479305a.jpg?ts=1641301819' }}
                            style={{ width: 70, height: 100 }}></Image>
                        <Text style={{alignSelf:'center',color:'#000000'}}>PPE Kit</Text>
                    </TouchableOpacity>     

                    <TouchableOpacity style={{ width: '25%' }}>
                        <Image source={{ uri: 'https://cdn.grofers.com/cdn-cgi/image/f=auto,fit=scale-down,q=50,metadata=none,w=225/app/images/products/sliding_image/160a.jpg?ts=1654778815' }}
                            style={{ width: 70, height: 100 }}></Image>
                        <Text style={{alignSelf:'center',color:'#000000'}}>Amul Butter</Text>
                    </TouchableOpacity>     
                    <TouchableOpacity style={{ width: '25%' }}>
                        <Image source={{ uri: 'https://cdn.grofers.com/cdn-cgi/image/f=auto,fit=scale-down,q=50,metadata=none,w=225/app/images/products/sliding_image/313249a.jpg?ts=1648546100' }}
                            style={{ width: 70, height: 100 }}></Image>
                        <Text style={{alignSelf:'center',color:'#000000'}}>Dark Fantasy</Text>
                    </TouchableOpacity> 
                    <TouchableOpacity style={{ width: '25%' }}>
                        <Image source={{ uri: 'https://cdn.grofers.com/cdn-cgi/image/f=auto,fit=scale-down,q=50,metadata=none,w=225/app/images/products/sliding_image/34338a.jpg' }}
                            style={{ width: 70, height: 100 }}></Image>
                        <Text style={{alignSelf:'center',color:'#000000'}}>Mixture Namkeen</Text>
                    </TouchableOpacity>     
                                 

                </View>

            </View>
        );
    }
}