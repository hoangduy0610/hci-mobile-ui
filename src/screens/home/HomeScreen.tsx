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

const exerciseList = [
    {
        img: require('../../assets/img1.jpeg'),
        title: 'Squat Exercise',
        time: '12 Minutes',
        kcal: '120 Kcal',
    },
    {
        img: require('../../assets/img1.jpeg'),
        title: 'Full Body Stretching',
        time: '12 Minutes',
        kcal: '120 Kcal',
    }
]

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


export const HomeScreen = () => {
    const navigation = useNavigation<NativeStackNavigationProp<RootNavigatorParamList>>();

    return (
        <SafeAreaView style={{ flex: 1, backgroundColor: "#212020" }}>
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
                        }}>Hi, JunKye</Text>

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
                    <Text style={{
                        color: 'white',
                        fontWeight: 500,
                        marginHorizontal: 30,
                        fontSize: 15,
                        lineHeight: 22.5,
                        textAlign: 'left',
                    }}>It's time to challenge your limits.</Text>

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
                                justifyContent: 'space-between',
                                display: 'flex',
                                alignItems: 'center',
                                width: '100%',
                            }}>

                            <Text style={{
                                color: '#E2F163',
                                fontSize: 15,
                                fontWeight: 500,
                                lineHeight: 22,
                                textAlign: 'left',
                            }}>Recommendations</Text>

                            <TouchableOpacity
                                onPress={() => {
                                    navigation.navigate(ScreenNamesEnum.TabNavigator, {
                                        screen: ScreenNamesEnum.Workout,
                                    });
                                }}
                                style={{
                                    padding: 10,
                                    flexDirection: 'row',
                                    justifyContent: 'center',
                                    alignItems: 'center',
                                    gap: 5
                                }}>
                                <Text style={{
                                    color: 'white',
                                    fontSize: 15,
                                    fontWeight: 500,
                                    lineHeight: 22,
                                    textAlign: 'right',
                                }}>See all</Text>
                                <AntDesign name="caretright" size={15} color="#E2F163" />
                            </TouchableOpacity>
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
                                exerciseList.map((exercise, index) => {
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
                                                <Text style={{
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

                    {/* Routine */}
                    <View
                        style={{
                            backgroundColor: '#B3A0FF',
                            flexDirection: 'row',
                            justifyContent: 'center',
                            display: 'flex',
                            alignItems: 'center',
                            width: '100%',
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
                                    <AntDesign name="clockcircle" size={13} color="white" />
                                    <Text style={{
                                        color: 'white',
                                        fontWeight: 400,
                                        fontSize: 13,
                                        lineHeight: 13,
                                        padding: 5,
                                        textAlign: 'left',
                                    }}>45 Minutes</Text>
                                    <View style={{ paddingHorizontal: 20 }}></View>
                                    <FontAwesome5 name="fire" size={13} color="white" />
                                    <Text style={{
                                        color: 'white',
                                        fontWeight: 400,
                                        fontSize: 13,
                                        lineHeight: 13,
                                        padding: 5,
                                        textAlign: 'left',
                                    }}>1450 Kcal</Text>
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
                                fontWeight: 400,
                                lineHeight: 30,
                                textAlign: 'left',
                                width: '100%',
                            }}>Meal Plans For Today</Text>
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
                                mealList.map((meal, index) => {
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
                                                justifyContent: 'center',
                                                flex: 1,
                                                // padding: 10,
                                                marginVertical: 10,
                                            }}>
                                            <View
                                                style={{
                                                    width: '100%',
                                                    aspectRatio: 1.15,
                                                    overflow: 'hidden',
                                                    borderRadius: 20,
                                                }}>
                                                <Image source={meal.img} style={{ width: '100%', aspectRatio: 1.15 }} />
                                            </View>
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
                                                        color: 'white',
                                                        fontWeight: 700,
                                                        fontSize: 15,
                                                        lineHeight: 22,
                                                        textAlign: 'center',
                                                        textOverflow: 'ellipsis',
                                                    }}>{meal.title}</Text>
                                                <View
                                                    style={{
                                                        display: 'flex',
                                                        flexDirection: 'row',
                                                        alignItems: 'center',
                                                        justifyContent: 'center',
                                                    }}>
                                                    <AntDesign name="clockcircle" size={13} color="white" />
                                                    <Text style={{
                                                        color: 'white',
                                                        fontWeight: 400,
                                                        fontSize: 13,
                                                        lineHeight: 13,
                                                        padding: 5,
                                                        textAlign: 'left',
                                                    }}>{meal.time}</Text>
                                                    <View style={{ paddingHorizontal: 6 }}></View>
                                                    <FontAwesome5 name="fire" size={13} color="white" />
                                                    <Text style={{
                                                        color: 'white',
                                                        fontWeight: 400,
                                                        fontSize: 13,
                                                        lineHeight: 13,
                                                        padding: 5,
                                                        textAlign: 'left',
                                                    }}>{meal.kcal}</Text>
                                                </View>
                                            </View>
                                        </TouchableOpacity>
                                    );
                                })
                            }
                        </View>
                    </View>
                </View>
            </ScrollView>
        </SafeAreaView>
    );
}