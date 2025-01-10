import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { TabNavigator } from "./TabNavigator";
import { ScreenNamesEnum } from "./ScreenNamesEnum";
import { Introduce } from "../screens/introduce/Introduce";
import { Introduce2 } from "../screens/introduce/Introduce2";
import { Introduce3 } from "../screens/introduce/Introduce3";
import { Introduce4 } from "../screens/introduce/Introduce4";
import { Introduce5 } from "../screens/introduce/Introduce5";
import { ProfileScreen } from "../screens/home/ProfileScreen";
import { NotificationScreen } from "../screens/home/NotificationScreen";

const Stack = createNativeStackNavigator();

export function RootNavigator() {
    return (
        <Stack.Navigator>
            <Stack.Screen
                name={ScreenNamesEnum.Introduce}
                component={Introduce}
                options={{ headerShown: false }}
            />
            <Stack.Screen
                name={ScreenNamesEnum.Introduce2}
                component={Introduce2}
                options={{ headerShown: false }}
            />
            <Stack.Screen
                name={ScreenNamesEnum.Introduce3}
                component={Introduce3}
                options={{ headerShown: false }}
            />
            <Stack.Screen
                name={ScreenNamesEnum.Introduce4}
                component={Introduce4}
                options={{ headerShown: false }}
            />
            <Stack.Screen
                name={ScreenNamesEnum.Introduce5}
                component={Introduce5}
                options={{ headerShown: false }}
            />
            <Stack.Screen
                name={ScreenNamesEnum.User}
                component={ProfileScreen}
                options={{ headerShown: false }}
            />
            <Stack.Screen
                name={ScreenNamesEnum.Notification}
                component={NotificationScreen}
                options={{ headerShown: false }}
            />
            <Stack.Screen
                name={ScreenNamesEnum.TabNavigator}
                component={TabNavigator}
                options={{ headerShown: false }}
            />
        </Stack.Navigator>
    )
}