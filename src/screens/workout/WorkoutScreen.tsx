import { View, Text, ScrollView } from "react-native";

export const WorkoutScreen = () => {
    return (
        <ScrollView
            contentContainerStyle={{ flexGrow: 1 }}
            keyboardShouldPersistTaps='handled'
        >
            <View
                style={{
                    flex: 1,
                    alignItems: 'flex-start',
                    justifyContent: 'flex-start',
                    backgroundColor: "#232323"
                }}>
                <Text style={{
                    color: 'white',
                    fontWeight: 700,
                    fontSize: 25,
                    lineHeight: 37.5,
                    // padding: 32,
                    textAlign: 'center',
                    alignSelf: 'center',
                }}>Workout Screen</Text>
            </View>
        </ScrollView>
    );
}