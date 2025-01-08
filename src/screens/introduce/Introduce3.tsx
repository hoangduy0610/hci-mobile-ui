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

const targets = [
    'Lose Weight',
    'Gain Weight',
    'Muscle Mass Gain',
    'Shape Body',
    'Others'
]

export const Introduce3 = () => {
    const navigation = useNavigation<NativeStackNavigationProp<RootNavigatorParamList>>();
    const [selectedTargets, setSelectedTargets] = useState<string[]>([]);

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
                }}>What's your goal?</Text>

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
                        padding: 35,
                        width: '100%',
                        gap: 20,
                    }}>
                    {
                        targets.map((target, index) => (
                            <TouchableOpacity
                                key={index}
                                onPress={() => {
                                    if (selectedTargets.includes(target)) {
                                        setSelectedTargets(selectedTargets.filter(t => t !== target));
                                    } else {
                                        setSelectedTargets([...selectedTargets, target]);
                                    }
                                }}
                                style={{
                                    backgroundColor: 'white',
                                    paddingTop: 10,
                                    paddingBottom: 10,
                                    paddingLeft: 40,
                                    paddingRight: 10,
                                    borderRadius: 100,
                                    flexDirection: 'row',
                                    justifyContent: 'space-between',
                                    alignItems: 'center',
                                }}
                            >
                                <Text style={{
                                    fontWeight: 400,
                                    lineHeight: 18,
                                    fontSize: 18,
                                    textAlign: 'left',
                                    color: 'black'
                                }}>{target}</Text>
                                {
                                    selectedTargets.includes(target)
                                        ? <AntDesign name="checkcircle" size={40} color="black" />
                                        : <Entypo name="circle" size={40} color="black" />
                                }
                            </TouchableOpacity>
                        ))
                    }
                </View>

                <TouchableOpacity
                    onPress={() => {
                        navigation.navigate(ScreenNamesEnum.Introduce4);
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