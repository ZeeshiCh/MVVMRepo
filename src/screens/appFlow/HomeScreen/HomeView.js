import React, { useEffect } from 'react';
import { observer } from 'mobx-react';
import { View, Text, Button, ActivityIndicator, FlatList, TouchableOpacity } from 'react-native';
import HomeViewModel from './HomeViewModel';
import {styles} from '../../../styles/appStyles/index';
import NavigationService from '../../../services/navigation/NavigationService';
import ScreenNames from '../../../services/navigation/ScreenNames';

const homeViewModel = new HomeViewModel();

const HomeView = observer(({ navigation }) => {
  const { products, isLoading, error, fetchProducts, addProduct } = homeViewModel;

  useEffect(() => {
    fetchProducts();
  }, []);

  const handleAddProduct = () => {
    addProduct({ name: 'New Product', price: 100 }); 
  };

  const navigateToProfile = () => {
    NavigationService.navigate(ScreenNames.Profile);
  };

  return (
    <View style={styles.container}>
      {isLoading && <ActivityIndicator size="large" color="#0000ff" />}
      {error && <Text style={styles.errorText}>Error: {error.message}</Text>}
      <FlatList
        data={products}
        keyExtractor={item => item.id.toString()}
        renderItem={({ item }) => (
          <View style={styles.item}>
            <Text style={styles.itemText}>Name: {item.name}</Text>
            <Text style={styles.itemText}>Price: ${item.price}</Text>
          </View>
        )}
      />
      <TouchableOpacity style={styles.button} onPress={handleAddProduct}>
        <Text style={styles.buttonText}>Add Product</Text>
      </TouchableOpacity>
      <TouchableOpacity style={styles.button} onPress={navigateToProfile}>
        <Text style={styles.buttonText}>Go to Profile</Text>
      </TouchableOpacity>
    </View>
  );
});

export default HomeView;
