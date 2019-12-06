import React from 'react';
import { StyleSheet, View } from 'react-native';

interface Props {
    children?: any,
    style?: any
}

export const Card = ({ children, style }: Props) => (
    <View style={{...styles.card, ...style}}>
     {children}
    </View>
  );


const styles = StyleSheet.create({
  card: {
    shadowColor: 'black',
    shadowOffset: {
        width: 0,
        height: 2
    },
    shadowRadius: 6,
    shadowOpacity: 0.26,
    elevation: 5,
    backgroundColor: 'white',
    padding: 20,
    borderRadius: 5
},
});
