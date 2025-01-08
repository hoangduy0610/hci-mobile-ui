import { NavigatorScreenParams } from "@react-navigation/native";
import { ScreenNamesEnum } from "./ScreenNamesEnum";

export type TabNavigatorParamList = {
    [ScreenNamesEnum.Home]: undefined;
    [ScreenNamesEnum.User]: undefined;
};

export type RootNavigatorParamList = {
    [ScreenNamesEnum.TabNavigator]: NavigatorScreenParams<TabNavigatorParamList>;
    [ScreenNamesEnum.AboutUs]: undefined;
    [ScreenNamesEnum.Introduce]: undefined;
    [ScreenNamesEnum.Introduce2]: undefined;
    [ScreenNamesEnum.Introduce3]: undefined;
    [ScreenNamesEnum.Introduce4]: undefined;
    [ScreenNamesEnum.Introduce5]: undefined;
};