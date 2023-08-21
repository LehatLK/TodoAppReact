import { StatusBar } from 'expo-status-bar';
import { Pressable, StyleSheet, Text, View } from 'react-native';
import Addbutton from './COMPONENT/addButton';
import DeleteButton from './COMPONENT/deleteButton';

export default function App() {
  return (
    <View style={styles.container}>
      <Text></Text>
      <Addbutton></Addbutton>
      <DeleteButton></DeleteButton>
      <StatusBar style="auto" />
    </View>
  );
}

///how do i make boxes in js?


const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#89CFF0',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
