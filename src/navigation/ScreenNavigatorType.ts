import { NavigatorScreenParams } from "@react-navigation/native";
import { ScreenNamesEnum } from "./ScreenNamesEnum";

export type TabNavigatorParamList = {
    [ScreenNamesEnum.Home]: undefined;
    [ScreenNamesEnum.User]: undefined;
};

export type RootNavigatorParamList = {
    [ScreenNamesEnum.TabNavigator]: NavigatorScreenParams<TabNavigatorParamList>;
    [ScreenNamesEnum.AboutUs]: undefined;
};