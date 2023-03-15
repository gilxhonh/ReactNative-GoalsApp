import {StyleSheet, Text, View, Button, TextInput, FlatList} from 'react-native';
import {useState} from "react";

export default function App() {
    const [input, setInput] = useState("");
    const [goals, setGoals] = useState([]);

    let handeInputGoal = (enteredText) => {
        setInput(enteredText);
    }

    let addGoal = () => {
        console.log(input);
        setGoals(currentCourseGoals => [
            ...currentCourseGoals,
            {text: input, id: Math.random().toString()},
        ]);
    }

    return (
        <View style={styles.appContainer}>
            <View style={styles.inputContainer}>
                <TextInput
                    onChangeText={handeInputGoal}
                    style={styles.textInput}
                    placeholder='Your course goal!'
                    value={input}
                />
                <Button onPress={addGoal} title='Add Goal'/>
            </View>

            <View style={styles.goalsContainer}>
                <FlatList data={goals} renderItem={(itemData) => {
                    return  (
                        <View style={styles.goalItem}>
                            <Text style={styles.goalText}>{itemData.item.text}</Text>
                        </View>
                    )
                }}
                keyExtractor={(item) => {
                    return item.id;
                }}
                alwaysBounceVertical={false}

                />
            </View>
        </View>
    );
}

const styles = StyleSheet.create({
    appContainer: {
        flex: 1,
        padding: 50,
        paddingHorizontal: 16,
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
    textInput: {
        borderWidth: 1,
        borderColor: '#02987e',
        width: '80%',
        marginRight: 16,
        padding: 8,
    },
    goalsContainer: {
        flex: 4,
    },
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
