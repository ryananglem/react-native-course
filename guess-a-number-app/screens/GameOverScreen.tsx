import React, { useState} from 'react';
import { StyleSheet, Text, View, Button, Image } from 'react-native';
import { colours } from '../constants/colours';

interface Props {
    numberOfRounds: number,
    userNumber: number
    onRestart: () => void
}

export const GameOverScreen = ({numberOfRounds, userNumber, onRestart}: Props) =>  {
 
  return (
    <View style={styles.container}>
        <Text>Game Over</Text>
        <View style={styles.imageContainer}>
          <Image 
              source={require('../assets/success.png')} 
              // source={{uri: 'https://image.shutterstock.com/image-vector/green-tree-cartoon-260nw-317936303.jpg'}}
              resizeMode="cover" 
              style={styles.image }/>
        </View>
        <View style={styles.text}>
          <Text>
            Your phone needed <Text style={styles.highlight}>{numberOfRounds}</Text>
            rounds to guess number 
            <Text style={styles.highlight}>{userNumber}</Text>
          </Text>
        </View>
        <Button title="New Game" onPress={onRestart} />
    </View>
  );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems:'center'
    },
    imageContainer: {
      width: 300,
      height: 300,
      borderRadius: 150,
      borderWidth: 3,
      borderColor: 'black',
      overflow: 'hidden',
      marginVertical: 30
    },
    image:  {
      width: '100%',
      height: '100%'
    },
    highlight: {
      color: colours.accent
    },
    text: {
      width: '80%'
    }
});