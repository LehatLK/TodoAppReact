import { StatusBar } from 'expo-status-bar';
import React, { useState } from 'react';
import { StyleSheet, Text, View, ScrollView } from 'react-native';
import DeleteButton from './COMPONENT/deleteButton';
import NotesTextField from './COMPONENT/notesTextField';

export default function App() {
  const [notes, setNotes] = useState([]);

  const addNote = (note) => {
    setNotes([...notes, note]);
  };

  const deleteNote = (index) => {
    const updatedNotes = notes.filter((_, i) => i !== index);
    setNotes(updatedNotes);
  };

  return (
    <View style={styles.container}>
      <View style={styles.content}>
        <Text style={styles.HeaderText}>Todo List App</Text>
        <ScrollView style={styles.notesList}>
          {notes.map((note, index) => (
            <View key={index} style={styles.noteItem}>
              <Text style={styles.noteText}>{note}</Text>
              <DeleteButton onPress={() => deleteNote(index)} />
            </View>
          ))}
        </ScrollView>
      </View>
      <NotesTextField onAdd={addNote} />
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#89CFF0',
  },
  content: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  notesList: {
    maxHeight: 550, // Set a maximum height for the notes list
    width: '100%',
    marginTop: 50,
  },
  noteItem: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingHorizontal: 10,
    paddingVertical: 5,
    borderBottomWidth: 1,
    borderBottomColor: 'black',
  },
  HeaderText:{
    fontSize :36 ,
    fontWeight:'bold',
  },
  noteText:{
    fontSize: 15,
  },
});
