import React from 'react'
import { View, StyleSheet, Text, TouchableOpacity } from 'react-native'
import Flag from './Flag'

export default props => {
    return (
        <View style={styles.container}>
            <View style={styles.flagContainer}>
                <TouchableOpacity onPress={props.onFlagPress} style={styles.flagButton} >
                    <Flag bigger />
                </TouchableOpacity>

                <Text style={styles.flagsLeft}>
                    = {props.flagLeft}
                </Text>

                <TouchableOpacity onPress={props.onNewGame} style={styles.button}>
                    <Text style={styles.buttonLabel}>Novo Jogo</Text>
                </TouchableOpacity>
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        flexDirection: 'row',
        backgroundColor: '#eee',
        alignItems: 'center',
        justifyContent: 'space-around',
        paddingTop: 20,
        paddingHorizontal: 20

    },
    flagContainer: {
        flexDirection: 'row',

    },
    flagsButton: {
        paddingTop: 20,
        minWidth: 30
    },
    flagsLeft: {
        fontSize: 30,
        fontWeight: 'bold',
        paddingTop: 5,
        marginLeft: 20
    },
    button: {
        backgroundColor: '#999',
        padding: 5
    },
    buttonLabel: {
        fontSize: 20,
        fontWeight: 'bold',
        color: '#DDD'
    }
})