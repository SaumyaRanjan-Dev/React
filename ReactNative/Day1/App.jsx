import {
  StyleSheet,
  Text,
  View,
  Image,
  Button,
  TouchableOpacity,
  Alert,
  TouchableHighlight,
  Pressable,
  SafeAreaView,
} from 'react-native';
import React from 'react';

const App = () => {
  return (
    <SafeAreaView style={styles.container}>
      <Text style={styles.text}>Hello Boys and Girls</Text>
      <Image
        style={styles.image}
        source={{
          uri: 'https://images.unsplash.com/photo-1735437643865-18e22575a630?q=80&w=1770&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
        }}
      />
      <Button
        title="Button Type 0 NOT RECOMMENDED"
        onPress={() => Alert.alert('Button Pressed')}
      />
      <TouchableOpacity
        style={styles.button1}
        onPress={() => Alert.alert('Pressed!!')}
      >
        <Text style={styles.buttonText}>Button Type 1</Text>
      </TouchableOpacity>
      <TouchableHighlight
        style={styles.button2}
        onPress={() => Alert.alert('Pressed!!')}
      >
        <Text style={styles.buttonText}>Button Type 2</Text>
      </TouchableHighlight>
      <Pressable
        style={styles.button3}
        onPress={() => Alert.alert('Pressed!!')}
      >
        <Text style={styles.buttonText}>Button Type 3</Text>
      </Pressable>
    </SafeAreaView>
  );
};

export default App;

const styles = StyleSheet.create({
  container: {
    width: '100%',
    height: '100%',
    backgroundColor: '#000000',
    padding: 20,
    gap: 10,
  },
  text: {
    color: 'white',
    fontSize: 20,
    fontWeight: '500',
    marginBottom: 20,
  },
  image: {
    width: 200,
    height: 300,
    marginBottom: 20,
  },
  button1: {
    padding: 10,
    backgroundColor: 'green',
    marginBottom: 10,
  },
  button2: {
    width: 120,
    padding: 10,
    backgroundColor: 'pink',
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 50,
    marginBottom: 10,
    borderWidth: 6,
    borderColor: 'red',
  },
  button3: {
    padding: 10,
    backgroundColor: 'yellow',
    marginBottom: 10,
  },
  buttonText: {
    fontSize: 20,
    fontWeight: '500',
  },
});
