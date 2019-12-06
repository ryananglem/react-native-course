import React from 'react'
import { StyleSheet, Text, View } from 'react-native';
import { colours } from '../constants/colours'

interface Props {
    title: string
}

export const Header = ({title}: Props) => (
    <View style={styles.header}>
        <Text style={styles.headerTitle}>{title}</Text>
    </View>

)

const styles =StyleSheet.create( {
    header: {
        width: '100%',
        height: 90,
        paddingTop: 36,
        backgroundColor: colours.primary,
        alignItems: 'center',
        justifyContent: 'center'

    },
    headerTitle: {
        color: 'black',
        fontSize: 18,
        fontFamily: 'open-sans-bold'
    }
})