import {useState} from "react";
import {StyleSheet, View, FlatList, Button, Image} from 'react-native';
import {StatusBar} from "expo-status-bar";

import GoalItem from './components/GoalItem';
import GoalInput from './components/GoalInput';

export default function App() {
    const [modalIsVisible, setModalIsVisible] = useState(false)
    const [goals, setGoals] = useState([]);

    const startAddGoalHandler = () => {
        setModalIsVisible(true);
    }
    const endAddGoalHandler = () => {
        setModalIsVisible(false);
    }

    const addGoalHandler = (input) => {
        setGoals(currentCourseGoals => [
            ...currentCourseGoals,
            {text: input, id: Math.random().toString()},
        ]);
        endAddGoalHandler();
    }

    const deleteGoalHandler = (id) => {
        setGoals(currentCourseGoals => {
            return currentCourseGoals.filter((goal) => goal.id !== id);
        })
    }

    return (
        <>
            <StatusBar style='light' />
            <View style={styles.appContainer}>
                <Image source={require('./assets/images/arrows.png')} style={styles.image}/>

                <View style={styles.buttonContainer}>
                    <Button
                        title='Add New Goal'
                        color='#f31282'
                        onPress={startAddGoalHandler}
                    />
                </View>

                <GoalInput visible={modalIsVisible} onAddGoal={addGoalHandler} onCancel={endAddGoalHandler}/>

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
        </>
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
        backgroundColor: 'rgba(255, 255, 255, .15)',
        borderRadius: 10,
        padding: 10,
    },
    buttonContainer: {
        marginTop: 15,
        marginBottom: 30,
        paddingHorizontal: 60,
    },
    image: {
        position: "absolute",
        top: '10%',
        width: 400,
        height: '90%',
    },
});
