import React from 'react';
import { Pressable, StyleSheet, Text } from 'react-native';

type ButtonProps = {
  title: string;
  onPress: () => void;
}

export const Button: React.FC<ButtonProps> = (props) => (
  <Pressable
    onPress={props.onPress}
    style={styles.Button}
  >
    <Text style={styles.ButtonTex}>{props.title}</Text>
  </Pressable>
)

const styles = StyleSheet.create({
  Button: {
    marginTop: 70,
    alignItems: 'center',
    justifyContent: 'center',
    paddingVertical: 12,
    paddingHorizontal: 32,
    borderRadius: 4,
    elevation: 3,
    backgroundColor: 'black',
  },
  ButtonTex: {
    fontSize: 16,
    lineHeight: 21,
    fontWeight: 'bold',
    letterSpacing: 0.25,
    color: 'white',
  },
})
