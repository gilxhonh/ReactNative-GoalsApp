import React from "react";
import {Text, View} from "react-native";
import {StyleSheet} from "react-native";

function GoalItem({itemData}) {
    return(
        <View style={styles.goalItem}>
            <Text style={styles.goalText}>{itemData.item.text}</Text>
        </View>
    )
}

export default GoalItem;

const  styles = StyleSheet.create({
    goalItem: {
        margin: 8,
        padding: 8,
        borderRadius: 6,
        backgroundColor: '#02987e',
    },
    goalText: {
        color: '#fff',
    }
});