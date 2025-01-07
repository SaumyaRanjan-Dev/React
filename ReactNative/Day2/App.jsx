//ScrollView Like Instgarm cicrcle
//layout
//flexbox all type 
//styling

import React from 'react';
import { ScrollView, StyleSheet, Text, View } from 'react-native';

const App = () => {
  return (

    <ScrollView 
    
    contentContainerStyle={{gap:10}}
    horizontal
    
    style={styles.container}>
      <View style={styles.box1}></View>
      <View style={styles.box2}></View>
      <View style={styles.box3}></View>
      <View style={styles.box1}></View>
      <View style={styles.box2}></View>
      <View style={styles.box3}></View>
      <View style={styles.box1}></View>
      <View style={styles.box2}></View>
      <View style={styles.box3}></View>
      <View style={styles.box1}></View>
      <View style={styles.box2}></View>
      <View style={styles.box3}></View>
      <View style={styles.box1}></View>
      {/* <View style={[styles.box2, {backgroundColor:"pink"}]}></View>
      <View style={[styles.box3, {backgroundColor:"skyblue"}]}></View>       */}
    </ScrollView>
  );
};

export default App;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'black',
    padding:10
    //flexDirection:"row"
    //flexDirection:"row-reverse"
    // flexDirection:"row",
    // //justifyContent:"space-between"
    // justifyContent:"center",
    // alignItems:"center"
    //flexDirection:"row",
    //justifyContent:"center",
    // alignItems:"center",
    // alignContent:"center",
    // flexWrap:"wrap"
  },
  box1: {
    // flex: 1,
    width:80,
    height:80,
    //alignSelf:"flex-start",
    // flexGrow:1,
    backgroundColor: 'red',
    borderRadius:50
  },
  box2: {
    //flex: 1,
    width:80,
    height:80,
    // flexGrow:1,
    backgroundColor: 'yellow',
    borderRadius:50
  },
  box3: {
    //flex: 1,
    width:80,
    height:80,
    backgroundColor: 'green',
    borderRadius:50
  },
});
