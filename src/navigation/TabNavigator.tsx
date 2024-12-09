import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { HomeScreen } from "../screens/home/HomeScreen";
import { UserScreen } from "../screens/user/UserScreen";
import { ScreenNamesEnum } from "./ScreenNamesEnum";

const Tab = createBottomTabNavigator();

export const TabNavigator = () => {
    return (
        <Tab.Navigator>
            <Tab.Screen name={ScreenNamesEnum.Home} component={HomeScreen} />
            <Tab.Screen name={ScreenNamesEnum.User} component={UserScreen} />
        </Tab.Navigator>
    );
}