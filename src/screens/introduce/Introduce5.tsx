import AntDesign from '@expo/vector-icons/AntDesign';
import MaterialIcons from '@expo/vector-icons/MaterialIcons';
import { useNavigation } from '@react-navigation/native';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';
import { Asset } from 'expo-asset';
import { Image } from 'expo-image';
import { useState } from "react";
import { ScrollView, Text, TextInput, TouchableOpacity, View } from "react-native";
import { ScreenNamesEnum } from '../../navigation/ScreenNamesEnum';
import { RootNavigatorParamList } from '../../navigation/ScreenNavigatorType';
import { BottomSheet } from '@rneui/base';
import Picker from 'react-native-picker-select';
import AsyncStorage from '@react-native-async-storage/async-storage';

export const Introduce5 = () => {
    const navigation = useNavigation<NativeStackNavigationProp<RootNavigatorParamList>>();

    return (
        <ScrollView
            contentContainerStyle={{ flexGrow: 1 }}
            keyboardShouldPersistTaps='handled'
        >
            <View
                style={{
                    flex: 1,
                    alignItems: 'flex-start',
                    justifyContent: 'flex-start',
                    backgroundColor: "#232323"
                }}>
                <TouchableOpacity
                    onPress={() => {
                        navigation.goBack();
                    }}
                    style={{
                        // backgroundColor: '#B3A0FF',
                        padding: 35,
                        paddingTop: 50,
                    }}>
                    <Text style={{
                        color: '#E2F163',
                        fontWeight: 600,
                        fontSize: 15,
                        lineHeight: 14
                    }}>
                        <AntDesign name="caretleft" color="#E2F163" /> Back
                    </Text>
                </TouchableOpacity>

                <Text style={{
                    color: 'white',
                    fontWeight: 700,
                    fontSize: 25,
                    lineHeight: 37.5,
                    // padding: 32,
                    textAlign: 'center',
                    alignSelf: 'center',
                }}>Fill Your Profile</Text>

                <Text
                    style={{
                        color: 'white',
                        fontWeight: 400,
                        fontSize: 15,
                        lineHeight: 22.5,
                        padding: 32,
                        textAlign: 'center',
                        alignSelf: 'center',
                    }}>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                </Text>

                <View
                    style={{
                        backgroundColor: '#B3A0FF',
                        paddingTop: 10,
                        paddingBottom: 10,
                        width: '100%',
                        alignItems: 'center',
                        justifyContent: 'center',
                        flexDirection: 'column',
                    }}>
                    <Image
                        source={Asset.fromModule(require('../../assets/img1.jpeg'))}
                        style={{
                            width: 125,
                            height: 125,
                            borderRadius: '50%',
                        }}
                    />
                    <TouchableOpacity
                        style={{
                            position: 'absolute',
                            right: '37%',
                            bottom: 10,
                            backgroundColor: '#E2F163',
                            padding: 5,
                            borderRadius: 100,
                        }}>
                        <MaterialIcons name="mode-edit" size={24} color="black" />
                    </TouchableOpacity>
                </View>

                <View style={{
                    flex: 1,
                    width: '100%',
                    paddingLeft: 35,
                    paddingRight: 35,
                }}>
                    <View style={{
                        display: 'flex',
                        flexDirection: 'column',
                        alignItems: 'stretch',
                        width: '100%',
                        marginTop: 20,
                    }}>
                        <Text style={{
                            color: '#896CFE',
                            fontSize: 16,
                            fontWeight: 700,
                            lineHeight: 24,
                            textAlign: 'left',
                        }}>Full name</Text>
                        <TextInput
                            style={{
                                backgroundColor: 'white',
                                padding: 15,
                                marginTop: 10,
                                borderRadius: 5,
                            }}
                            placeholder="Name"
                        />
                    </View>
                    <View style={{
                        display: 'flex',
                        flexDirection: 'column',
                        alignItems: 'stretch',
                        width: '100%',
                        marginTop: 20,
                    }}>
                        <Text style={{
                            color: '#896CFE',
                            fontSize: 16,
                            fontWeight: 700,
                            lineHeight: 24,
                            textAlign: 'left',
                        }}>Nickname</Text>
                        <TextInput
                            style={{
                                backgroundColor: 'white',
                                padding: 15,
                                marginTop: 10,
                                borderRadius: 5,
                            }}
                            placeholder="Nickname"
                        />
                    </View>
                    <View style={{
                        display: 'flex',
                        flexDirection: 'column',
                        alignItems: 'stretch',
                        width: '100%',
                        marginTop: 20,
                    }}>
                        <Text style={{
                            color: '#896CFE',
                            fontSize: 16,
                            fontWeight: 700,
                            lineHeight: 24,
                            textAlign: 'left',
                        }}>Email</Text>
                        <TextInput
                            style={{
                                backgroundColor: 'white',
                                padding: 15,
                                marginTop: 10,
                                borderRadius: 5,
                            }}
                            placeholder="example@gmail.com"
                            keyboardType='email-address'
                        />
                    </View>
                    <View style={{
                        display: 'flex',
                        flexDirection: 'column',
                        alignItems: 'stretch',
                        width: '100%',
                        marginTop: 20,
                    }}>
                        <Text style={{
                            color: '#896CFE',
                            fontSize: 16,
                            fontWeight: 700,
                            lineHeight: 24,
                            textAlign: 'left',
                        }}>Mobile Number</Text>
                        <TextInput
                            style={{
                                backgroundColor: 'white',
                                padding: 15,
                                marginTop: 10,
                                borderRadius: 5,
                            }}
                            placeholder="Phone number"
                            keyboardType='phone-pad'
                        />
                    </View>
                </View>

                <TouchableOpacity
                    onPress={() => {
                        AsyncStorage.setItem('isIntroduced', 'true');
                        navigation.navigate(ScreenNamesEnum.TabNavigator, {
                            screen: ScreenNamesEnum.Home,
                        });
                    }}
                    style={{
                        backgroundColor: '#E2F163',
                        paddingTop: 7,
                        paddingBottom: 7,
                        paddingLeft: 60,
                        paddingRight: 60,
                        borderRadius: 100,
                        marginTop: 40,
                        // borderWidth: 0.5,
                        // borderColor: 'rgba(255, 255, 255, 1)',
                        // position: 'absolute',
                        // bottom: 70,
                        alignSelf: 'center',
                        marginBottom: 100,
                    }}>
                    <Text style={{
                        fontWeight: 700,
                        lineHeight: 27,
                        fontSize: 18,
                        textAlign: 'center',
                        // color: 'white'
                    }}>Start</Text>
                </TouchableOpacity>
            </View>
        </ScrollView >
    );
}