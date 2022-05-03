import React, { useEffect, useState } from 'react';
import { Pressable, StyleSheet, View, Text } from 'react-native';
import { Button } from '../common/button';
import { Square } from './square';
import { checkWinner } from './utils';

export type TicTacToe = null | 'X' | '0'

export const Board: React.FC = () => {
  const [winner, setWinner] = useState<TicTacToe>(null)
  const [winnerString, setWinnerString] = useState<string>('')
  const [playerFirstMove, setPlayerFirstMove] = useState<boolean>(true)
  const [state, setState] = useState<Array<TicTacToe>>([
    null, null, null,
    null, null, null,
    null, null, null,
  ])

  const setValue = (value: TicTacToe, elementIndex: number) => {
    if (state[elementIndex] || winner) return;
    setState(state.map((field, index) => index === elementIndex ? value : field))
    setPlayerFirstMove(!playerFirstMove)
  }

  const resetValues = () => {
    setState(state.map((field) => null))
    setPlayerFirstMove(true)
  }

  useEffect(() => {
    setWinner(checkWinner(state).result)
    setWinnerString(checkWinner(state).winnerString)
  }, [state])
  return (
    <>
      <Text style={styles.Board__Title}>{
        winner
          ? `Player ${playerFirstMove ? '0' : 'X'} win`
          : `Player ${playerFirstMove ? 'X' : '0'} moves`}
      </Text>
      <View style={styles.Board}>
        {state.map((field, index) => (
          <Square
            playerFirstMoves={playerFirstMove}
            key={index}
            index={index}
            value={field}
            onSetValue={setValue}
          />
        ))}
        {winnerString === 'Rows 0'
          && <View style={{ ...styles.Board__StrikeThroughLine__Top, ...styles.Board__StrikeThroughLine }}/>}
        {winnerString === 'Rows 1' &&
          <View style={{ ...styles.Board__StrikeThroughLine__MiddleRow, ...styles.Board__StrikeThroughLine }}/>}
        {winnerString === 'Rows 2' &&
          <View style={{ ...styles.Board__StrikeThroughLine__Bottom, ...styles.Board__StrikeThroughLine }}/>}
        {winnerString === 'Columns 0' &&
          <View style={{ ...styles.Board__StrikeThroughLine__Left, ...styles.Board__StrikeThroughLine }}/>}
        {winnerString === 'Columns 1' &&
          <View style={{ ...styles.Board__StrikeThroughLine__MiddleColumn, ...styles.Board__StrikeThroughLine }}/>}
        {winnerString === 'Columns 2' &&
          <View style={{ ...styles.Board__StrikeThroughLine__Right, ...styles.Board__StrikeThroughLine }}/>}
        {winnerString === 'Diagonals 0' &&
          <View style={{ ...styles.Board__StrikeThroughLine__DiagonalRight, ...styles.Board__StrikeThroughLine }}/>}
        {winnerString === 'Diagonals 1' &&
          <View style={{ ...styles.Board__StrikeThroughLine__DiagonalLeft, ...styles.Board__StrikeThroughLine }}/>}
      </View>
      <Button title={'Play again!'} onPress={resetValues}/>
    </>
  )
}

const styles = StyleSheet.create({
  Board: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    width: 192,
    alignItems: 'center',
    justifyContent: 'center',
    position: 'relative',
  },
  Board__Title: {
    marginBottom: 50,
    fontSize: 16,
  },
  Board__StrikeThroughLine: {
    borderWidth: 1,
    borderColor: '#999',
  },
  Board__StrikeThroughLine__Top: {
    position: 'absolute',
    top: 32,
    left: 0,
    right: 0
  },
  Board__StrikeThroughLine__MiddleRow: {
    position: 'absolute',
    top: 96,
    left: 0,
    right: 0
  },
  Board__StrikeThroughLine__Bottom: {
    position: 'absolute',
    left: 0,
    right: 0,
    bottom: 32,
  },
  Board__StrikeThroughLine__Left: {
    position: 'absolute',
    left: 32,
    top: 0,
    bottom: 0,
  },
  Board__StrikeThroughLine__MiddleColumn: {
    position: 'absolute',
    left: 96,
    top: 0,
    bottom: 0,
  },
  Board__StrikeThroughLine__Right: {
    position: 'absolute',
    right: 32,
    top: 0,
    bottom: 0,
  },
  Board__StrikeThroughLine__DiagonalRight: {
    position: 'absolute',
    transform: [{skewY: '-45deg'}],
    width: '100%',
  },
  Board__StrikeThroughLine__DiagonalLeft: {
    position: 'absolute',
    transform: [{skewY: '45deg'}],
    width: '100%',
  },
})
