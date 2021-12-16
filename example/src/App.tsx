import * as React from 'react';
import { StyleSheet, View, Button } from 'react-native';
import {
  setBackgroundColor,
  getBackgroundColor,
} from 'react-native-app-bg-color';

export default function App() {
  const genRanHex = (size: number) =>
    [...Array(size)]
      .map(() => Math.floor(Math.random() * 16).toString(16))
      .join('');

  React.useEffect(() => {
    setBackgroundColor(`#${genRanHex(6)}`);
  }, []);

  return (
    <View style={styles.container}>
      <Button
        color="black"
        onPress={() => setBackgroundColor(`#${genRanHex(6)}`)}
        title="Change Color"
      />

      <Button
        color="black"
        onPress={() =>
          getBackgroundColor((color: string) => console.log(color))
        }
        title="Get Color"
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: 'transparent',
  },
  button: {
    backgroundColor: '#FFF',
    borderWidth: 1,
    borderColor: '#000',
  },
});
