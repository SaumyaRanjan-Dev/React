import { StyleSheet, Text, View, Pressable } from 'react-native';
import CreateScreen from './CreateScreen';
import AllItems from './AllItems';
import { useState } from 'react';

const initialData = [
  { id: 1, name: 'Wheat', stock: 5, unit: 'kg' },
  { id: 2, name: 'Rice', stock: 10, unit: 'kg' },
  { id: 3, name: 'Sugar', stock: 15, unit: 'kg' },
  { id: 4, name: 'Salt', stock: 20, unit: 'kg' },
  { id: 5, name: 'Milk', stock: 25, unit: 'L' },
  { id: 6, name: 'Curd', stock: 30, unit: 'L' },
  { id: 7, name: 'Paneer', stock: 35, unit: 'kg' },
  { id: 8, name: 'Butter', stock: 40, unit: 'kg' },
  { id: 9, name: 'Cheese', stock: 45, unit: 'kg' },
  { id: 10, name: 'Ghee', stock: 50, unit: 'kg' },
];

const HomeScreen = () => {
  const [view, setView] = useState(0);
  const [itemData, setItemData] = useState(initialData);

  return (
    <View style={styles.container}>
      <Text style={[styles.title, { color: view === 0 ? 'green' : 'black' }]}>
        Dashboard
      </Text>
      <View style={styles.buttonContainer}>
        {['All Items', 'Low Stock', 'Create'].map((label, index) => (
          <Pressable
            key={index}
            style={[
              styles.button,
              view === index && { backgroundColor: 'green' },
            ]}
            onPress={() => setView(index)}
          >
            <Text style={[styles.btnText, view === index && { color: 'white' }]}>
              {label}
            </Text>
          </Pressable>
        ))}
      </View>
      {view === 0 && <AllItems data={itemData} />}
      {view === 1 && (
        <AllItems data={itemData.filter((item) => item.stock < 20)} />
      )}
      {view === 2 && <CreateScreen data={itemData} setData={setItemData} />}
    </View>
  );
};

export default HomeScreen;

const styles = StyleSheet.create({
  container: {
    width: '100%',
    padding: '4%',
    backgroundColor: 'white',
    height: '100%',
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    color: 'black',
    marginBottom: 20,
  },
  buttonContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: 20,
  },
  button: {
    paddingVertical: 8,
    paddingHorizontal: 12,
    borderRadius: 50,
    borderWidth: 1,
    borderColor: 'green',
    backgroundColor: 'white',
  },
  btnText: {
    fontSize: 16,
    fontWeight: 'bold',
    color: 'black',
  },
});
