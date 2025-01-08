import { Text, View, Button } from 'react-native'
import React from 'react'

const Profile = ({navigation,route}) => {
  const {id} = route.params
  return (
    <View style={{width:"100%",height:"100%",justifyContent:"center",alignItems:"center"}}>
      <Text style={{fontSize:20,fontWeight:"500",marginBottom:10}}>Profile</Text>
      <Text style={{fontSize:20,fontWeight:"500",marginBottom:10}}>id: {id}, Name: {route.params.name}</Text>
      <Button title="Search" onPress={() => navigation.navigate("Search")} />
    </View>
  )
}

export default Profile
