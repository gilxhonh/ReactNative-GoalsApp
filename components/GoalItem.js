import React from "react";
import {Text, View, Pressable} from "react-native";
import {StyleSheet} from "react-native";

function GoalItem({text, onDeleteItem, id}) {
    return(
        <Pressable onPress={onDeleteItem.bind(this, id)}>
            <View style={styles.goalItem}>
                <Text style={styles.goalText}>{text}</Text>
            </View>
        </Pressable>
    )
}

export default GoalItem ;

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