import * as React from 'react';
import { StyleSheet, View, Text, Button } from 'react-native';
import { setBackgroundColor } from 'react-native-app-bg-color';

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
