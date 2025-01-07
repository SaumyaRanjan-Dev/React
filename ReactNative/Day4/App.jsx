//UserInput AND Show Result
import React, { useState } from 'react';
import { StyleSheet, Text, View, TextInput, Button } from 'react-native';

const App = () => {
  const [text, setText] = useState('');
  const [submittedText, setSubmittedText] = useState('');

  const handleSubmit = () => {
    setSubmittedText(text);
    setText('');
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Kem Cho Bhai</Text>
      <TextInput
        placeholder="Enter a text here"
        style={styles.input}
        value={text}
        onChangeText={setText}
        multiline
        numberOfLines={1}
      />
      <Button title="Submit" onPress={handleSubmit} />
      {submittedText ? <Text>Result: {submittedText}</Text> : null}
    </View>
  );
};

export default App;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 20, 
    gap: 10,
  },
  title: {
    fontSize: 20,
    fontWeight: '500',
  },
  input: {
    width: '100%',
    padding: 5,
    borderWidth: 1,
    borderRadius: 5,
  },
});
