import { StatusBar } from 'expo-status-bar';
import { Pressable, StyleSheet, Text, View } from 'react-native';
//import Addbutton from './COMPONENT/addButton';
import DeleteButton from './COMPONENT/deleteButton';
import NotesTextField from './COMPONENT/notesTextField';

export default function App() {
  return (
    <View style={styles.container}>

      <DeleteButton></DeleteButton>
      <NotesTextField onAdd={(note) => console.log('Added', note)} />
      <StatusBar style="auto" />
    </View>
  );
}


const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#89CFF0',
    alignItems: 'center',
    justifyContent: 'flex-end',
  },
});