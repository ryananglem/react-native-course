import React from 'react';
import { StyleSheet, TextInput } from 'react-native';

interface Props {
    style?: any
}

export const Input = (props, { style }: Props) => (
<TextInput {...props} style={{ ...styles.input, ...style}} />
    );

const styles = StyleSheet.create({
  input: {
    height: 30,
    borderBottomColor: 'grey',
    borderBottomWidth: 1,
    marginVertical: 10
  },
});
