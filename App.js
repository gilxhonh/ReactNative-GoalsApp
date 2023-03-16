import {StyleSheet, View, FlatList, Button} from 'react-native';
import {useState} from "react";
import GoalItem from './components/GoalItem';
import GoalInput from './components/GoalInput';
export default function App() {
    const [modalIsVisible, setModalIsVisible] = useState(false)
    const [goals, setGoals] = useState([]);

    let startAddGoalHandler = () => {
        setModalIsVisible(true)
    }

    let addGoalHandler = (input) => {
        console.log(input);
        setGoals(currentCourseGoals => [
            ...currentCourseGoals,
            {text: input, id: Math.random().toString()},
        ]);
    }

    let deleteGoalHandler = (id) => {
        setGoals(currentCourseGoals => {
            return currentCourseGoals.filter((goal) => goal.id !== id);
        })
    }

    return (
        <View style={styles.appContainer}>

            <Button
                title='Add New Goal'
                color='#02987e'
                onPress={startAddGoalHandler}
            />
            <GoalInput visible={modalIsVisible} onAddGoal={addGoalHandler}/>

            <View style={styles.goalsContainer}>
                <FlatList
                    data={goals}
                    renderItem={(itemData) => {
                        return (
                            <GoalItem
                                text={itemData.item.text}
                                onDeleteItem={deleteGoalHandler}
                                id={itemData.item.id}
                            />
                        )
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
