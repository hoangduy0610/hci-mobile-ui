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
import { useState } from 'react';

const mealList = [
    {
        img: require('../../assets/img2.png'),
        title: 'Delights With Greek Yogourt',
        time: '6 Minutes',
        kcal: '200 Kcal',
    },
    {
        img: require('../../assets/img2.png'),
        title: 'Baked Salmon',
        time: '30 Minutes',
        kcal: '350 Kcal',
    }
]

const fullMealList = [
    {
        img: require('../../assets/img2.png'),
        title: 'Delights With Greek Yogourt',
        time: '6 Minutes',
        kcal: '200 Kcal',
    },
    {
        img: require('../../assets/img2.png'),
        title: 'Baked Salmon',
        time: '30 Minutes',
        kcal: '350 Kcal',
    },
    {
        img: require('../../assets/img2.png'),
        title: 'Delights With Greek Yogourt',
        time: '6 Minutes',
        kcal: '200 Kcal',
    },
    {
        img: require('../../assets/img2.png'),
        title: 'Baked Salmon',
        time: '30 Minutes',
        kcal: '350 Kcal',
    },
    {
        img: require('../../assets/img2.png'),
        title: 'Delights With Greek Yogourt',
        time: '6 Minutes',
        kcal: '200 Kcal',
    },
    {
        img: require('../../assets/img2.png'),
        title: 'Baked Salmon',
        time: '30 Minutes',
        kcal: '350 Kcal',
    },
    {
        img: require('../../assets/img2.png'),
        title: 'Delights With Greek Yogourt',
        time: '6 Minutes',
        kcal: '200 Kcal',
    },
    {
        img: require('../../assets/img2.png'),
        title: 'Baked Salmon',
        time: '30 Minutes',
        kcal: '350 Kcal',
    },
]

const activityLevels = [
    'Meal Plan',
    'Config',
]


export const NutritionScreen = () => {
    const navigation = useNavigation<NativeStackNavigationProp<RootNavigatorParamList>>();
    const [selectedActivityLevel, setSelectedActivityLevel] = useState<string>('Meal Plan');

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
                        }}>Nutrition</Text>

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
                                <AntDesign name="plus" size={22} color="#896CFE" />
                            </TouchableOpacity>
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
                                        // setSelectedActivityLevel(activityLevel);
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

                {/* Card Linead */}
                <LinearGradient
                    colors={['rgba(135, 131, 131, 0.32)', 'rgba(33, 32, 32, 0)']}
                    style={{
                        alignSelf: 'center',
                        width: '100%',
                        marginTop: 20,
                        borderTopLeftRadius: 30,
                        borderTopRightRadius: 30,
                    }}
                >
                    <View style={{
                        flexDirection: 'row',
                        justifyContent: 'space-between',
                        display: 'flex',
                        alignItems: 'center',
                        // width: '100%',
                        margin: 20,
                    }}>
                        <View
                            style={{
                                flex: 1,
                                display: 'flex',
                                flexDirection: 'column',
                                alignItems: 'center',
                            }}>
                            <Text style={{
                                color: '#B3A0FF',
                                fontWeight: 700,
                                fontSize: 25,
                                lineHeight: 37.5,
                                textAlign: 'center',
                            }}>1534</Text>
                            <Text style={{
                                color: '#B3A0FF',
                                fontWeight: 400,
                                fontSize: 16,
                                lineHeight: 19,
                                textAlign: 'center',
                            }}>Eaten</Text>
                        </View>

                        <View
                            style={{
                                flex: 2,
                                display: 'flex',
                                flexDirection: 'column',
                                alignItems: 'center',
                            }}>
                            <ProgressCircle
                                progress={15}
                                size={150}
                                showLabel={false}
                            >
                                <View
                                    style={{
                                        display: 'flex',
                                        flexDirection: 'column',
                                        alignItems: 'center',
                                        justifyContent: 'center',
                                        height: '100%',
                                    }}>
                                    <Text style={{
                                        color: '#B3A0FF',
                                        fontWeight: 700,
                                        fontSize: 25,
                                        lineHeight: 37.5,
                                        textAlign: 'center',
                                    }}>1237</Text>
                                    <Text style={{
                                        color: '#B3A0FF',
                                        fontWeight: 400,
                                        fontSize: 16,
                                        lineHeight: 19,
                                        textAlign: 'center',
                                    }}>kcal left</Text>
                                </View>
                            </ProgressCircle>
                        </View>

                        <View
                            style={{
                                flex: 1,
                                display: 'flex',
                                flexDirection: 'column',
                                alignItems: 'center',
                            }}>
                            <Text style={{
                                color: '#B3A0FF',
                                fontWeight: 700,
                                fontSize: 25,
                                lineHeight: 37.5,
                                textAlign: 'center',
                            }}>414</Text>
                            <Text style={{
                                color: '#B3A0FF',
                                fontWeight: 400,
                                fontSize: 16,
                                lineHeight: 19,
                                textAlign: 'center',
                            }}>Burned</Text>
                        </View>
                    </View>

                    <View style={{
                        flexDirection: 'row',
                        justifyContent: 'space-between',
                        display: 'flex',
                        alignItems: 'center',
                        // width: '100%',
                        margin: 20,
                    }}>
                        <View
                            style={{
                                flex: 1,
                                display: 'flex',
                                flexDirection: 'column',
                                alignItems: 'center',
                            }}>
                            <Text style={{
                                color: '#B3A0FF',
                                fontWeight: 400,
                                fontSize: 16,
                                lineHeight: 19,
                                textAlign: 'center',
                            }}>Carbs</Text>
                            <Text style={{
                                color: '#B3A0FF',
                                fontWeight: 400,
                                fontSize: 16,
                                lineHeight: 19,
                                textAlign: 'center',
                            }}>45 / 295g</Text>
                        </View>

                        <View
                            style={{
                                flex: 1,
                                display: 'flex',
                                flexDirection: 'column',
                                alignItems: 'center',
                            }}>
                            <Text style={{
                                color: '#B3A0FF',
                                fontWeight: 400,
                                fontSize: 16,
                                lineHeight: 19,
                                textAlign: 'center',
                            }}>Protein</Text>
                            <Text style={{
                                color: '#B3A0FF',
                                fontWeight: 400,
                                fontSize: 16,
                                lineHeight: 19,
                                textAlign: 'center',
                            }}>3 / 118g</Text>
                        </View>

                        <View
                            style={{
                                flex: 1,
                                display: 'flex',
                                flexDirection: 'column',
                                alignItems: 'center',
                            }}>
                            <Text style={{
                                color: '#B3A0FF',
                                fontWeight: 400,
                                fontSize: 16,
                                lineHeight: 19,
                                textAlign: 'center',
                            }}>Fat</Text>
                            <Text style={{
                                color: '#B3A0FF',
                                fontWeight: 400,
                                fontSize: 16,
                                lineHeight: 19,
                                textAlign: 'center',
                            }}>2 / 79g</Text>
                        </View>
                    </View>
                </LinearGradient>

                {/* Recommendations */}
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
                            flexDirection: 'row',
                            justifyContent: 'flex-start',
                            display: 'flex',
                            alignItems: 'center',
                            width: '100%',
                        }}>

                        <Text style={{
                            color: '#E2F163',
                            marginTop: 20,
                            fontSize: 25,
                            fontWeight: 500,
                            lineHeight: 30,
                            textAlign: 'left',
                            width: '100%',
                        }}>Recommended</Text>
                    </View>

                    <View
                        style={{
                            flexDirection: 'row',
                            justifyContent: 'space-between',
                            display: 'flex',
                            alignItems: 'center',
                            width: '100%',
                            gap: 10,
                        }}>
                        {
                            mealList.map((exercise, index) => {
                                return (
                                    <TouchableOpacity
                                        key={index}
                                        onPress={() => {
                                            navigation.navigate(ScreenNamesEnum.WorkoutDetail);
                                        }}
                                        style={{
                                            display: 'flex',
                                            flexDirection: 'column',
                                            alignItems: 'center',
                                            justifyContent: 'center', flex: 1,
                                            borderRadius: 20,
                                            // padding: 10,
                                            marginVertical: 10,
                                            overflow: 'hidden',
                                            borderColor: 'white',
                                            borderWidth: 1,
                                        }}>
                                        <Image source={exercise.img} style={{ width: '100%', height: 100 }} />
                                        <View
                                            style={{
                                                display: 'flex',
                                                flexDirection: 'column',
                                                alignItems: 'flex-start',
                                                justifyContent: 'center',
                                                padding: 10,
                                            }}>
                                            <Text
                                                numberOfLines={1}
                                                style={{
                                                    color: '#E2F163',
                                                    fontWeight: 500,
                                                    fontSize: 15,
                                                    lineHeight: 22,
                                                    textAlign: 'center',
                                                }}>{exercise.title}</Text>
                                            <View
                                                style={{
                                                    display: 'flex',
                                                    flexDirection: 'row',
                                                    alignItems: 'center',
                                                    justifyContent: 'center',
                                                }}>
                                                <AntDesign name="clockcircle" size={13} color="#B3A0FF" />
                                                <Text style={{
                                                    color: 'white',
                                                    fontWeight: 400,
                                                    fontSize: 13,
                                                    lineHeight: 13,
                                                    padding: 5,
                                                    textAlign: 'left',
                                                }}>{exercise.time}</Text>
                                                <FontAwesome5 name="fire" size={13} color="#B3A0FF" />
                                                <Text style={{
                                                    color: 'white',
                                                    fontWeight: 400,
                                                    fontSize: 13,
                                                    lineHeight: 13,
                                                    padding: 5,
                                                    textAlign: 'left',
                                                }}>{exercise.kcal}</Text>
                                            </View>
                                        </View>
                                    </TouchableOpacity>
                                );
                            })
                        }
                    </View>
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
                            flexDirection: 'row',
                            justifyContent: 'flex-start',
                            display: 'flex',
                            alignItems: 'center',
                            width: '100%',
                        }}>

                        <Text style={{
                            color: '#E2F163',
                            marginTop: 20,
                            fontSize: 25,
                            fontWeight: 500,
                            lineHeight: 30,
                            textAlign: 'left',
                            width: '100%',
                        }}>Daily Meals</Text>
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
                            fullMealList.map((meal, index) => {
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
                                            <Text
                                                numberOfLines={2}
                                                style={{
                                                    color: 'black',
                                                    fontSize: 21,
                                                    fontWeight: 500,
                                                    lineHeight: 21,
                                                    textAlign: 'left',
                                                    width: '100%',
                                                    padding: 10,
                                                }}>{meal.title}</Text>
                                            <View
                                                style={{
                                                    display: 'flex',
                                                    flexDirection: 'row',
                                                    flexWrap: 'wrap',
                                                    marginLeft: -20,
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
                                                    }}>{meal.time}</Text>
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
                                                    }}>{meal.kcal}</Text>
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
                                                <Image source={meal.img} style={{ width: '100%', aspectRatio: 1.3, borderRadius: 20 }} />
                                            </View>
                                        </View>
                                    </View>
                                )
                            })
                        }
                    </View>
                </View>
            </ScrollView>
        </SafeAreaView >
    );
}