import React from 'react';
import { StyleSheet, Text, View, ShadowPropTypesIOS } from 'react-native';
import { colours } from '../constants/colours';

interface Props {
    children: number
}

export const NumberContainer = ({children}: Props) => (
    <View style={styles.container}>
        <Text style={styles.number}>{children}</Text>
    </View>
  );

const styles = StyleSheet.create({
  container: {
    borderWidth: 2,
    borderColor: colours.accent,
    padding: 10,
    borderRadius: 10,
    marginVertical: 10,
    alignItems: 'center',
    justifyContent: 'center'
  },
  number: {
    color: colours.accent,
    fontSize: 20,
    padding: 10
  }
});
