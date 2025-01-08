import AntDesign from '@expo/vector-icons/AntDesign';
import FontAwesome from '@expo/vector-icons/FontAwesome';
import FontAwesome5 from '@expo/vector-icons/FontAwesome5';
import { useNavigation } from "@react-navigation/native";
import { NativeStackNavigationProp } from "@react-navigation/native-stack";
import { Asset } from "expo-asset";
import { Image } from "expo-image";
import { useState } from 'react';
import { ScrollView, Text, TouchableOpacity, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { ScreenNamesEnum } from "../../navigation/ScreenNamesEnum";
import { RootNavigatorParamList } from "../../navigation/ScreenNavigatorType";

const exerciseList = [
    {
        img: require('../../assets/img1.jpeg'),
        title: 'Upper Body',
        time: '12 Minutes',
        kcal: '120 Kcal',
        excercises: 5,
    },
    {
        img: require('../../assets/img1.jpeg'),
        title: 'Full Body Stretching',
        time: '12 Minutes',
        kcal: '120 Kcal',
        excercises: 5,
    },
    {
        img: require('../../assets/img1.jpeg'),
        title: 'Lower Body',
        time: '12 Minutes',
        kcal: '120 Kcal',
        excercises: 5,
    },
    {
        img: require('../../assets/img1.jpeg'),
        title: 'Upper Body',
        time: '12 Minutes',
        kcal: '120 Kcal',
        excercises: 5,
    },
    {
        img: require('../../assets/img1.jpeg'),
        title: 'Full Body Stretching',
        time: '12 Minutes',
        kcal: '120 Kcal',
        excercises: 5,
    },
    {
        img: require('../../assets/img1.jpeg'),
        title: 'Lower Body',
        time: '12 Minutes',
        kcal: '120 Kcal',
        excercises: 5,
    }
]

const activityLevels = [
    'Beginner',
    'Intermediate',
    'Advanced',
]


export const WorkoutScreen = () => {
    const navigation = useNavigation<NativeStackNavigationProp<RootNavigatorParamList>>();
    const [selectedActivityLevel, setSelectedActivityLevel] = useState<string>('Beginner');

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
                            marginHorizontal: 30,
                            alignItems: 'center',
                            width: '90%',
                        }}>
                        <Text style={{
                            color: '#896CFE',
                            fontWeight: 'bold',
                            fontSize: 25,
                            lineHeight: 30,
                            textAlign: 'left',
                        }}>Workout</Text>

                        {/* Bell Noti */}
                        <View
                            style={{
                                flexDirection: 'row',
                                justifyContent: 'space-between',
                                display: 'flex',
                                alignItems: 'center',
                            }}>
                            <TouchableOpacity
                                onPress={() => {
                                    navigation.navigate(ScreenNamesEnum.Notification);
                                }}
                                style={{
                                    padding: 10,
                                }}>
                                <FontAwesome name="bell" size={22} color="#896CFE" />
                            </TouchableOpacity>
                            <TouchableOpacity
                                onPress={() => {
                                    navigation.navigate(ScreenNamesEnum.User);
                                }}
                                style={{
                                    padding: 10,
                                }}>
                                <FontAwesome name="user" size={24} color="#896CFE" />
                            </TouchableOpacity>
                        </View>
                    </View>

                    {/* Exercise Btn Group */}
                    <View style={{
                        flexDirection: 'row',
                        justifyContent: 'center',
                        alignItems: 'stretch',
                        alignContent: 'center',
                        width: '100%',
                        // flex: 1,
                        paddingHorizontal: 40,
                        marginVertical: 20,
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
                                            // margin: 20,
                                            marginHorizontal: 5,
                                            paddingVertical: 13,
                                            justifyContent: 'center',
                                            alignItems: 'center',
                                            width: '34%',
                                            borderRadius: 100,
                                        }}>
                                        <Text style={{
                                            color: selectedActivityLevel === activityLevel ? 'black' : '#896CFE',
                                            fontWeight: 500,
                                            fontSize: 17,
                                            lineHeight: 20
                                        }}>
                                            {activityLevel}
                                        </Text>
                                    </TouchableOpacity>
                                );
                            })
                        }
                    </View>

                    {/* Routine */}
                    <View
                        style={{
                            backgroundColor: '#B3A0FF',
                            flexDirection: 'row',
                            justifyContent: 'center',
                            display: 'flex',
                            alignItems: 'center',
                            width: '100%',
                            marginTop: 20,
                        }}>
                        <TouchableOpacity
                            onPress={() => {
                                navigation.navigate(ScreenNamesEnum.Routine);
                            }}
                            style={{
                                padding: 20,
                                display: 'flex',
                                flexDirection: 'column',
                                alignItems: 'center',
                                width: '100%',
                            }}>
                            <View
                                style={{
                                    display: 'flex',
                                    overflow: 'hidden',
                                    alignSelf: 'center',
                                    width: '90%',
                                    height: 200,
                                    borderRadius: 20,
                                }}>
                                <Image source={Asset.fromModule(require('../../assets/img1.jpeg'))} style={{ borderRadius: 20, width: '100%', height: 200 }} />
                                <View
                                    style={{
                                        position: 'absolute',
                                        backgroundColor: 'rgba(33, 32, 32, 0.9)',
                                        width: '100%',
                                        // height: 200,
                                        borderBottomLeftRadius: 40,
                                        borderBottomRightRadius: 40,
                                        justifyContent: 'flex-start',
                                        alignItems: 'center',
                                        bottom: 0,
                                        flexDirection: 'row',
                                        paddingHorizontal: 20,
                                        paddingVertical: 5,
                                    }}>
                                    <View style={{ flexDirection: 'column' }}>
                                        <Text style={{
                                            color: '#E2F163',
                                            fontSize: 18,
                                            fontWeight: 400,
                                            lineHeight: 21,
                                            textAlign: 'left',
                                            width: '100%',
                                        }}>Functional Training</Text>
                                        <View style={{ flexDirection: 'row', justifyContent: 'center', alignItems: 'center' }}>
                                            <AntDesign name="clockcircle" size={13} color="white" />
                                            <Text style={{
                                                color: 'white',
                                                fontWeight: 400,
                                                fontSize: 13,
                                                lineHeight: 13,
                                                padding: 5,
                                                textAlign: 'left',
                                            }}>45 Minutes</Text>
                                            <View style={{ paddingHorizontal: 10 }}></View>
                                            <FontAwesome5 name="fire" size={13} color="white" />
                                            <Text style={{
                                                color: 'white',
                                                fontWeight: 400,
                                                fontSize: 13,
                                                lineHeight: 13,
                                                padding: 5,
                                                textAlign: 'left',
                                            }}>1450 Kcal</Text>
                                            <View style={{ paddingHorizontal: 10 }}></View>
                                            <FontAwesome5 name="fire" size={13} color="white" />
                                            <Text style={{
                                                color: 'white',
                                                fontWeight: 400,
                                                fontSize: 13,
                                                lineHeight: 13,
                                                padding: 5,
                                                textAlign: 'left',
                                            }}>5 Excercises</Text>
                                        </View>
                                    </View>
                                </View>
                            </View>
                        </TouchableOpacity>
                    </View>

                    {/* Meal Plans */}
                    <View
                        style={{
                            flexDirection: 'column',
                            justifyContent: 'center',
                            display: 'flex',
                            alignItems: 'center',
                            // width: '100%',
                            marginHorizontal: 20,
                        }}>
                        <View
                            style={{
                                display: 'flex',
                                flexDirection: 'column',
                                justifyContent: 'flex-start',
                                alignSelf: 'flex-start',
                                alignItems: 'flex-start',
                                // width: '100%',
                            }}>

                            <Text style={{
                                color: '#E2F163',
                                marginTop: 20,
                                fontSize: 25,
                                fontWeight: 400,
                                lineHeight: 30,
                                textAlign: 'left',
                                width: '100%',
                            }}>Let's Go Beginner</Text>
                            <Text style={{
                                color: 'white',
                                fontSize: 12,
                                fontWeight: 400,
                                lineHeight: 18,
                                textAlign: 'left',
                                width: '100%',
                            }}>Explore Different Workout Styles</Text>
                        </View>

                        <View
                            style={{
                                flexDirection: 'column',
                                justifyContent: 'center',
                                display: 'flex',
                                alignItems: 'center',
                                gap: 20,
                                marginTop: 20,
                            }}>
                            {
                                exerciseList.map((exercise, index) => {
                                    return (
                                        <View
                                            style={{
                                                display: 'flex',
                                                flexDirection: 'row',
                                                justifyContent: 'space-between',
                                                alignItems: 'center',
                                                margin: 0,
                                                padding: 0,
                                                borderRadius: 20,
                                                backgroundColor: 'white',
                                            }}>
                                            <View
                                                style={{
                                                    display: 'flex',
                                                    flexDirection: 'column',
                                                    flex: 3,
                                                    alignItems: 'center',
                                                    justifyContent: 'center',
                                                    marginLeft: 10,
                                                }}>
                                                <Text style={{
                                                    color: 'black',
                                                    fontSize: 21,
                                                    fontWeight: 500,
                                                    lineHeight: 21,
                                                    textAlign: 'left',
                                                    width: '100%',
                                                    padding: 10,
                                                }}>{exercise.title}</Text>
                                                <View
                                                    style={{
                                                        display: 'flex',
                                                        flexDirection: 'row',
                                                        flexWrap: 'wrap',
                                                        marginLeft: 10,
                                                    }}>
                                                    <View style={{ flexDirection: 'row', alignItems: 'center' }}>
                                                        <AntDesign name="clockcircle" size={13} color="black" />
                                                        <Text style={{
                                                            color: 'black',
                                                            fontWeight: 400,
                                                            fontSize: 13,
                                                            lineHeight: 13,
                                                            padding: 5,
                                                            textAlign: 'left',
                                                        }}>{exercise.time}</Text>
                                                    </View>
                                                    <View style={{ paddingHorizontal: 10 }}></View>
                                                    <View style={{ flexDirection: 'row', alignItems: 'center' }}>
                                                        <FontAwesome5 name="fire" size={13} color="black" />
                                                        <Text style={{
                                                            color: 'black',
                                                            fontWeight: 400,
                                                            fontSize: 13,
                                                            lineHeight: 13,
                                                            padding: 5,
                                                            textAlign: 'left',
                                                        }}>{exercise.kcal}</Text>
                                                    </View>
                                                    <View style={{ paddingHorizontal: 10 }}></View>
                                                    <View style={{ flexDirection: 'row', alignItems: 'center' }}>
                                                        <FontAwesome5 name="fire" size={13} color="black" />
                                                        <Text style={{
                                                            color: 'black',
                                                            fontWeight: 400,
                                                            fontSize: 13,
                                                            lineHeight: 13,
                                                            padding: 5,
                                                            textAlign: 'left',
                                                        }}>{exercise.excercises} Excercises</Text>
                                                    </View>
                                                </View>
                                            </View>

                                            <View
                                                style={{
                                                    display: 'flex',
                                                    flexDirection: 'column',
                                                    flex: 2,
                                                    alignItems: 'center',
                                                    justifyContent: 'center',
                                                }}>
                                                <View
                                                    style={{
                                                        width: '100%',
                                                        aspectRatio: 1.3,
                                                    }}>
                                                    <Image source={exercise.img} style={{ width: '100%', aspectRatio: 1.3, borderRadius: 20 }} />
                                                </View>
                                            </View>
                                        </View>
                                    )
                                })
                            }
                        </View>
                    </View>
                </View>
            </ScrollView>
        </SafeAreaView>
    );
}