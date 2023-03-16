import React, {useState} from "react";
import {Button, Modal, StyleSheet, TextInput, View} from "react-native";

function GoalInput({onAddGoal, visible, onCancel}) {
    const [input, setInput] = useState("");
    const [buttonDisabled, setButtonDisabled ] = useState(true)

    const handeInputGoal = (enteredText) => {
        if(enteredText.length !== 0) {
            setButtonDisabled(false)
        }
        if(enteredText.length === 0){
            setButtonDisabled(true);
        }

        setInput(enteredText);
    };

    const addGoalHandler = () => {
        onAddGoal(input);
        setInput('');
        setButtonDisabled(true)
    };

    return(
        <Modal visible={visible} animationType='slide'>
            <View style={styles.inputContainer}>
                <TextInput
                    onChangeText={handeInputGoal}
                    style={styles.textInput}
                    placeholder='Your course goal!'
                    value={input}
                />
                <View style={styles.buttonContainer}>
                    <View style={styles.button}>
                        <Button onPress={addGoalHandler} title='Add Goal' color={'#02987e'} disabled={buttonDisabled}/>
                    </View>

                    <View style={styles.button}>
                        <Button title='Cancel' onPress={onCancel}/>
                    </View>
                </View>
            </View>
        </Modal>
    )
}

export default GoalInput;

const styles = StyleSheet.create({
    textInput: {
        borderWidth: 1,
        borderColor: '#02987e',
        width: '100%',
        padding: 8,
    },
    inputContainer: {
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
        marginBottom: 24,
        borderBottomWidth: 1,
        borderBottomColor: '#02987e',
        padding: 16,
    },
    buttonContainer: {
        flexDirection: "row",
        marginTop: 16,
    },
    button: {
        width: 100,
        marginHorizontal: 8,
    },
});
