import React from 'react'
import { View, StyleSheet, Text, TouchableOpacity } from 'react-native'

interface Props {
    id: string
    title: string
    onDelete: (id) => void
}

export const GoalItem = ( {id, title, onDelete} : Props) => (
<TouchableOpacity activeOpacity={0.8} onPress={() => onDelete(id)}>
    <View style={styles.listItem}><Text>{title}</Text></View>
</TouchableOpacity>)
    
const styles = StyleSheet.create({
    listItem: {
        padding: 10,
        marginVertical: 10,
        backgroundColor: 'grey',
        borderColor: 'black',
        borderWidth: 1
      }
    });