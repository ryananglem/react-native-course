import React from 'react';
import { StyleSheet, View, Text, TouchableOpacity } from 'react-native';

import { colours } from '../constants/colours';

interface Props
 {
    onPress: () => void
    children: any
}

export const MainButton = ({ onPress, children }: Props) => (
<TouchableOpacity activeOpacity={0.6} onPress={onPress}>
    <View style={styles.buttonContainer}>
        <Text style={styles.buttonText}>
            {children}
        </Text>
    </View>
</TouchableOpacity>);

const styles = StyleSheet.create({
  buttonContainer: {
    backgroundColor: colours.primary,
    paddingVertical: 12,
    paddingHorizontal: 30,
    borderRadius: 25
  },
  buttonText: {
    color: 'white',
    fontFamily: 'open-sans'
  }
});
