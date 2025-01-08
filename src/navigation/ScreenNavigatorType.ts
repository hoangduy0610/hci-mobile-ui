import { NavigatorScreenParams } from "@react-navigation/native";
import { ScreenNamesEnum } from "./ScreenNamesEnum";

export type TabNavigatorParamList = {
    [ScreenNamesEnum.Home]: undefined;
    [ScreenNamesEnum.Workout]: undefined;
    [ScreenNamesEnum.Nutrition]: undefined;
    [ScreenNamesEnum.Progress]: undefined;
};

export type RootNavigatorParamList = {
    [ScreenNamesEnum.TabNavigator]: NavigatorScreenParams<TabNavigatorParamList>;
    [ScreenNamesEnum.Introduce]: undefined;
    [ScreenNamesEnum.Introduce2]: undefined;
    [ScreenNamesEnum.Introduce3]: undefined;
    [ScreenNamesEnum.Introduce4]: undefined;
    [ScreenNamesEnum.Introduce5]: undefined;
    [ScreenNamesEnum.User]: undefined;
    [ScreenNamesEnum.EditUser]: undefined;
    [ScreenNamesEnum.Setting]: undefined;
    [ScreenNamesEnum.NotificationSetting]: undefined;
    [ScreenNamesEnum.Notification]: undefined;
    [ScreenNamesEnum.Introduce]: undefined;
    [ScreenNamesEnum.Introduce2]: undefined;
    [ScreenNamesEnum.Introduce3]: undefined;
    [ScreenNamesEnum.Introduce4]: undefined;
    [ScreenNamesEnum.Introduce5]: undefined;
    [ScreenNamesEnum.Search]: undefined;
    [ScreenNamesEnum.WorkoutDetail]: undefined;
    [ScreenNamesEnum.WorkoutVideo]: undefined;
    [ScreenNamesEnum.Routine]: undefined;
    [ScreenNamesEnum.CreateRoutine]: undefined;
    [ScreenNamesEnum.CreateNutrition]: undefined;
};