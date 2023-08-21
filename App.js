import { StatusBar } from 'expo-status-bar';
import { Pressable, StyleSheet, Text, View } from 'react-native';
import Addbutton from './COMPONENT/addButton';

export default function App() {
  return (
    <View style={styles.container}>
      <Text>heloo</Text>
      <StatusBar style="auto" />
    </View>
  );
}

///how do i make boxes in node?


const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#89CFF0',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
