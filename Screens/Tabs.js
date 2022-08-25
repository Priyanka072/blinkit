import React from "react";

import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { NavigationContainer } from "@react-navigation/native";


import HomeComponent from "./Home";
import OfferZone from "./OfferZone";
import Categories from "./Categories";
import Search from "./Search";
import MyAccount from "./MyAccount";

import { Text, View, Dimensions } from "react-native";
import Animated from "react-native-reanimated";

import FontAwesome from "react-native-vector-icons/FontAwesome";
import { get } from "react-native/Libraries/Utilities/PixelRatio";

const Tab = createBottomTabNavigator();


const Tabs = () => {
    return (
        <NavigationContainer>
            <Tab.Navigator screenOptions={{ headerShown: false, tabBarStyle: { height: 60 } }}>
                <Tab.Screen options={{
                    tabBarIcon: ({ focused }) => (
                        <View>
                            <FontAwesome
                                name="home"
                                size={28}
                                color={focused ? '#000000' : '#808080'}>
                            </FontAwesome>
                        </View>
                    ),
                    tabBarLabel: ({ focused, color }) => (<Text style={{ color: focused ? '#000000' : color }}>Home</Text>)
                }}
                    listeners={({ navigation, route }) => ({
                        tabPress: e => {
                            Animated.spring(tabOffsetValue, {
                                toValue: 0,
                                useNativeDriver: true
                            }).start();
                        }
                    })}
                    name='Home' component={HomeComponent} />

                <Tab.Screen options={{
                    tabBarIcon: ({ focused }) => (
                        <View>
                            <FontAwesome
                                name="delicious"
                                size={28}
                                color={focused ? '#000000' : '#808080'}>
                            </FontAwesome>
                        </View>
                    ), tabBarLabel: ({ focused, color }) => (<Text style={{ color: focused ? '#000000' : color, }}>Categories</Text>)
                }}
                listeners={({ navigation, route }) => ({
                    tabPress: e => {
                        Animated.spring(tabOffsetValue, {
                            toValue: getWidth() * 2,
                            useNativeDriver: true
                        }).start();
                    }
                })}
                    name='Cateogries' component={Categories} />

                <Tab.Screen options={{
                    tabBarIcon: ({ focused }) => (
                        <View>
                            <FontAwesome
                                name="search"
                                size={28}
                                color={focused ? '#000000' : '#808080'}>
                            </FontAwesome>
                        </View>
                    ), tabBarLabel: ({ focused, color }) => (<Text style={{ color: focused ? '#000000' : color }}>Search</Text>)
                }}
                listeners={({ navigation, route }) => ({
                    tabPress: e => {
                        Animated.spring(tabOffsetValue, {
                            toValue: getWidth() * 3,
                            useNativeDriver: true
                        }).start();
                    }
                })}
                 name='Search' component={Search}></Tab.Screen>

                <Tab.Screen options={{
                    tabBarIcon: ({ focused }) => (
                        <View>
                            <FontAwesome
                                name="gittip"
                                size={28}
                                color={focused ? '#000000' : '#808080'}>
                            </FontAwesome>
                        </View>
                    ), tabBarLabel: ({ focused, color }) => (<Text style={{ color: focused ? '#000000' : color }}>Offers</Text>)
                }}
                listeners={({ navigation, route }) => ({
                    tabPress: e => {
                        Animated.spring(tabOffsetValue, {
                            toValue: getWidth() * 4,
                            useNativeDriver: true
                        }).start();
                    }
                })}
                 name='Offers' component={OfferZone}></Tab.Screen>

                <Tab.Screen options={{
                    tabBarIcon: ({ focused }) => (
                        <View>
                            <FontAwesome
                                name="user"
                                size={28}
                                color={focused ? '#000000' : '#808080'}>
                            </FontAwesome>
                        </View>
                    ), tabBarLabel: ({ focused, color }) => (<Text style={{ color: focused ? '#000000' : color }}>Account</Text>)
                }}
                listeners={({ navigation, route }) => ({
                    tabPress: e => {
                        Animated.spring(tabOffsetValue, {
                            toValue: getWidth() * 5,
                            useNativeDriver: true
                        }).start();
                    }
                })}

                    name='Account' component={MyAccount}></Tab.Screen>


            </Tab.Navigator>
            <Animated.View style={{
                width: getWidth() - 1,
                height: 5,
                borderRadius: 5,
                backgroundColor: '#000000',
                position: "absolute",
                bottom: 55,
                transform: [
                    {translateX: tabOffsetValue}
                ]
            }}>
            </Animated.View>
        </NavigationContainer>
    );
}
function getWidth() {
    let width = Dimensions.get("window").width
    width = width - 40
    return width / 5
}

export default Tabs;