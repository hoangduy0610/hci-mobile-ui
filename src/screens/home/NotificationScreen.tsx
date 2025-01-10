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

const notifications = [
    {
        label: 'Today',
        data: [
            {
                title: 'You have a workout today',
                time: 'June 10 - 10:00 AM',
                icon: 'star',
                iconColor: 'white',
                bgIconColor: '#B3A0FF',
            },
            {
                title: 'You have a workout today',
                time: 'June 10 - 10:00 AM',
                icon: 'dumbbell',
                iconColor: 'black',
                bgIconColor: '#E2F163',
            },
        ],
    },
    {
        label: 'Yesterday',
        data: [
            {
                title: 'You have a workout today',
                time: 'June 10 - 10:00 AM',
                icon: 'dumbbell',
                iconColor: 'black',
                bgIconColor: '#E2F163',
            },
            {
                title: 'You have a workout today',
                time: 'June 10 - 10:00 AM',
                icon: 'dumbbell',
                iconColor: 'black',
                bgIconColor: '#E2F163',
            },
        ],
    },
    {
        label: 'June 2026',
        data: [
            {
                title: 'You have a workout today',
                time: 'June 10 - 10:00 AM',
                icon: 'dumbbell',
                iconColor: 'black',
                bgIconColor: '#E2F163',
            },
            {
                title: 'You have a workout today',
                time: 'June 10 - 10:00 AM',
                icon: 'dumbbell',
                iconColor: 'black',
                bgIconColor: '#E2F163',
            },
        ],
    },
    {
        label: 'May 2026',
        data: [
            {
                title: 'You have a workout today',
                time: 'June 10 - 10:00 AM',
                icon: 'dumbbell',
                iconColor: 'black',
                bgIconColor: '#E2F163',
            },
            {
                title: 'You have a workout today',
                time: 'June 10 - 10:00 AM',
                icon: 'dumbbell',
                iconColor: 'black',
                bgIconColor: '#E2F163',
            },
        ],
    },
    {
        label: 'April 2026',
        data: [
            {
                title: 'You have a workout today',
                time: 'June 10 - 10:00 AM',
                icon: 'dumbbell',
                iconColor: 'black',
                bgIconColor: '#E2F163',
            },
            {
                title: 'You have a workout today',
                time: 'June 10 - 10:00 AM',
                icon: 'dumbbell',
                iconColor: 'black',
                bgIconColor: '#E2F163',
            },
        ],
    },
]

export const NotificationScreen = () => {
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
                            flexDirection: 'row',
                            justifyContent: 'space-between',
                            display: 'flex',
                            alignItems: 'center',
                        }}>
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
                            <AntDesign name="caretleft" size={18} color="#896CFE" />
                            <Text style={{
                                color: '#896CFE',
                                fontWeight: 'bold',
                                fontSize: 25,
                                lineHeight: 30,
                                textAlign: 'left',
                            }}>Notifications</Text>
                        </TouchableOpacity>
                    </View>

                    {/* Body */}
                    <View
                        style={{
                            flexDirection: 'column',
                            justifyContent: 'center',
                            display: 'flex',
                            gap: 0,
                            alignItems: 'center',
                            width: '100%',
                            padding: 10,
                            // paddingHorizontal: 20,
                        }}
                    >
                        {
                            notifications.map((notification, index) => (
                                <View
                                    style={{
                                        flexDirection: 'column',
                                        justifyContent: 'flex-start',
                                        display: 'flex',
                                        gap: 10,
                                        alignItems: 'flex-start',
                                        width: '100%',
                                        padding: 10,
                                        paddingHorizontal: 20,
                                    }}
                                >
                                    <Text style={{
                                        color: '#E2F163',
                                        fontWeight: 500,
                                        fontSize: 12,
                                        lineHeight: 18,
                                        marginLeft: 20,
                                        textAlign: 'left',
                                    }}>{notification.label}</Text>
                                    {
                                        notification.data.map((data, index) => (
                                            <View
                                                style={{
                                                    flexDirection: 'row',
                                                    justifyContent: 'space-between',
                                                    display: 'flex',
                                                    gap: 20,
                                                    alignItems: 'center',
                                                    width: '100%',
                                                    padding: 10,
                                                    borderRadius: 50,
                                                    backgroundColor: 'white',
                                                }}
                                            >
                                                <View
                                                    style={{
                                                        flexDirection: 'row',
                                                        justifyContent: 'flex-start',
                                                        display: 'flex',
                                                        gap: 10,
                                                        alignItems: 'center',
                                                    }}
                                                >
                                                    <View
                                                        style={{
                                                            flexDirection: 'column',
                                                            justifyContent: 'center',
                                                            display: 'flex',
                                                            gap: 5,
                                                            alignItems: 'center',
                                                            backgroundColor: data.bgIconColor,
                                                            borderRadius: '50%',
                                                            aspectRatio: 1,
                                                            width: 50,
                                                        }}
                                                    >
                                                        <FontAwesome5 name={data.icon} size={25} color={data.iconColor} />
                                                    </View>
                                                    <View
                                                        style={{
                                                            flexDirection: 'column',
                                                            justifyContent: 'center',
                                                            display: 'flex',
                                                            gap: 0,
                                                            alignItems: 'flex-start',
                                                        }}
                                                    >
                                                        <Text style={{
                                                            color: '#232323',
                                                            fontWeight: 500,
                                                            fontSize: 15,
                                                            lineHeight: 20,
                                                            textAlign: 'left',
                                                        }}>{data.title}</Text>
                                                        <Text style={{
                                                            color: '#B3A0FF',
                                                            fontWeight: 500,
                                                            fontSize: 13,
                                                            lineHeight: 18,
                                                            textAlign: 'left',
                                                        }}>{data.time}</Text>
                                                    </View>
                                                </View>
                                            </View>
                                        ))
                                    }
                                </View>
                            ))
                        }
                    </View>
                </View>
            </ScrollView>
        </SafeAreaView>
    );
}