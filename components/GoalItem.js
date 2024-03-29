import React from "react";
import {Text, View, Pressable} from "react-native";
import {StyleSheet} from "react-native";

function GoalItem({text, onDeleteItem, id}) {
    return(
        <View style={styles.goalItem}>
            <Pressable
                android_ripple={{color: '#1f0000'}}
                onPress={onDeleteItem.bind(this, id)}
                style={({pressed}) => pressed && styles.pressedItem}
            >
                <Text style={styles.goalText}>{text}</Text>
            </Pressable>
        </View>
    )
}

export default GoalItem ;

const  styles = StyleSheet.create({
    goalItem: {
        margin: 8,
        borderRadius: 6,
        backgroundColor: '#02987e',
    },
    pressedItem: {
        opacity: 0.5,
    },
    goalText: {
        color: '#fff',
        padding: 8,
    }
});