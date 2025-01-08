import AntDesign from '@expo/vector-icons/AntDesign';
import { Picker } from '@react-native-picker/picker';
import { useNavigation } from '@react-navigation/native';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';
import { BottomSheet } from '@rneui/themed';
import { useState } from "react";
import { KeyboardAvoidingView, Platform, ScrollView, Text, TextInput, TouchableOpacity, View } from "react-native";
import { RootNavigatorParamList } from '../../navigation/ScreenNavigatorType';
import { ScreenNamesEnum } from '../../navigation/ScreenNamesEnum';

const genders = [
    { value: 'Female', label: 'Female' },
    { value: 'Male', label: 'Male' },
    { value: 'Other', label: 'Other' },
    { value: 'Prefer not to say', label: 'Prefer not to say' },
];

export const Introduce2 = () => {
    const navigation = useNavigation<NativeStackNavigationProp<RootNavigatorParamList>>();
    const [gender, setGender] = useState<string>('Male');
    const [tempGender, setTempGender] = useState<string>('Male');
    const [isVisible, setIsVisible] = useState<boolean>(false);

    return (
        <KeyboardAvoidingView style={{ flex: 1 }}
            behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
        >
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

                    {/* Form zone */}
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
                        }}>
                            <Text style={{
                                color: 'white',
                                fontSize: 16,
                                fontWeight: 700,
                                lineHeight: 24,
                                textAlign: 'left',
                            }}>What's Your Gender</Text>
                            {/* <TextInput style={{
                        backgroundColor: 'white',
                        padding: 15,
                        marginTop: 10,
                        borderRadius: 5,
                    }} placeholder="Full Name" /> */}
                            <TextInput
                                style={{
                                    backgroundColor: 'white',
                                    padding: 15,
                                    marginTop: 10,
                                    borderRadius: 5,
                                }}
                                placeholder="Select"
                                onPress={() => {
                                    setIsVisible(true)
                                    setTempGender(gender)
                                }}
                                value={gender}
                                readOnly
                            />
                            <BottomSheet
                                modalProps={{
                                    style: {
                                        backgroundColor: 'white',
                                    },
                                }}
                                isVisible={isVisible}
                                backdropStyle={{
                                    backgroundColor: 'rgba(0, 0, 0, 0.5)',
                                }}
                                onBackdropPress={() => setIsVisible(false)}
                            >
                                <View style={{
                                    backgroundColor: 'white',
                                }}>
                                    <View style={{
                                        display: 'flex',
                                        flexDirection: 'row',
                                        justifyContent: 'space-between',
                                        padding: 10,
                                        borderBottomWidth: 1,
                                        borderBottomColor: 'rgba(0, 0, 0, 0.1)',
                                    }}>
                                        <Text
                                            style={{
                                                color: 'black',
                                                fontSize: 16,
                                                fontWeight: 700,
                                                lineHeight: 24,
                                                textAlign: 'left',
                                            }}
                                            onPress={() => setIsVisible(false)}
                                        >
                                            Cancel
                                        </Text>
                                        <Text
                                            style={{
                                                color: 'black',
                                                fontSize: 16,
                                                fontWeight: 700,
                                                lineHeight: 24,
                                                textAlign: 'right',
                                            }}
                                            onPress={() => {
                                                setIsVisible(false)
                                                setGender(tempGender)
                                            }}
                                        >
                                            Done
                                        </Text>
                                    </View>
                                    <Picker
                                        selectedValue={tempGender}
                                        onValueChange={(itemValue, itemIndex) =>
                                            setTempGender(itemValue)
                                        }
                                    >
                                        {
                                            genders.map(({ value, label }) => (
                                                <Picker.Item key={value} label={label} value={value} />
                                            ))
                                        }
                                    </Picker>
                                </View>
                            </BottomSheet>
                        </View>

                        <View style={{
                            display: 'flex',
                            flexDirection: 'column',
                            alignItems: 'stretch',
                            width: '100%',
                            marginTop: 20,
                        }}>
                            <Text style={{
                                color: 'white',
                                fontSize: 16,
                                fontWeight: 700,
                                lineHeight: 24,
                                textAlign: 'left',
                            }}>How old are you?</Text>
                            {/* <TextInput style={{
                        backgroundColor: 'white',
                        padding: 15,
                        marginTop: 10,
                        borderRadius: 5,
                    }} placeholder="Full Name" /> */}
                            <TextInput
                                style={{
                                    backgroundColor: 'white',
                                    padding: 15,
                                    marginTop: 10,
                                    borderRadius: 5,
                                }}
                                placeholder="Age"
                                keyboardType='numeric'
                            />
                        </View>

                        <View style={{
                            display: 'flex',
                            flexDirection: 'row',
                            justifyContent: 'space-between',
                            width: '100%',
                            marginTop: 20,
                        }}>
                            <View style={{
                                display: 'flex',
                                marginTop: 20,
                            }}>
                                <Text style={{
                                    color: 'white',
                                    fontSize: 16,
                                    fontWeight: 700,
                                    lineHeight: 24,
                                    paddingLeft: 20,
                                    paddingRight: 20,
                                    textAlign: 'left',
                                }}>Weight?</Text>
                                <TextInput
                                    style={{
                                        backgroundColor: 'white',
                                        padding: 15,
                                        marginTop: 10,
                                        borderRadius: 5,
                                    }}
                                    placeholder="kg"
                                    keyboardType='numeric'
                                />
                            </View>
                            <View style={{
                                display: 'flex',
                                marginTop: 20,
                            }}>
                                <Text style={{
                                    color: 'white',
                                    fontSize: 16,
                                    fontWeight: 700,
                                    lineHeight: 24,
                                    paddingLeft: 20,
                                    paddingRight: 20,
                                    textAlign: 'left',
                                }}>Height?</Text>
                                <TextInput
                                    style={{
                                        backgroundColor: 'white',
                                        padding: 15,
                                        marginTop: 10,
                                        borderRadius: 5,
                                    }}
                                    placeholder="cm"
                                    keyboardType='numeric'
                                />
                            </View>
                        </View>
                    </View>

                    <TouchableOpacity
                        onPress={() => {
                            navigation.navigate(ScreenNamesEnum.Introduce3);
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
        </KeyboardAvoidingView>
    );
}