import React, {useState} from "react";
import {Button, Image, Modal, StyleSheet, TextInput, View} from "react-native";

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

                <Image
                    source={require('../assets/images/goal.png')}
                    style={styles.image}
                />

                <TextInput
                    onChangeText={handeInputGoal}
                    style={styles.textInput}
                    placeholder='Enter Your Goal!'
                    value={input}
                />

                <View style={styles.buttonContainer}>
                    <View style={styles.button}>
                        <Button title='Cancel' onPress={onCancel} color={'#f31282'}/>
                    </View>

                    <View style={styles.button}>
                        <Button onPress={addGoalHandler} title='Add Goal' color={'#02987e'} disabled={buttonDisabled}/>
                    </View>
                </View>

            </View>
        </Modal>
    )
}

export default GoalInput;

const styles = StyleSheet.create({
    textInput: {
        padding: 12,
        width: '100%',
        color: '#120438',
        backgroundColor: '#d6fff8',
        borderColor: '#02987e',
        borderWidth: 1,
        borderRadius: 7,
    },
    inputContainer: {
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
        padding: 16,
        backgroundColor: '#311b6b',
    },
    buttonContainer: {
        flexDirection: "row",
        marginTop: 16,
    },
    button: {
        width: 100,
        marginHorizontal: 8,
    },
    image: {
        width: 100,
        height: 100,
        margin: 20,
    },
});
