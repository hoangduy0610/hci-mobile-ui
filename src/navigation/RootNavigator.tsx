import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { TabNavigator } from "./TabNavigator";
import { AboutUsScreen } from "../screens/about_us/AboutUs";
import { ScreenNamesEnum } from "./ScreenNamesEnum";

const Stack = createNativeStackNavigator();

export function RootNavigator() {
    return (
        <Stack.Navigator>
            <Stack.Screen
                name={ScreenNamesEnum.TabNavigator}
                component={TabNavigator}
                options={{ headerShown: false }}
            />
            <Stack.Screen name={ScreenNamesEnum.AboutUs} component={AboutUsScreen} />
        </Stack.Navigator>
    )
}