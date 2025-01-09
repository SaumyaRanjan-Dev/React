import { StyleSheet, TextInput, View, Pressable, Text, FlatList, Alert } from 'react-native';
import React, { useState } from 'react';

export default function CreateScreen({ data, setData }) {
  const [itemName, setItemName] = useState('');
  const [stockAmt, setStockAmt] = useState('');
  const [editId, setEditId] = useState(null); // To track if editing an item

  // Add or Update Item
  const handleAddOrUpdateItem = () => {
    if (!itemName.trim() || isNaN(stockAmt) || Number(stockAmt) <= 0) {
      Alert.alert('Invalid Input', 'Please provide a valid name and stock amount.');
      return;
    }

    if (editId !== null) {
      // Update existing item
      const updatedData = data.map((item) =>
        item.id === editId ? { ...item, name: itemName, stock: parseInt(stockAmt) } : item
      );
      setData(updatedData);
      setEditId(null); // Reset editId after updating
    } else {
      // Add new item
      const newItem = {
        id: Date.now(),
        name: itemName,
        stock: parseInt(stockAmt),
      };
      setData([...data, newItem]);
    }

    setItemName('');
    setStockAmt('');
  };

  // Edit Item
  const handleEdit = (item) => {
    setItemName(item.name);
    setStockAmt(item.stock.toString());
    setEditId(item.id);
  };

  // Delete Item
  const handleDelete = (id) => {
    Alert.alert('Confirm Delete', 'Are you sure you want to delete this item?', [
      { text: 'Cancel', style: 'cancel' },
      {
        text: 'Delete',
        style: 'destructive',
        onPress: () => {
          const filteredData = data.filter((item) => item.id !== id);
          setData(filteredData);
        },
      },
    ]);
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Manage Items</Text>
      <TextInput
        placeholder="Enter Item Name"
        placeholderTextColor="#999"
        style={styles.input}
        value={itemName}
        onChangeText={setItemName}
      />
      <TextInput
        placeholder="Enter Stock Amount"
        placeholderTextColor="#999"
        style={styles.input}
        keyboardType="numeric"
        value={stockAmt}
        onChangeText={setStockAmt}
      />
      <Pressable style={styles.button} onPress={handleAddOrUpdateItem}>
        <Text style={styles.btnText}>{editId !== null ? 'Update Item' : 'Add Item'}</Text>
      </Pressable>

      <Text style={styles.subTitle}>Items in Stock</Text>
      <FlatList
        data={data}
        keyExtractor={(item) => item.id.toString()}
        renderItem={({ item }) => (
          <View
            style={[
              styles.itemContainer,
              { backgroundColor: item.stock < 10 ? '#FFCCCC' : '#D7F6BF' },
            ]}
          >
            <Text style={styles.itemText}>{item.name}</Text>
            <Text style={styles.itemText}>{item.stock}</Text>
            <View style={styles.actionContainer}>
              <Pressable onPress={() => handleEdit(item)}>
                <Text style={[styles.actionText, { color: 'blue' }]}>Edit</Text>
              </Pressable>
              <Pressable onPress={() => handleDelete(item.id)}>
                <Text style={[styles.actionText, { color: 'red' }]}>Delete</Text>
              </Pressable>
            </View>
          </View>
        )}
        contentContainerStyle={{ paddingBottom: 20 }}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: '4%',
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 20,
    textAlign: 'center',
  },
  input: {
    height: 40,
    borderColor: 'green',
    borderWidth: 1.5,
    paddingHorizontal: 15,
    borderRadius: 7,
    marginBottom: 10,
  },
  button: {
    backgroundColor: '#cabfeeff',
    padding: 10,
    borderRadius: 7,
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: 20,
  },
  btnText: {
    fontSize: 16,
    fontWeight: 'bold',
    color: 'black',
  },
  subTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 10,
  },
  itemContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    padding: 15,
    borderRadius: 7,
    marginBottom: 10,
  },
  itemText: {
    fontSize: 16,
    fontWeight: '500',
  },
  actionContainer: {
    flexDirection: 'row',
    gap: 10,
  },
  actionText: {
    fontSize: 14,
    fontWeight: 'bold',
  },
});
