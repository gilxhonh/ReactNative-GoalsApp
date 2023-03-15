import {StyleSheet, View, Button, TextInput, FlatList} from 'react-native';
import {useState} from "react";
import GoalItem from './components/GoalItem';
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
                <FlatList
                    data={goals}
                    renderItem={(itemData) => {
                        return <GoalItem itemData={itemData}/>
                    } }
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
});
