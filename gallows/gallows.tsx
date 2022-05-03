import React, { useState } from 'react';
import { View, Text, Modal, Pressable, Alert, StyleSheet, TouchableOpacity, TextInput } from 'react-native';
import { Button } from '../common/button';

export const Gallows: React.FC = () => {
  const [modalVisible, setModalVisible] = useState(false);

  return (
      <View>
        <Button onPress={() => {
          setModalVisible(true)
        }} title={'Type word!'}/>
        <View
        >
          <Modal
            animationType={'slide'}
            transparent={true}
            visible={modalVisible}
          >
            <TouchableOpacity style={styles.Gallows__ModalContainer} onPress={() => { setModalVisible(false)}}>
              <TouchableOpacity onPress={() => console.log('do nothing')} activeOpacity={1} >
              <View style={styles.Gallows__ModalView}>
                <Text style={styles.Gallows__ModalText}>Hello World!</Text>
                <TextInput style={styles.Gallows__Input}/>
                <Button title={'Hide'} onPress={() => {setModalVisible(!modalVisible)}}/>
              </View>
              </TouchableOpacity>
            </TouchableOpacity>
          </Modal>
          <Text>It will be gallows game here</Text>
        </View>
      </View>
  )
}

const styles = StyleSheet.create({
  Gallows__ModalView: {
    backgroundColor: 'white',
    borderRadius: 20,
    padding: 35,
    alignItems: 'center',
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2
    },
    shadowOpacity: 0.25,
    shadowRadius: 4,
    elevation: 5
  },
  Gallows__ModalText: {
    marginBottom: 15,
    textAlign: 'center'
  },
  Gallows__ModalContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  Gallows__Input: {
    width: '100%',
    height: 40,
    borderWidth: 1,
  }
});
