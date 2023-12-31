import React, { useState } from 'react';
import { View, TextInput, Button, StyleSheet } from 'react-native';

const NotesTextField = ({ onAdd }) => {
  const [noteText, setNoteText] = useState('');

  const handleAddNote = () => {
    if (noteText.trim() !== '') {
      onAdd(noteText);
      setNoteText('');
    }
  };

  return (
    <View style={styles.container}>
      <TextInput
        style={styles.input}
        placeholder="Enter your note..."
        value={noteText}
        onChangeText={setNoteText}
      />
      <Button title="Add" onPress={handleAddNote} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingVertical: 20,
    paddingHorizontal: 20,
    backgroundColor: 'white',
  },
  input: {
    flex: 1,
    marginRight: 10,
    padding: 10,
    borderColor: 'black',
    borderWidth: 1,
    borderRadius: 5,
  },
});

export default NotesTextField;
