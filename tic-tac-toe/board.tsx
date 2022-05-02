import React, { useEffect, useState } from 'react';
import { Pressable, StyleSheet, View, Text } from 'react-native';
import { Square } from './square';
import { checkWinner } from './utils';

export type TicTacToe = null | 'X' | '0'

export const Board: React.FC = () => {
  const [winner, setWinner] = useState<TicTacToe>(null)
  const [playerFirstMove, setPlayerFirstMove] = useState<boolean>(true)
  const [state, setState] = useState<Array<TicTacToe>>([
    null, null, null,
    null, null, null,
    null, null, null,
  ])

  const setValue = (value: TicTacToe, elementIndex: number) => {
    setState(state.map((field, index) => index === elementIndex ? value : field))
    setPlayerFirstMove(!playerFirstMove)
  }

  const resetValues = () => {
    setState(state.map((field) => null))
    setPlayerFirstMove(true)
  }

  useEffect(() => {
    setWinner(checkWinner(state))
  }, [state])
  return (
    <>
      <Text style={styles.Board__Title}>{
        winner
          ? `Player ${playerFirstMove ? 2 : 1} win`
          : `Player ${playerFirstMove ? 1 : 2} moves`}
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
        <Pressable
          onPress={resetValues}
          style={styles.Board__Button}
        >
          <Text style={styles.Board__ButtonTex}>Play again!</Text>
        </Pressable>
      </View>
    </>
  )
}

const styles = StyleSheet.create({
  Board: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    width: 192,
    alignItems: 'center',
    justifyContent: 'center'
  },
  Board__Title: {
    marginBottom: 50,
    fontSize: 16,
  },
  Board__Button: {
    marginTop: 100,
    alignItems: 'center',
    justifyContent: 'center',
    paddingVertical: 12,
    paddingHorizontal: 32,
    borderRadius: 4,
    elevation: 3,
    backgroundColor: 'black',
  },
  Board__ButtonTex: {
    fontSize: 16,
    lineHeight: 21,
    fontWeight: 'bold',
    letterSpacing: 0.25,
    color: 'white',
  },
})
