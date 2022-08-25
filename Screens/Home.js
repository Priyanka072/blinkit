import React, { useState } from 'react';
import { StyleSheet, Text, View, Image, TouchableOpacity, StatusBar, SafeAreaView } from 'react-native';
import { Dropdown } from 'react-native-element-dropdown';
import { ScrollView } from 'react-native-gesture-handler';
import SearchBar from 'react-native-search-bar';
import ImageSlider from './ImageSlider'

const data = [
    { label: 'Ram Nagar, Jaipur, Rajasthan 302026', value: '1' },
    { label: 'Shyam Nagar, Jaipur, Rajasthan 302026', value: '2' },

];

const HomeComponent = () => {
    const [value, setValue] = useState(null);
    const [isFocus, setIsFocus] = useState(false);

    const renderLabel = () => {
        if (value || isFocus) {
            return (
                <Text style={[styles.label, isFocus && { color: 'blue' }]}></Text>
            );
        }
        return null;
    };

    return (
        <ScrollView>
            <View style={{ backgroundColor: '#FFFFFF' }}>
                <StatusBar backgroundColor='#FFFFFF'></StatusBar>
                <View>
                    <Text style={{ fontSize: 25, color: '#000000', paddingLeft: 10, paddingTop: 10, fontFamily: 'Roboto-Black' }}>Delivery in 8 minutes</Text>
                </View>
                <View style={styles.containerDropDown}>
                    {renderLabel()}
                    <Dropdown
                        style={[styles.dropdown, isFocus && { borderColor: 'blue' }]}
                        placeholderStyle={styles.placeholderStyle}
                        selectedTextStyle={styles.selectedTextStyle}
                        inputSearchStyle={styles.inputSearchStyle}
                        iconStyle={styles.iconStyle}
                        data={data}
                        search
                        maxHeight={300}
                        labelField="label"
                        valueField="value"
                        placeholder={!isFocus ? 'Select Address' : ''}
                        searchPlaceholder="Search..."
                        value={value}
                        onFocus={() => setIsFocus(true)}
                        onBlur={() => setIsFocus(false)}
                        onChange={item => {
                            setValue(item.value);
                            setIsFocus(false);
                        }} />

                    <SearchBar pl placeholder='Search for atta, dal, coke and more' style={{ marginTop: 5, borderColor: '#FFFFFF', borderWidth: 20, borderRadius: 15, padding: 5, width: '98%', alignSelf: 'center', }}></SearchBar></View>
                
                <TouchableOpacity>
                    <Image source={{ uri: 'https://cdn.grofers.com/cdn-cgi/image/f=auto,fit=scale-down,q=50,metadata=none,w=450/layout-engine/2022-08/shower-and-oral-care_RN-New.jpeg' }} style={{ width: '90%', height: 200, alignSelf: "center" }}></Image>
                </TouchableOpacity>


                <View style={{ width: '100%', flexDirection: "row", flexWrap: "wrap", marginTop: 10, padding: 5 }}>
                    <TouchableOpacity style={{ width: '25%' }}>
                        <Image source={{ uri: 'https://cdn.grofers.com/cdn-cgi/image/f=auto,fit=scale-down,q=50,metadata=none,w=180/layout-engine/2022-05/Slice-4.png' }}
                            style={{ width: 90, height: 120 }}></Image>
                    </TouchableOpacity>

                    <TouchableOpacity style={{ width: '25%' }}>
                        <Image source={{ uri: 'https://cdn.grofers.com/cdn-cgi/image/f=auto,fit=scale-down,q=50,metadata=none,w=180/layout-engine/2022-05/Slice-1.png' }}
                            style={{ width: 90, height: 120 }}></Image>
                    </TouchableOpacity>

                    <TouchableOpacity style={{ width: '25%' }}>
                        <Image source={{ uri: 'https://cdn.grofers.com/cdn-cgi/image/f=auto,fit=scale-down,q=50,metadata=none,w=180/layout-engine/2022-05/Slice-9.png' }}
                            style={{ width: 90, height: 120 }}></Image>
                    </TouchableOpacity>

                    <TouchableOpacity style={{ width: '25%' }}>
                        <Image source={{ uri: 'https://cdn.grofers.com/cdn-cgi/image/f=auto,fit=scale-down,q=50,metadata=none,w=180/layout-engine/2022-05/Slice-6.png' }}
                            style={{ width: 90, height: 120 }}></Image>
                    </TouchableOpacity>

                    <TouchableOpacity style={{ width: '25%' }}>
                        <Image source={{ uri: 'https://cdn.grofers.com/cdn-cgi/image/f=auto,fit=scale-down,q=50,metadata=none,w=180/layout-engine/2022-05/Slice-2_0.png' }} style={{ width: 90, height: 120 }}></Image>
                    </TouchableOpacity>

                    <TouchableOpacity style={{ width: '25%' }}>
                        <Image source={{ uri: 'https://cdn.grofers.com/cdn-cgi/image/f=auto,fit=scale-down,q=50,metadata=none,w=180/layout-engine/2022-05/Slice-7.png' }} style={{ width: 90, height: 120 }}></Image>
                    </TouchableOpacity>

                    <TouchableOpacity style={{ width: '25%' }}>
                        <Image source={{ uri: 'https://cdn.grofers.com/cdn-cgi/image/f=auto,fit=scale-down,q=50,metadata=none,w=180/layout-engine/2022-05/Slice-3.png' }} style={{ width: 90, height: 120 }}></Image>
                    </TouchableOpacity>

                    <TouchableOpacity style={{ width: '25%' }}>
                        <Image source={{ uri: 'https://cdn.grofers.com/cdn-cgi/image/f=auto,fit=scale-down,q=50,metadata=none,w=180/layout-engine/2022-05/Slice-5.png' }} style={{ width: 90, height: 120 }}></Image>
                    </TouchableOpacity>

                </View>


                <View>
                    <TouchableOpacity style={{ width: '90%', height: 30, alignSelf: 'center', borderColor: '#000000', borderWidth: 1, borderRadius: 5, justifyContent: 'center', flex: 1 }}>
                        <Text style={{ color: '#000000', alignSelf: 'center' }}>See more categories</Text>
                    </TouchableOpacity>
                </View>



                <ImageSlider></ImageSlider>

            </View>
        </ScrollView>
    );
};

export default HomeComponent;

const styles = StyleSheet.create({
    containerDropDown: {
        padding: 10,
    },
    dropdown: {
        height: 30,

    },
    label: {
        position: 'absolute',
        left: 22,
        top: 8,
        zIndex: 999,
        paddingHorizontal: 8,
        fontSize: 14,
    },
    placeholderStyle: {
        fontSize: 16,
        color: '#000000'
    },
    selectedTextStyle: {
        fontSize: 16,
        color: '#000000'
    },

    inputSearchStyle: {
        height: 40,
        fontSize: 16,
        color: '#000000'
    },

    container: {
        width: '100%',
        backgroundColor: '#fff',
        alignItems: 'center',
        justifyContent: 'center',
        marginTop: 20,

    },
});