import React, { useState} from 'react';
import { StyleSheet, Text, View } from 'react-native';
import * as Font from 'expo-font'
import { AppLoading } from 'expo'

import { Header } from './components/Header'
import { StartGameScreen } from './screens/StartGameScreen'
import { GameScreen} from './screens/GameScreen'
import { GameOverScreen } from './screens/GameOverScreen'

const fetchFonts = () => {
  return Font.loadAsync({
    'open-sans': require('./assets/fonts/OpenSans-Regular.ttf'),
    'open-sans-bold': require('./assets/fonts/OpenSans-Bold.ttf')
  })
}

export default function App() {
  const [userNumber, setUserNumber] = useState()
  const [guessRounds, setGuessRounds] = useState()
  const [dataLoaded, setDataLoaded] = useState(false)

  if (!dataLoaded) {
    return <AppLoading 
            startAsync={fetchFonts} 
            onFinish={ () =>{ setDataLoaded(true)}} 
            onError={ (err) => { console.log(err) } }
        />
  }

  const configureNewGameHandler = () => {
    setGuessRounds(0)
    setUserNumber(null)
  }

  const startGameHandler = (selectedNumber) => {
    console.log('selectedNumber', selectedNumber)
      setUserNumber(selectedNumber)
      setGuessRounds(0)
  }

  const gameOverHandler = numberOfRounds => {
    setGuessRounds(numberOfRounds)
  }

  let content = <StartGameScreen onStartGame={startGameHandler} />
  if (userNumber && guessRounds <= 0) {
    content= <GameScreen userChoice={userNumber} onGameOver={gameOverHandler} />
  } else if (guessRounds > 0) {
    content = <GameOverScreen userNumber={userNumber} numberOfRounds={guessRounds} onRestart={configureNewGameHandler} />
  }

  return (
    <View style={styles.container}>
      <Header title="Guess a Number" />
      {content}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});
