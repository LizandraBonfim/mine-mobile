import React from 'react'
import { View, StyleSheet, Text } from 'react-native'
import Field from './Field'

export default props => {
    const rows = props.board.map((row, r) => {
        const columns = row.map((field, c) => {
            return <Field
                key={c}
                {...field}
                onOpen={() => props.onOpenField(r, c)}
                onSelect={e => props.onSelectField(r, c)}
            />
        })
        return <View key={r} >{columns}</View>
    })
    return (
        <View style={styles.container}>
            {rows}
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flexDirection: 'row',
        backgroundColor: '#eee'
    }
})
