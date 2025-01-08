import { useNavigation } from "@react-navigation/native";
import { NativeStackNavigationProp } from "@react-navigation/native-stack";
import { Asset } from "expo-asset";
import { Image } from "expo-image";
import { Text, TouchableOpacity, View } from "react-native";
import { ScreenNamesEnum } from "../../navigation/ScreenNamesEnum";
import { RootNavigatorParamList } from "../../navigation/ScreenNavigatorType";
import { useEffect } from "react";
import AsyncStorage from "@react-native-async-storage/async-storage";


export const Introduce = () => {
    const navigation = useNavigation<NativeStackNavigationProp<RootNavigatorParamList>>();

    useEffect(() => {
        const checkIntroduce = async () => {
            return;
            const introduce = await AsyncStorage.getItem('isIntroduced');
            if (introduce === 'true') {
                navigation.navigate(ScreenNamesEnum.TabNavigator, {
                    screen: ScreenNamesEnum.Home,
                });
            }
        }

        checkIntroduce();
    }, []);

    return (
        <View style={{
            flex: 1,
            alignItems: 'center',
            justifyContent: 'flex-start',
            backgroundColor: "#232323"
        }}>
            <View style={{
                height: 500,
                width: '100%',
                alignItems: 'stretch',
                overflow: 'hidden',
            }}>
                <Image source={Asset.fromModule(require('../../assets/img1.jpeg'))}
                    style={{
                        // display: 'flex',
                        width: 1000,
                        height: 900,
                    }}
                    contentFit="cover"
                    contentPosition={{ right: 280 }}
                />
            </View>
            <Text style={{
                color: '#E2F163',
                fontSize: 30,
                fontWeight: 500,
                lineHeight: 36,
                padding: 32,
                textAlign: 'center',
            }}>Consistency Is the Key To progress. Don't Give Up!</Text>

            <View style={{
                backgroundColor: '#B3A0FF',
                padding: 35,
            }}>
                <Text style={{
                    fontWeight: 300,
                    lineHeight: 14,
                    fontSize: 14,
                    textAlign: 'center',
                }}>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. </Text>
            </View>

            {/* Pill button */}
            <TouchableOpacity
                onPress={() => {
                    navigation.navigate(ScreenNamesEnum.Introduce2);
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
                    position: 'absolute',
                    bottom: 70,
                    alignSelf: 'center',
                    borderColor: 'rgba(255, 255, 255, 1)'
                }}>
                <Text style={{
                    fontWeight: 700,
                    lineHeight: 27,
                    fontSize: 18,
                    textAlign: 'center',
                    color: 'white'
                }}>Next</Text>
            </TouchableOpacity>
        </View>
    );
}