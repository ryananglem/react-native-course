import React, { useState} from 'react'
import { View, TextInput, Button, StyleSheet, Modal} from 'react-native'

interface Props {
    addGoal: (goal) => void 
    isVisible: boolean
    onCancel: () => void
}

export const GoalInput = ({ addGoal, isVisible, onCancel}:Props ) => { 
    
  const [enteredGoal, setEnteredGoal] = useState('')
  const goalInputHandler = (enteredText) => {
    setEnteredGoal(enteredText)
  }

  const addGoalHandler = () => {
      addGoal(enteredGoal)
      setEnteredGoal('')
  }
    
    return (
    <Modal visible={isVisible} animationType="slide">
        <View style={styles.inputContainer}>
            <TextInput
                placeholder="Course Goal"
                style={styles.input}
                onChangeText={goalInputHandler}
                value={enteredGoal}
            />
            <View style={styles.buttonContainer}>
               <View style={styles.button}><Button title="ADD" onPress={addGoalHandler} /></View>
               <View style={styles.button}><Button title="CANCEL" onPress={onCancel} color="red" /></View>
            </View>
        </View>
    </Modal>
)
}

const styles = StyleSheet.create({
  inputContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    paddingBottom: 3,
  },
  input: {
    borderColor: 'black',
    borderStyle: 'solid',
    borderWidth: 1,
    padding: 10,
    width: '80%'
  },
  buttonContainer: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    width: '60%'
  },
  button: {
    width: '40%'
  }
})