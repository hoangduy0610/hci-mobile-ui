import AntDesign from '@expo/vector-icons/AntDesign';
import FontAwesome from '@expo/vector-icons/FontAwesome';
import FontAwesome5 from '@expo/vector-icons/FontAwesome5';
import { useNavigation } from "@react-navigation/native";
import { NativeStackNavigationProp } from "@react-navigation/native-stack";
import { Asset } from "expo-asset";
import { Image } from "expo-image";
import { LinearGradient } from "expo-linear-gradient";
import { ScrollView, Text, TouchableOpacity, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import ProgressCircle from '../../components/ProgressCircle';
import { ScreenNamesEnum } from "../../navigation/ScreenNamesEnum";
import { RootNavigatorParamList } from "../../navigation/ScreenNavigatorType";
import MaterialIcons from '@expo/vector-icons/MaterialIcons';
import AsyncStorage from '@react-native-async-storage/async-storage';


export const ProfileScreen = () => {
    const navigation = useNavigation<NativeStackNavigationProp<RootNavigatorParamList>>();

    const handleLogout = () => {
        AsyncStorage.clear();
        navigation.navigate(ScreenNamesEnum.Introduce);
    }

    return (
        <SafeAreaView style={{ flex: 1, backgroundColor: "#212020" }} edges={['top', 'left', 'right']}>
            <ScrollView
                contentContainerStyle={{ flexGrow: 1, backgroundColor: "#212020" }}
                keyboardShouldPersistTaps='handled'
            >
                <View
                    style={{
                        flex: 1,
                        alignItems: 'flex-start',
                        justifyContent: 'flex-start',
                        flexDirection: 'column',
                        marginTop: 20,
                    }}>

                    {/* Header */}
                    <View
                        style={{
                            flexDirection: 'column',
                            justifyContent: 'center',
                            display: 'flex',
                            gap: 10,
                            alignItems: 'flex-start',
                            width: '100%',
                            backgroundColor: '#B3A0FF',
                        }}
                    >
                        <TouchableOpacity
                            onPress={() => navigation.goBack()}
                            style={{
                                flexDirection: 'row',
                                justifyContent: 'flex-start',
                                display: 'flex',
                                marginHorizontal: 30,
                                paddingVertical: 20,
                                gap: 10,
                                width: '90%',
                                alignItems: 'center',
                            }}
                        >
                            <AntDesign name="caretleft" size={18} color="white" />
                            <Text style={{
                                color: 'white',
                                fontWeight: 'bold',
                                fontSize: 25,
                                lineHeight: 30,
                                textAlign: 'left',
                            }}>My Profile</Text>
                        </TouchableOpacity>

                        <View
                            style={{
                                flexDirection: 'column',
                                justifyContent: 'center',
                                display: 'flex',
                                alignItems: 'center',
                                width: '100%',
                            }}
                        >
                            <Image source={Asset.fromModule(require('../../assets/img1.jpeg'))} style={{
                                width: 150,
                                height: 150,
                                borderRadius: '50%',
                            }} />

                            <Text style={{
                                color: 'white',
                                fontWeight: 'bold',
                                fontSize: 25,
                                lineHeight: 30,
                                textAlign: 'center',
                                marginTop: 20
                            }}>Perry</Text>

                            <Text style={{
                                color: 'white',
                                fontSize: 15,
                                lineHeight: 20,
                                textAlign: 'center',
                            }}>
                                perry@gmail.com
                            </Text>

                            <Text style={{
                                color: 'white',
                                fontSize: 15,
                                lineHeight: 20,
                                textAlign: 'center',
                                paddingBottom: 60,
                            }}>
                                Birthday: May 10th
                            </Text>

                            <View
                                style={{
                                    position: 'absolute',
                                    bottom: -40,
                                    width: '90%',
                                    flexDirection: 'row',
                                    justifyContent: 'space-between',
                                    display: 'flex',
                                    alignItems: 'center',
                                    padding: 20,
                                    borderRadius: 20,
                                    backgroundColor: '#896CFE',
                                }}
                            >
                                <View
                                    style={{
                                        flexDirection: 'column',
                                        justifyContent: 'center',
                                        display: 'flex',
                                        alignItems: 'center',
                                        borderRightWidth: 1,
                                        borderRightColor: 'white',
                                        paddingRight: 20,
                                    }}
                                >
                                    <Text style={{
                                        color: 'white',
                                        fontWeight: 700,
                                        fontSize: 17,
                                        lineHeight: 20,
                                    }}>48 Kg</Text>
                                    <Text style={{
                                        color: 'white',
                                        fontSize: 15,
                                        lineHeight: 20,
                                    }}>Weight</Text>
                                </View>

                                <View
                                    style={{
                                        flexDirection: 'column',
                                        justifyContent: 'center',
                                        display: 'flex',
                                        alignItems: 'center',
                                        flex: 1,
                                    }}
                                >
                                    <Text style={{
                                        color: 'white',
                                        fontWeight: 700,
                                        fontSize: 17,
                                        lineHeight: 20,
                                    }}>18</Text>
                                    <Text style={{
                                        color: 'white',
                                        fontSize: 15,
                                        lineHeight: 20,
                                    }}>Years Old</Text>
                                </View>

                                <View
                                    style={{
                                        flexDirection: 'column',
                                        justifyContent: 'center',
                                        display: 'flex',
                                        alignItems: 'center',
                                        borderLeftWidth: 1,
                                        borderLeftColor: 'white',
                                        paddingLeft: 20,
                                    }}
                                >
                                    <Text style={{
                                        color: 'white',
                                        fontWeight: 700,
                                        fontSize: 17,
                                        lineHeight: 20,
                                    }}>158 CM</Text>
                                    <Text style={{
                                        color: 'white',
                                        fontSize: 15,
                                        lineHeight: 20,
                                    }}>Height</Text>
                                </View>
                            </View>
                        </View>
                    </View>

                    {/* Body */}
                    <View
                        style={{
                            flexDirection: 'column',
                            justifyContent: 'center',
                            display: 'flex',
                            gap: 20,
                            alignItems: 'center',
                            width: '100%',
                            padding: 20,
                            marginTop: 80,
                        }}
                    >
                        <TouchableOpacity
                            style={{
                                flexDirection: 'row',
                                justifyContent: 'space-between',
                                display: 'flex',
                                alignItems: 'center',
                                width: '100%',
                            }}
                        >
                            <View style={{
                                backgroundColor: '#896CFE',
                                width: 55,
                                aspectRatio: 1,
                                display: 'flex',
                                justifyContent: 'center',
                                alignItems: 'center',
                                borderRadius: '50%'
                            }}>
                                <FontAwesome name="user" size={40} color="white" />
                            </View>
                            <Text
                                style={{
                                    flex: 1,
                                    marginLeft: 20,
                                    color: 'white',
                                    fontWeight: 500,
                                    fontSize: 20,
                                    lineHeight: 24,
                                }}>
                                Profile
                            </Text>
                            <AntDesign name="caretright" size={20} color="#E2F163" />
                        </TouchableOpacity>
                        <TouchableOpacity
                            style={{
                                flexDirection: 'row',
                                justifyContent: 'space-between',
                                display: 'flex',
                                alignItems: 'center',
                                width: '100%',
                            }}
                        >
                            <View style={{
                                backgroundColor: '#896CFE',
                                width: 55,
                                aspectRatio: 1,
                                display: 'flex',
                                justifyContent: 'center',
                                alignItems: 'center',
                                borderRadius: '50%'
                            }}>
                                <MaterialIcons name="settings" size={40} color="white" />
                            </View>
                            <Text
                                style={{
                                    flex: 1,
                                    marginLeft: 20,
                                    color: 'white',
                                    fontWeight: 500,
                                    fontSize: 20,
                                    lineHeight: 24,
                                }}>
                                Settings
                            </Text>
                            <AntDesign name="caretright" size={20} color="#E2F163" />
                        </TouchableOpacity>
                        <TouchableOpacity
                            onPress={handleLogout}
                            style={{
                                flexDirection: 'row',
                                justifyContent: 'space-between',
                                display: 'flex',
                                alignItems: 'center',
                                width: '100%',
                            }}
                        >
                            <View style={{
                                backgroundColor: '#896CFE',
                                width: 55,
                                aspectRatio: 1,
                                display: 'flex',
                                justifyContent: 'center',
                                alignItems: 'center',
                                borderRadius: '50%'
                            }}>
                                <MaterialIcons name="logout" size={40} color="white" />
                            </View>
                            <Text
                                style={{
                                    flex: 1,
                                    marginLeft: 20,
                                    color: 'white',
                                    fontWeight: 500,
                                    fontSize: 20,
                                    lineHeight: 24,
                                }}>
                                Logout
                            </Text>
                            <AntDesign name="caretright" size={20} color="#E2F163" />
                        </TouchableOpacity>
                    </View>
                </View>
            </ScrollView>
        </SafeAreaView>
    );
}