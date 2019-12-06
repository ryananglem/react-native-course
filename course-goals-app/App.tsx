import React, {useState} from 'react';
import { StyleSheet, Button, View, FlatList } from 'react-native';

import {GoalItem} from './components/GoalItem'
import { GoalInput } from './components/GoalInput';
 
export default function App() {
  const [courseGoals, setCourseGoals] = useState([])
  const [showAdd, setShowAdd] = useState(false)

  const addGoalHandler = goal => {
    const id = Math.random().toString()
    setCourseGoals(currentGoals => [...currentGoals, { id, value: goal} ])
    setShowAdd(false)
  }
  const removeGoalHandler = goalId => {
    setCourseGoals(currentGoals => {
      return currentGoals.filter(goal => goalId !== goal.id)
    })
  }

  const cancelAddingGoal = () => setShowAdd(false)

  return (
    <View style={styles.screen}>
      <Button title="Add new Goal" onPress={() => setShowAdd(true)} />
      <GoalInput 
            addGoal={addGoalHandler} 
            isVisible={showAdd} 
            onCancel={cancelAddingGoal} />
      <FlatList keyExtractor={(item, index) => item.id} data={courseGoals} renderItem={itemData =>  (
        <GoalItem 
            id={itemData.item.id} 
            onDelete={removeGoalHandler} 
            title={itemData.item.value} /> 
      )}
       />
     
    </View>
  );
}

const styles = StyleSheet.create({
  screen: {
    padding: 50,
  },

});
