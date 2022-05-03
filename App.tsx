import { StatusBar } from 'expo-status-bar';
import { StyleSheet, View } from 'react-native';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import { Gallows } from './gallows/gallows';

import useCachedResources from './hooks/useCachedResources';
import useColorScheme from './hooks/useColorScheme';
import { Board } from './tic-tac-toe/board';

export default function App() {
  const isLoadingComplete = useCachedResources();
  const colorScheme = useColorScheme();

  if (!isLoadingComplete) {
    return null;
  } else {
    return (
      <SafeAreaProvider>
        <View style={styles.container}>
          {/*<Navigation colorScheme={colorScheme} />*/}
          {/*<Board/>*/}
          <Gallows/>
          <StatusBar/>
        </View>
      </SafeAreaProvider>
    );
  }
}
const styles = StyleSheet.create({
  container: {
    backgroundColor: '#fff',
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  title: {
    fontSize: 20,
    fontWeight: 'bold',
    padding: 20,
    color: '#000',
  },
  separator: {
    marginVertical: 30,
    height: 1,
    width: '80%',
  },
});
