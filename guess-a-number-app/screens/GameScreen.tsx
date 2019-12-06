import React, {useState, useRef, useEffect} from 'react';
import { StyleSheet, Text, View, Button, Alert } from 'react-native';
import { colours } from '../constants/colours';

import {NumberContainer} from '../components/NumberContainer'
import { Card } from '../components/Card';
interface Props {
    userChoice: number,
    onGameOver: (numberOfRounds) => void
}

const generateRandomBetween = (min, max, exclude) => {
    min = Math.ceil(min)
    max = Math.floor(max)
    const rnd = Math.floor(Math.random() * (max-min) + min)
    if (rnd === exclude) {
        return generateRandomBetween(min, max, exclude)
    } 
    return rnd
} 

export const GameScreen = ({userChoice, onGameOver}: Props) => {
    const [currentGuess, setCurrentGuess] = useState(generateRandomBetween(1, 99, userChoice))
    const [rounds, setRounds] = useState(0)
    const currentLow = useRef(1)
    const currentHigh = useRef(100)

    useEffect(() => {
        if (currentGuess === userChoice) {
                onGameOver(rounds)
        }
    }, [currentGuess, onGameOver, userChoice])

    const nextGuessHandler = direction => {
        if ((direction==='lower' && currentGuess < userChoice) || (direction==='higher' && currentGuess > userChoice)) {
            Alert.alert('Don\'t lie!', 'You know that this is wrong', [{text: 'Sorry', style: 'cancel'}])
            return
        }
        if (direction==='lower') {
            currentHigh.current = currentGuess 
        } else {
            currentLow.current = currentGuess
        }
        const nextNumber = generateRandomBetween(currentLow.current, currentHigh.current, currentGuess)
        setCurrentGuess(nextNumber)
        setRounds(curRounds => curRounds +1)
    }

    return (
    <View style={styles.container}>
        <Text>Opponent's guess</Text>
        <NumberContainer>{currentGuess}</NumberContainer>
        <Card style={styles.buttonContainer}>
            <Button title="Lower" onPress={() => nextGuessHandler('lower')} />
            <Button title="Higher" onPress={() => nextGuessHandler('higher')}  />
        </Card>
    </View>
  );
}
const styles = StyleSheet.create({
    container: {
        flex: 1,
        padding: 10,
        alignItems: 'center',
        
    },
    buttonContainer: {
        flexDirection: 'row',
        justifyContent: 'space-around',
        marginTop: 20,
        width: 300,
        maxWidth: '80%'
    }
})