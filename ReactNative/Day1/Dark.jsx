//App.jsx
//Dark Mode Light Mode Based on Theme Change
import {
  StyleSheet,
  Text,
  View,
  useColorScheme,
} from 'react-native';
import React from 'react';

const App = () => {
  const theme = useColorScheme();
  console.log(theme, "theme");
  const isDarkMode = theme === 'dark';

  // Set dynamic background and text colors based on theme
  const backgroundColor = isDarkMode ? "black" : "white";
  const textColor = isDarkMode ? "white" : "black";

  return (
    <View style={[styles.container, { backgroundColor }]}>
      <Text style={[styles.text, { color: textColor }]}>
        App
      </Text>
    </View>
  );
};

export default App;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  text: {
    fontSize: 20,
    fontWeight: "bold",
  },
});
