import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { HomeScreen } from "../screens/home/HomeScreen";
import { WorkoutScreen } from "../screens/workout/WorkoutScreen";
import { ScreenNamesEnum } from "./ScreenNamesEnum";
import { MaterialCommunityIcons } from '@expo/vector-icons';
import FontAwesome5 from '@expo/vector-icons/FontAwesome5';

const Tab = createBottomTabNavigator();

export const TabNavigator = () => {
    return (
        <Tab.Navigator
            screenOptions={({ route }) => ({
                headerShown: false,
                tabBarStyle: {
                    backgroundColor: '#B3A0FF',
                },
                tabBarActiveTintColor: 'white',
                tabBarInactiveTintColor: '#232323',
            })}
        >
            <Tab.Screen
                name={ScreenNamesEnum.Home}
                component={HomeScreen}
                options={{
                    tabBarIcon: ({ color }) => (
                        <MaterialCommunityIcons name="home" color={color} size={28} />
                    ),
                }}
            />
            <Tab.Screen
                name={ScreenNamesEnum.Workout}
                component={WorkoutScreen}
                options={{
                    tabBarIcon: ({ color }) => (
                        <FontAwesome5 name="walking" size={28} color={color} />
                    ),
                }}
            />
            <Tab.Screen
                name={ScreenNamesEnum.Nutrition}
                component={HomeScreen}
                options={{
                    tabBarIcon: ({ color }) => (
                        <MaterialCommunityIcons name="food-apple" size={28} color={color} />
                    ),
                }}
            />
            <Tab.Screen
                name={ScreenNamesEnum.Progress}
                component={WorkoutScreen}
                options={{
                    tabBarIcon: ({ color }) => (
                        <MaterialCommunityIcons name="progress-check" size={28} color={color} />
                    ),
                }}
            />
        </Tab.Navigator>
    );
}