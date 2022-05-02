import React from 'react';
import { StyleSheet, View, Text, TouchableOpacity } from 'react-native';
import { TicTacToe } from './board';

type SquareProps = {
  playerFirstMoves: boolean;
  value: TicTacToe;
  index: number;
  onSetValue: (value: TicTacToe, inde: number) => void;
}

export const Square: React.FC<SquareProps> = (props) => {
  return (
    <TouchableOpacity onPress={() => {
      const currentValue: TicTacToe = props.playerFirstMoves ? 'X' : '0';
      props.onSetValue(currentValue, props.index)
    }}>
      <View style={styles.Square}>
        <Text style={styles.Square__Title}>{props.value && String(props.value)}</Text>
      </View>
    </TouchableOpacity>
  )
}

const styles = StyleSheet.create({
  Square: {
    backgroundColor: '#fff',
    borderWidth: 1,
    borderColor: '#999',
    height: 64,
    alignItems: 'center',
    justifyContent: 'center',
    width: 64,
  },
  Square__Title: {
    fontSize: 25,
    color: '#000',
  }
})
