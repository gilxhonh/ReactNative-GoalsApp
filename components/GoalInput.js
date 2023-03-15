import React, {useState} from "react";
import {Button, StyleSheet, TextInput, View} from "react-native";

function GoalInput({onAddGoal}) {
    const [input, setInput] = useState("");
    const [active, setActive ] = useState(true)

    let handeInputGoal = (enteredText) => {
        if(enteredText.length !== 0) {
            setActive(false)
        }
        if(enteredText.length === 0){
            setActive(true);
        }

        setInput(enteredText);
    };

    let addGoalHandler = () => {
        onAddGoal(input);
        setInput('');
    };

    return(
        <View style={styles.inputContainer}>
            <TextInput
                onChangeText={handeInputGoal}
                style={styles.textInput}
                placeholder='Your course goal!'
                value={input}
            />
            <Button onPress={addGoalHandler} title='Add Goal' color={'#02987e'} disabled={active}/>
        </View>
    )
}

export default GoalInput;

const styles = StyleSheet.create({
    textInput: {
        borderWidth: 1,
        borderColor: '#02987e',
        width: '80%',
        marginRight: 16,
        padding: 8,
    },
    inputContainer: {
        flex: 1,
        flexDirection: "row",
        justifyContent: "space-evenly",
        alignItems: "center",
        marginBottom: 24,
        borderBottomWidth: 1,
        borderBottomColor: '#02987e',
    },
});
