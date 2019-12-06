import React, {useState} from 'react'
import { StyleSheet, Text, View, Button, TouchableWithoutFeedback, Keyboard, Alert } from 'react-native';

import { Card } from '../components/Card'
import { Input } from '../components/Input'
import { colours } from '../constants/colours'
import { NumberContainer } from '../components/NumberContainer';
import { MainButton } from '../components/MainButton'

interface Props {
    onStartGame: (selectedNumber) => void
}

export const StartGameScreen = ({onStartGame}:Props) => { 
    const [enteredValue, setEnteredValue] = useState('')
    const [confirmed, setConfirmed] = useState(false)
    const [selectedNumber, setSelectedNumber] = useState()
    const numberInputHandler = inputText => {
        setEnteredValue(inputText.replace(/[^0-9]/g, ''))
    }

    const resetInputHandler = () => {
        setEnteredValue('')
    } 
    const confirmInputHandler = () => {
        const chosenNumber = parseInt(enteredValue)
        if (isNaN(chosenNumber) || chosenNumber < 0 || chosenNumber > 99) {
            Alert.alert('Invalid number', 'Number must be between 1 and 99', [{text: 'Ok', style: 'destructive', onPress: resetInputHandler}])
            return
        }
        setConfirmed(true)
        setSelectedNumber(chosenNumber)
        setEnteredValue('')
        Keyboard.dismiss()
    }

    const onStartGameHandler = () => {
        onStartGame(selectedNumber)
    }
    let confirmedOutput
    if (confirmed) {
        confirmedOutput = (<Card style={styles.summaryContainer}>
            <Text>You selected</Text>
            <NumberContainer>{selectedNumber}</NumberContainer>
            <MainButton onPress={onStartGameHandler}><Text>Start Game!</Text></MainButton>
        </Card>)
    }

    return (
        <TouchableWithoutFeedback onPress={() => { Keyboard.dismiss() }}>
            <View style={styles.screen}>
                <Text style={styles.title}>
                    Start a new Game!
                </Text>
                <Card style={styles.inputContainer}>
                    <Text>Select a number</Text>
                    <Input 
                            style={styles.input} 
                            blurOnSubmit 
                            autoCapitalize="none" 
                            autoCorrect={false} 
                            keyboardType="number-pad"
                            maxLength={2} 
                            onChangeText={numberInputHandler}
                            value={enteredValue}
                        />
                    <View style={styles.buttonContainer}>
                        <View style={styles.button}>
                            <Button title="Reset" color={colours.accent} onPress={resetInputHandler} />
                        </View>
                        <View style={styles.button}>
                            <Button title="Confirm" color={colours.primary} onPress={confirmInputHandler} />
                        </View>
                    </View>
                </Card>
                {confirmedOutput}
            </View>
    </TouchableWithoutFeedback>
    )
}
const styles = StyleSheet.create({
    screen: {
        flex: 1,
        padding: 10,
        alignItems: 'center',
    },
    title: {
        fontSize: 20,
        marginHorizontal: 10,
        fontFamily: 'open-sans-bold'
    },
    buttonContainer: {
        flexDirection: 'row',
        width: '100%',
        justifyContent: 'space-between',
        paddingHorizontal: 15
    },
    inputContainer: {
        width: 300,
        maxWidth: '80%',
        alignItems: 'center',
    },
    input: {
        width: 50,
        textAlign: 'center'
    },
    button: {
        width: 100
    },
    summaryContainer: {
        marginTop: 20,
        alignItems: 'center',
    }
})
