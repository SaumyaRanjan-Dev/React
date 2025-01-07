//FlatList
import React from 'react';
import {StyleSheet, Text, View, Image, FlatList} from 'react-native';

const dummy = [
  {
    id: 1,
    name: 'Muskan',
    email: 'muskan@gmail.com',
    image:
      'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
  },
  {
    id: 2,
    name: 'John Doe',
    email: 'johndoe@gmail.com',
    image:
      'https://images.unsplash.com/photo-1552058544-f2b08422138a?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3',
  },
  {
    id: 3,
    name: 'Emma Watson',
    email: 'emmawatson@gmail.com',
    image:
      'https://images.unsplash.com/photo-1517841905240-472988babdf9?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3',
  },
  {
    id: 4,
    name: 'Michael Brown',
    email: 'michaelbrown@gmail.com',
    image:
      'https://images.unsplash.com/photo-1529626455594-4ff0802cfb7e?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3',
  },
  {
    id: 5,
    name: 'Sophia Johnson',
    email: 'sophiajohnson@gmail.com',
    image:
      'https://images.unsplash.com/photo-1520813792240-56fc4a3765a7?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3',
  },
  {
    id: 6,
    name: 'Liam Smith',
    email: 'liamsmith@gmail.com',
    image:
      'https://images.unsplash.com/photo-1517365830460-955ce3ccd263?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3',
  },
  {
    id: 7,
    name: 'Olivia Martinez',
    email: 'oliviamartinez@gmail.com',
    image:
      'https://images.unsplash.com/photo-1517423440428-a5a00ad493e8?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3',
  },
  {
    id: 8,
    name: 'William Garcia',
    email: 'williamgarcia@gmail.com',
    image:
      'https://images.unsplash.com/photo-1518020382113-a7e8fc38eac9?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3',
  },
  {
    id: 9,
    name: 'Ava Miller',
    email: 'avamiller@gmail.com',
    image:
      'https://images.unsplash.com/photo-1492562080023-ab3db95bfbce?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3',
  },
  {
    id: 10,
    name: 'James Wilson',
    email: 'jameswilson@gmail.com',
    image:
      'https://images.unsplash.com/photo-1517365830460-955ce3ccd263?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3',
  },
  {
    id: 11,
    name: 'Isabella Davis',
    email: 'isabelladavis@gmail.com',
    image:
      'https://images.unsplash.com/photo-1552058544-f2b08422138a?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3',
  },
  {
    id: 12,
    name: 'Benjamin White',
    email: 'benjaminwhite@gmail.com',
    image:
      'https://images.unsplash.com/photo-1520813792240-56fc4a3765a7?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3',
  },
  {
    id: 13,
    name: 'Mia Anderson',
    email: 'miaanderson@gmail.com',
    image:
      'https://images.unsplash.com/photo-1517841905240-472988babdf9?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3',
  },
  {
    id: 14,
    name: 'Charlotte Taylor',
    email: 'charlottetaylor@gmail.com',
    image:
      'https://images.unsplash.com/photo-1529626455594-4ff0802cfb7e?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3',
  },
  {
    id: 15,
    name: 'Ethan Moore',
    email: 'ethanmoore@gmail.com',
    image:
      'https://images.unsplash.com/photo-1517365830460-955ce3ccd263?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3',
  },
];

const App = () => {
  return (
    <View style={styles.container}>
      <FlatList
        data={dummy}
        keyExtractor={(item) => item.id.toString()} 
        renderItem={({ item }) => (
          <View style={styles.card}>
            <Image style={styles.image} source={{ uri: item.image }} />
            <Text>{item.name}</Text>
            {/* <Text>{item.email}</Text> */}
          </View>
        )}
        ItemSeparatorComponent={() => <View style={{ height: 10 }} />} 
        numColumns={3} 
        columnWrapperStyle={{ justifyContent: 'space-evenly' }} 
      />
    </View>
  );
};


export default App;

const styles = StyleSheet.create({
  container: {
    flex: 1, // Use flex to ensure container adjusts to screen size
    backgroundColor: '#f0f0f0', // Softer background for better contrast
    paddingVertical: 15,
    paddingHorizontal: 15,
  },
  card: {
    width: 110, // Slightly larger card for better layout balance
    height: 130, // Increased height to allow for text spacing
    backgroundColor: '#ffffff',
    borderRadius: 15, // More rounded corners for a modern look
    padding: 10, // Increased padding for content breathing room
    alignItems: 'center',
    justifyContent: 'center', // Centers text and image vertically
    shadowColor: '#000', // Shadow for depth effect
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.2,
    shadowRadius: 4,
    elevation: 5, // Shadow effect for Android
  },
  image: {
    width: 60, // Larger image for better visibility
    height: 60,
    borderRadius: 30, // Fully circular image
    marginBottom: 10, // Space between image and text
  },
  text: {
    fontSize: 14, // Slightly larger text for better readability
    color: '#333', // Darker text color for better contrast
    textAlign: 'center',
  },
});
