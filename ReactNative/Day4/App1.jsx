//simpleway
import React, { useState } from 'react';
import { StyleSheet, Text, View, TextInput, Button } from 'react-native';

const App = () => {
  const [text, setText] = useState('');
  const [submittedText, setSubmittedText] = useState('');

  const handleSubmit = () => {
    setSubmittedText(text); // Save input value
    setText(''); // Clear input
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Enter Your Text</Text>
      <TextInput
        placeholder="Type here..."
        style={styles.input}
        value={text}
        onChangeText={setText}
      />
      <Button title="Submit" onPress={handleSubmit} />
      {submittedText ? <Text style={styles.result}>You Entered: {submittedText}</Text> : null}
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
  },
  title: {
    fontSize: 20,
    fontWeight: 'bold',
    marginBottom: 10,
  },
  input: {
    width: '80%',
    padding: 10,
    borderWidth: 1,
    borderRadius: 5,
    marginBottom: 10,
  },
  result: {
    marginTop: 20,
    fontSize: 16,
    color: 'blue',
  },
});
