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
import Foundation from '@expo/vector-icons/Foundation';
import { CustomCalendar } from '../../components/CustomCalendar';
import { BarChart } from "react-native-gifted-charts";

const tabOptions = [
    'Summary',
    'Log Detail',
]

const barData = [
    { value: 105, label: 'Jan', frontColor: '#E2F163' },
    { value: 165, label: 'Feb', frontColor: '#E2F163' },
    { value: 120, label: 'Mar', frontColor: '#E2F163' },
    { value: 160, label: 'Apr', frontColor: '#E2F163' },
];

const workoutLog = [
    {
        weekday: 'Thu',
        day: 14,
        steps: '3,679',
        duration: '1hr40m'
    },
    {
        weekday: 'Wed',
        day: 20,
        steps: '5,789',
        duration: '1hr20m'
    },
    {
        weekday: 'Sat',
        day: 22,
        steps: '1,859',
        duration: '1hr10m'
    },
    {
        weekday: 'Sun',
        day: 23,
        steps: '2,789',
        duration: '1hr30m'
    },
    {
        weekday: 'Mon',
        day: 24,
        steps: '3,789',
        duration: '1hr40m'
    },
    {
        weekday: 'Tue',
        day: 25,
        steps: '4,789',
        duration: '1hr50m'
    },
    {
        weekday: 'Wed',
        day: 26,
        steps: '5,789',
        duration: '1hr20m'
    },
    {
        weekday: 'Thu',
        day: 27,
        steps: '6,789',
        duration: '1hr40m'
    },
    {
        weekday: 'Fri',
        day: 28,
        steps: '7,789',
        duration: '1hr50m'
    },
    {
        weekday: 'Sat',
        day: 29,
        steps: '8,789',
        duration: '1hr20m'
    },
    {
        weekday: 'Sun',
        day: 30,
        steps: '9,789',
        duration: '1hr30m'
    },
    {
        weekday: 'Mon',
        day: 31,
        steps: '10,789',
        duration: '1hr40m'
    },
    {
        weekday: 'Tue',
        day: 1,
        steps: '11,789',
        duration: '1hr50m'
    },
    {
        weekday: 'Wed',
        day: 2,
        steps: '12,789',
        duration: '1hr20m'
    },
    {
        weekday: 'Thu',
        day: 3,
        steps: '13,789',
        duration: '1hr40m'
    },
    {
        weekday: 'Fri',
        day: 4,
        steps: '14,789',
        duration: '1hr50m'
    },
    {
        weekday: 'Sat',
        day: 5,
        steps: '15,789',
        duration: '1hr20m'
    },
    {
        weekday: 'Sun',
        day: 6,
        steps: '16,789',
        duration: '1hr30m'
    },
]

const activities = [
    {
        kcal: 120,
        name: 'Upper Body Workout',
        date: 'June 09',
        duration: '25 Mins'
    },
    {
        kcal: 130,
        name: 'Pull Out',
        date: 'April 15 - 4:00 PM',
        duration: '30 Mins'
    },
    {
        kcal: 140,
        name: 'Push Up',
        date: 'April 15 - 4:00 PM',
        duration: '30 Mins'
    },
    {
        kcal: 150,
        name: 'Pull Up',
        date: 'April 15 - 4:00 PM',
        duration: '30 Mins'
    },
    {
        kcal: 160,
        name: 'Push Out',
        date: 'April 15 - 4:00 PM',
        duration: '30 Mins'
    },
    {
        kcal: 170,
        name: 'Pull Down',
        date: 'April 15 - 4:00 PM',
        duration: '30 Mins'
    },
    {
        kcal: 180,
        name: 'Push Down',
        date: 'April 15 - 4:00 PM',
        duration: '30 Mins'
    },
    {
        kcal: 190,
        name: 'Pull In',
        date: 'April 15 - 4:00 PM',
        duration: '30 Mins'
    },
    {
        kcal: 200,
        name: 'Push In',
        date: 'April 15 - 4:00 PM',
        duration: '30 Mins'
    },
    {
        kcal: 210,
        name: 'Pull Out',
        date: 'April 15 - 4:00 PM',
        duration: '30 Mins'
    },
    {
        kcal: 220,
        name: 'Push Up',
        date: 'April 15 - 4:00 PM',
        duration: '30 Mins'
    },
    {
        kcal: 230,
        name: 'Pull Up',
        date: 'April 15 - 4:00 PM',
        duration: '30 Mins'
    },
    {
        kcal: 240,
        name: 'Push Out',
        date: 'April 15 - 4:00 PM',
        duration: '30 Mins'
    },
    {
        kcal: 250,
        name: 'Pull Down',
        date: 'April 15 - 4:00 PM',
        duration: '30 Mins'
    },
]

export const ProgressScreen = () => {
    const navigation = useNavigation<NativeStackNavigationProp<RootNavigatorParamList>>();
    const [selectedTabOption, setSelectedTabOption] = useState<string>('Summary');

    const onDateChange = (date: Date) => {
        console.log(date);
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
                        }}>Progress Tracking</Text>

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

                    {/* Info card */}
                    <View
                        style={{
                            backgroundColor: '#B3A0FF',
                            flexDirection: 'row',
                            justifyContent: 'center',
                            display: 'flex',
                            alignItems: 'center',
                            // width: '100%',
                            marginTop: 20,
                        }}
                    >
                        {/* Info column */}
                        <View
                            style={{
                                display: 'flex',
                                flexDirection: 'column',
                                justifyContent: 'center',
                                alignItems: 'flex-start',
                                flex: 1,
                                paddingLeft: 50,
                                gap: 5,
                            }}
                        >
                            {/* Name row */}
                            <View
                                style={{
                                    display: 'flex',
                                    flexDirection: 'row',
                                    justifyContent: 'center',
                                    alignItems: 'flex-start',
                                    gap: 10,
                                }}>
                                <Text style={{
                                    color: 'white',
                                    fontWeight: 700,
                                    fontSize: 25,
                                    lineHeight: 25,
                                    textAlign: 'left',
                                }}>
                                    Perry
                                </Text>
                                <Foundation name="female-symbol" size={25} color="#E2F163" />
                            </View>

                            {/* Age row */}
                            <Text style={{
                                color: 'white',
                                fontWeight: 600,
                                fontSize: 14,
                                lineHeight: 14,
                                textAlign: 'left',
                            }}>Age: 18</Text>

                            {/* Weight and height row */}
                            <View
                                style={{
                                    display: 'flex',
                                    flexDirection: 'row',
                                    justifyContent: 'center',
                                    alignItems: 'center',
                                    marginTop: 10,
                                    gap: 30
                                }}
                            >
                                <View
                                    style={{
                                        display: 'flex',
                                        flexDirection: 'column',
                                        justifyContent: 'center',
                                        alignItems: 'flex-start',
                                        borderLeftWidth: 6,
                                        borderLeftColor: '#E2F163',
                                        paddingLeft: 5,
                                        paddingVertical: 5,
                                    }}
                                >
                                    <Text style={{
                                        color: 'white',
                                        fontWeight: 600,
                                        fontSize: 14,
                                        lineHeight: 14,
                                        textAlign: 'left',
                                    }}>48 Kg</Text>
                                    <Text style={{
                                        color: 'white',
                                        fontWeight: 300,
                                        fontSize: 14,
                                        lineHeight: 14,
                                        textAlign: 'left',
                                    }}>Weight</Text>
                                </View>

                                <View
                                    style={{
                                        display: 'flex',
                                        flexDirection: 'column',
                                        justifyContent: 'center',
                                        alignItems: 'flex-start',
                                        borderLeftWidth: 6,
                                        borderLeftColor: '#E2F163',
                                        paddingLeft: 5,
                                        paddingVertical: 5,
                                    }}
                                >
                                    <Text style={{
                                        color: 'white',
                                        fontWeight: 600,
                                        fontSize: 14,
                                        lineHeight: 14,
                                        textAlign: 'left',
                                    }}>158 cm</Text>
                                    <Text style={{
                                        color: 'white',
                                        fontWeight: 300,
                                        fontSize: 14,
                                        lineHeight: 14,
                                        textAlign: 'left',
                                    }}>Height</Text>
                                </View>
                            </View>
                        </View>

                        {/* Image Column */}
                        <View
                            style={{
                                display: 'flex',
                                flexDirection: 'column',
                                justifyContent: 'center',
                                alignItems: 'center',
                                paddingVertical: 10,
                                paddingRight: 50,
                            }}
                        >
                            <Image source={Asset.fromModule(require('../../assets/img1.jpeg'))}
                                style={{
                                    width: 120,
                                    height: 120,
                                    borderRadius: 120,
                                }}
                            />
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
                            tabOptions.map((tabOption, index) => {
                                return (
                                    <TouchableOpacity
                                        key={index}
                                        onPress={() => {
                                            setSelectedTabOption(tabOption);
                                        }}
                                        style={{
                                            backgroundColor: selectedTabOption === tabOption ? '#E2F163' : 'white',
                                            // margin: 20,
                                            marginHorizontal: 10,
                                            paddingVertical: 7,
                                            justifyContent: 'center',
                                            alignItems: 'center',
                                            width: '50%',
                                            borderRadius: 100,
                                        }}>
                                        <Text style={{
                                            color: selectedTabOption === tabOption ? 'black' : '#896CFE',
                                            fontWeight: 500,
                                            fontSize: 17,
                                            lineHeight: 20
                                        }}>
                                            {tabOption}
                                        </Text>
                                    </TouchableOpacity>
                                );
                            })
                        }
                    </View>

                    {/* Tab Summary */}
                    {
                        selectedTabOption === "Summary" && (
                            <>
                                <View
                                    style={{
                                        display: 'flex',
                                        flexDirection: 'row',
                                        justifyContent: 'center',
                                        alignItems: 'center',
                                        alignSelf: 'center',
                                        width: '85%',
                                        borderRadius: 20,
                                        overflow: 'hidden',
                                        marginVertical: 20,
                                    }}
                                >
                                    <CustomCalendar />
                                </View>
                                <Text style={{
                                    color: '#E2F163',
                                    marginLeft: 35,
                                    fontSize: 25,
                                    fontWeight: 400,
                                    lineHeight: 30,
                                    textAlign: 'left',
                                    width: '100%',
                                }}>Activities</Text>

                                <View
                                    style={{
                                        flexDirection: 'column',
                                        justifyContent: 'center',
                                        display: 'flex',
                                        width: '100%',
                                        alignItems: 'center',
                                        gap: 20,
                                        marginTop: 20,
                                    }}>
                                    {
                                        activities.map((exercise, index) => {
                                            return (
                                                <View
                                                    style={{
                                                        display: 'flex',
                                                        flexDirection: 'row',
                                                        justifyContent: 'space-between',
                                                        alignItems: 'center',
                                                        margin: 0,
                                                        width: '85%',
                                                        padding: 0,
                                                        borderRadius: 20,
                                                        backgroundColor: 'white',
                                                    }}>
                                                    <View
                                                        style={{
                                                            display: 'flex',
                                                            flexDirection: 'column',
                                                            alignItems: 'center',
                                                            justifyContent: 'center',
                                                        }}>
                                                        <View
                                                            style={{
                                                                aspectRatio: 1,
                                                                display: 'flex',
                                                                justifyContent: 'center',
                                                                alignItems: 'center',
                                                                borderRadius: '50%',
                                                                backgroundColor: '#896CFE',
                                                                padding: 10,
                                                                margin: 10,
                                                                marginRight: 0,
                                                            }}>
                                                            {/* <Image source={exercise.img} style={{ width: '100%', aspectRatio: 1.3, borderRadius: 20 }} /> */}
                                                            <FontAwesome5 name="running" size={40} color="white" />
                                                        </View>
                                                    </View>
                                                    <View
                                                        style={{
                                                            display: 'flex',
                                                            flexDirection: 'column',
                                                            alignItems: 'flex-start',
                                                            flex: 1,
                                                            justifyContent: 'center',
                                                            marginLeft: 10,
                                                            gap: 7,
                                                            paddingVertical: 10,
                                                        }}>
                                                        <View style={{
                                                            display: 'flex',
                                                            flexDirection: 'row',
                                                            alignItems: 'center',
                                                            justifyContent: 'flex-start',
                                                            gap: 5,
                                                        }}>
                                                            <FontAwesome5 name="fire" size={12} color="#896CFE" />
                                                            <Text style={{
                                                                color: 'black',
                                                                fontWeight: 400,
                                                                fontSize: 14,
                                                                lineHeight: 14,
                                                                textAlign: 'left',
                                                                marginTop: 2,
                                                            }}>{exercise.kcal} Kcal</Text>
                                                        </View>
                                                        <Text style={{
                                                            color: 'black',
                                                            fontSize: 17,
                                                            fontWeight: 500,
                                                            lineHeight: 17,
                                                            textAlign: 'left',
                                                        }}>{exercise.name}</Text>
                                                        <Text style={{
                                                            color: '#B3A0FF',
                                                            fontSize: 15,
                                                            fontWeight: 500,
                                                            lineHeight: 15,
                                                            textAlign: 'left',
                                                        }}>{exercise.date}</Text>
                                                    </View>
                                                    <View
                                                        style={{
                                                            display: 'flex',
                                                            flexDirection: 'column',
                                                            alignItems: 'flex-end',
                                                            justifyContent: 'center',
                                                            marginRight: 20,
                                                            gap: 7,
                                                        }}>
                                                        <Text style={{
                                                            color: '#B3A0FF',
                                                            fontSize: 15,
                                                            fontWeight: 500,
                                                            lineHeight: 15,
                                                            textAlign: 'left',
                                                        }}>Duration</Text>
                                                        <View style={{
                                                            display: 'flex',
                                                            flexDirection: 'row',
                                                            alignItems: 'center',
                                                            justifyContent: 'flex-start',
                                                            gap: 5,
                                                        }}>
                                                            <AntDesign name="clockcircle" size={18} color="#896CFE" />
                                                            <Text style={{
                                                                color: '#896CFE',
                                                                fontWeight: 500,
                                                                fontSize: 18,
                                                                lineHeight: 18,
                                                                textAlign: 'left',
                                                                marginTop: 2,
                                                            }}>{exercise.duration}</Text>
                                                        </View>
                                                    </View>
                                                </View>
                                            )
                                        })
                                    }
                                </View>
                            </>
                        )
                    }
                    {
                        selectedTabOption === "Log Detail" && (
                            <>
                                <Text style={{
                                    color: '#E2F163',
                                    marginLeft: 35,
                                    fontSize: 16,
                                    fontWeight: 500,
                                    lineHeight: 21,
                                    textAlign: 'left',
                                    width: '100%',
                                }}>My Progress</Text>
                                <Text style={{
                                    color: '#E2F163',
                                    marginLeft: 35,
                                    marginVertical: 10,
                                    fontSize: 24,
                                    fontWeight: 500,
                                    lineHeight: 25,
                                    textAlign: 'left',
                                    width: '100%',
                                }}>January 12th</Text>
                                <View
                                    style={{
                                        display: 'flex',
                                        flexDirection: 'row',
                                        justifyContent: 'center',
                                        alignItems: 'center',
                                        alignSelf: 'center',
                                        width: '85%',
                                        borderRadius: 20,
                                        overflow: 'hidden',
                                        marginVertical: 20,
                                        borderWidth: 1,
                                        borderColor: 'white',
                                        padding: 10,
                                    }}
                                >
                                    <BarChart
                                        width={240}
                                        spacing={40}
                                        initialSpacing={30}
                                        horizontal={false}
                                        barWidth={22}
                                        barBorderRadius={4}
                                        frontColor="#E2F163"
                                        data={barData}
                                        yAxisThickness={0}
                                        xAxisThickness={0}
                                        yAxisColor={'#E2F163'}
                                        xAxisColor={'#E2F163'}
                                        yAxisTextStyle={{
                                            color: '#E2F163',
                                            fontSize: 12,
                                            fontWeight: 400,
                                        }}
                                        xAxisLabelTextStyle={{
                                            color: '#E2F163',
                                            fontSize: 12,
                                            fontWeight: 400,
                                        }}
                                    />
                                </View>

                                <View
                                    style={{
                                        flexDirection: 'column',
                                        justifyContent: 'center',
                                        display: 'flex',
                                        width: '100%',
                                        alignItems: 'center',
                                        gap: 20,
                                        marginTop: 20,
                                    }}>
                                    {
                                        workoutLog.map((log, index) => {
                                            return (
                                                <View
                                                    style={{
                                                        display: 'flex',
                                                        flexDirection: 'row',
                                                        justifyContent: 'space-between',
                                                        alignItems: 'center',
                                                        margin: 0,
                                                        width: '85%',
                                                        padding: 0,
                                                        paddingVertical: 15,
                                                        borderRadius: 20,
                                                        backgroundColor: '#896CFE',
                                                    }}>
                                                    <View
                                                        style={{
                                                            display: 'flex',
                                                            flexDirection: 'column',
                                                            alignItems: 'center',
                                                            justifyContent: 'center',
                                                            marginLeft: 30,
                                                            gap: 10,
                                                            borderRightWidth: 1,
                                                            borderColor: 'white',
                                                            paddingRight: 30,
                                                        }}>
                                                        <Text style={{
                                                            color: 'white',
                                                            fontSize: 16,
                                                            fontWeight: 500,
                                                            lineHeight: 16,
                                                            textAlign: 'center',
                                                        }}>{log.weekday}</Text>

                                                        <Text style={{
                                                            color: 'white',
                                                            fontWeight: 500,
                                                            fontSize: 27,
                                                            lineHeight: 27,
                                                            textAlign: 'center',
                                                            marginTop: 2,
                                                        }}>{log.day}</Text>
                                                    </View>
                                                    <View
                                                        style={{
                                                            display: 'flex',
                                                            flexDirection: 'column',
                                                            alignItems: 'flex-start',
                                                            justifyContent: 'center',
                                                            marginLeft: 30,
                                                            gap: 10,
                                                            flex: 1,
                                                            paddingRight: 30,
                                                        }}>
                                                        <Text style={{
                                                            color: 'white',
                                                            fontSize: 16,
                                                            fontWeight: 500,
                                                            lineHeight: 16,
                                                            textAlign: 'left',
                                                        }}>Steps</Text>

                                                        <Text style={{
                                                            color: 'white',
                                                            fontWeight: 500,
                                                            fontSize: 27,
                                                            lineHeight: 27,
                                                            textAlign: 'left',
                                                            marginTop: 2,
                                                        }}>{log.steps}</Text>
                                                    </View>
                                                    <View
                                                        style={{
                                                            display: 'flex',
                                                            flexDirection: 'column',
                                                            alignItems: 'flex-start',
                                                            justifyContent: 'center',
                                                            marginRight: 20,
                                                            gap: 10,
                                                        }}>
                                                        <Text style={{
                                                            color: 'white',
                                                            fontSize: 16,
                                                            fontWeight: 500,
                                                            lineHeight: 16,
                                                            textAlign: 'left',
                                                        }}>Duration</Text>
                                                        <View style={{
                                                            display: 'flex',
                                                            flexDirection: 'row',
                                                            alignItems: 'center',
                                                            justifyContent: 'flex-start',
                                                            gap: 5,
                                                        }}>
                                                            <AntDesign name="clockcircle" size={18} color="white" />
                                                            <Text style={{
                                                                color: 'white',
                                                                fontWeight: 500,
                                                                fontSize: 20,
                                                                lineHeight: 20,
                                                                textAlign: 'left',
                                                                marginTop: 2,
                                                            }}>{log.duration}</Text>
                                                        </View>
                                                    </View>
                                                </View>
                                            )
                                        })
                                    }
                                </View>
                            </>
                        )
                    }
                </View>
            </ScrollView>
        </SafeAreaView >
    );
}