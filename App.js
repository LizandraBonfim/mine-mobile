import React, { Component } from 'react';
import {
  StyleSheet,
  View,
  Text,
} from 'react-native';

import {
  Colors,
} from 'react-native/Libraries/NewAppScreen';
import params from './src/params';
import Field from './src/components/Field';
import MineField from './src/components/MineField';
import { createMinedBoard } from './src/functions'

export default class App extends Component {

  constructor(props) {
    super(props)
    this.state = this.createState()
  }

  minesAmount = () => {
    const cols = params.getColumnsAmount()
    const rows = params.getRowsAmount()

    return Math.ceil(cols * rows * params.difficultLevel)
  }

  createState = () => {
    const cols = params.getColumnsAmount()
    const rows = params.getRowsAmount()

    return {
      board: createMinedBoard((rows, cols), this.minesAmount())
    }
  }

  render() {

    return (
      <View style={styles.container} >
        {/* <Text>Texto aqui</Text>
        <Text >{params.getColumnsAmount()} / {params.getColumnsAmount()}</Text> */}
        <View style={styles.board}>
          <MineField board={this.state.board} />
        </View>

      </View>
    )
  }
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'flex-end',
  },

  board: {
    alignItems: 'center',
    backgroundColor: '#aaa'
  },
});