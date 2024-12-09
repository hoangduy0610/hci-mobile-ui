import { useNavigation } from "@react-navigation/native";
import { NativeStackNavigationProp } from "@react-navigation/native-stack";
import { useEffect } from "react";
import { View, Button, Text } from "react-native";
import { useDispatch, useSelector } from "react-redux";
import { login } from "../../redux/reducers/userReducers";
import { RootState } from "../../redux/store";
import { RootNavigatorParamList } from "../../navigation/ScreenNavigatorType";
import { ScreenNamesEnum } from "../../navigation/ScreenNamesEnum";

export const HomeScreen = () => {
    const navigation = useNavigation<NativeStackNavigationProp<RootNavigatorParamList>>();
    const dispatch = useDispatch();
    const token = useSelector((state: RootState) => state.user.token);

    useEffect(() => {
        console.log('Retrive token: ', token);
    }, [token]);

    return (
        <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
            <Text>Home Screen</Text>
            <Button onPress={() => { navigation.navigate(ScreenNamesEnum.AboutUs) }} title='Go to About Us' />
            <Button onPress={() => { dispatch(login({ username: 'hoangduy06104', password: 'string' })) }} title='Test redux' />
        </View>
    );
}