import AntDesign from '@expo/vector-icons/AntDesign';
import { Picker } from '@react-native-picker/picker';
import { useNavigation } from '@react-navigation/native';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';
import { BottomSheet } from '@rneui/themed';
import { useState } from "react";
import { ScrollView, Text, TextInput, TouchableOpacity, View } from "react-native";
import { RootNavigatorParamList } from '../../navigation/ScreenNavigatorType';
import { ScreenNamesEnum } from '../../navigation/ScreenNamesEnum';
import Entypo from '@expo/vector-icons/Entypo';

const activityLevels = [
    'Beginner',
    'Intermediate',
    'Advanced',
]

export const Introduce4 = () => {
    const navigation = useNavigation<NativeStackNavigationProp<RootNavigatorParamList>>();
    const [selectedActivityLevel, setSelectedActivityLevel] = useState<string>('');

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
                }}>Physical Activity Level</Text>

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

                <View style={{
                    justifyContent: 'center',
                    alignItems: 'stretch',
                    alignContent: 'center',
                    width: '100%',
                    padding: 40,
                }}>
                    {
                        activityLevels.map((activityLevel, index) => {
                            return (
                                <TouchableOpacity
                                    key={index}
                                    onPress={() => {
                                        setSelectedActivityLevel(activityLevel);
                                    }}
                                    style={{
                                        backgroundColor: selectedActivityLevel === activityLevel ? '#E2F163' : 'white',
                                        margin: 20,
                                        paddingTop: 30,
                                        paddingBottom: 30,
                                        justifyContent: 'center',
                                        alignItems: 'center',
                                        borderRadius: 100,
                                    }}>
                                    <Text style={{
                                        color: selectedActivityLevel === activityLevel ? 'black' : '#896CFE',
                                        fontWeight: 500,
                                        fontSize: 24,
                                        lineHeight: 24
                                    }}>
                                        {activityLevel}
                                    </Text>
                                </TouchableOpacity>
                            );
                        })
                    }
                </View>

                <TouchableOpacity
                    onPress={() => {
                        navigation.navigate(ScreenNamesEnum.Introduce5);
                    }}
                    style={{
                        backgroundColor: 'rgba(255, 255, 255, 0.09)',
                        paddingTop: 7,
                        paddingBottom: 7,
                        paddingLeft: 60,
                        paddingRight: 60,
                        borderRadius: 100,
                        marginTop: 40,
                        borderWidth: 0.5,
                        borderColor: 'rgba(255, 255, 255, 1)',
                        position: 'absolute',
                        bottom: 70,
                        alignSelf: 'center',
                    }}>
                    <Text style={{
                        fontWeight: 700,
                        lineHeight: 27,
                        fontSize: 18,
                        textAlign: 'center',
                        color: 'white'
                    }}>Continue</Text>
                </TouchableOpacity>
            </View>
        </ScrollView >
    );
}