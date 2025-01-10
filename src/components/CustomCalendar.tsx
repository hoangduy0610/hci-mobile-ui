import { useState } from "react";
import { View, Text, StyleSheet, TouchableOpacity } from "react-native";

export const CustomCalendar = () => {
    const [selectedDate, setSelectedDate] = useState<number | null>(1);

    const handleSelectDate = (date: number) => {
        setSelectedDate(date);
    }

    const days = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];
    return (
        <View style={{ backgroundColor: "white", width: '100%' }}>
            <View style={{
                flexDirection: "row",
                justifyContent: "space-between",
                paddingHorizontal: 10,
                paddingVertical: 15,
                alignItems: 'center',
            }}>
                <Text style={{ fontWeight: 500, fontSize: 15, }}>Previous</Text>
                <Text style={{ fontWeight: 400, fontSize: 17, flex: 1, textAlign: 'center' }}>February 2026</Text>
                <Text style={{ fontWeight: 500, fontSize: 15, }}>    Next</Text>
            </View>

            <View style={{
                flexDirection: "row",
                justifyContent: 'space-between',
                alignItems: 'center',
                alignContent: 'center',
                borderTopWidth: 1,
                borderBottomWidth: 1,
                borderColor: '#896CFE',
            }}>
                {days.map((day) => (
                    <View style={[styles.weekDayStyle]} key={day}>
                        <Text style={{
                            color: '#896CFE',
                            fontWeight: 800,
                            fontSize: 14,
                            lineHeight: 14,
                        }}>{day}</Text>
                    </View>
                ))}
            </View>

            {/* 4 week */}
            {Array.from({ length: 4 }, (_, i) => i).map((week) => (
                <View style={{ flexDirection: "row", justifyContent: 'space-between', alignItems: 'center', alignContent: 'center' }}>
                    {Array.from({ length: 7 }, (_, i) => 1 + i + week * 7).map((date) => (
                        <TouchableOpacity style={[
                            styles.calendarDayStyle,
                            date === selectedDate ? styles.selectedCalendarDayStyle : {}
                        ]} key={date} onPress={() => handleSelectDate(date)}>
                            <Text style={[
                                styles.innerText,
                                date === selectedDate ? styles.selectedInnerText : {}
                            ]}>{date}</Text>
                        </TouchableOpacity>
                    ))}
                </View>
            ))}

            {/* Last week ( 3 days) */}
            <View style={{ flexDirection: "row", justifyContent: 'space-between', alignItems: 'center', alignContent: 'center' }}>
                {Array.from({ length: 3 }, (_, i) => i + 29).map((date) => (
                    <View style={[styles.calendarDayStyle]} key={date}>
                        <Text style={[styles.innerText]}>{date}</Text>
                    </View>
                ))}
                {Array.from({ length: 4 }, (_, i) => i + 31).map((date) => (
                    <Text style={[styles.calendarDayStyle]} key={date}></Text>
                ))}
            </View>
        </View>
    );
}

const styles = StyleSheet.create({
    innerText: {
        color: '#896CFE',
        fontWeight: 600,
        fontSize: 12,
        lineHeight: 12,
    },
    selectedInnerText: {
        color: 'black'
    },
    calendarDayStyle: {
        width: 40,
        height: 40,
        margin: 5,
        borderRadius: '50%',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: 'white',
        color: 'black',
    },
    selectedCalendarDayStyle: {
        backgroundColor: '#E2F163',
    },
    weekDayStyle: {
        width: 40,
        height: 40,
        marginHorizontal: 5,
        marginVertical: 5,
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: 'white',
        color: 'black',
    }
});