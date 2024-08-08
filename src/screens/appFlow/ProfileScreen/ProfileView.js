import React, { useEffect } from 'react';
import { observer } from 'mobx-react';
import { View, Text, ActivityIndicator, FlatList, TouchableOpacity } from 'react-native';
import {styles} from '../../../styles/appStyles/index';
import {profileViewModel} from './ProfileViewModel';
import { useNavigation } from '@react-navigation/native';

const ProfileView = observer(() => {
  const navigation = useNavigation();

  useEffect(() => {
    profileViewModel.fetchUsers();
  }, []);

  const handleUpdate = () => {
    profileViewModel.updateUser(1, { name: 'Updated Name' });
  };
  const goBack = () => {
    navigation.goBack();
  };

  const renderItem = ({ item }) => (
    <View style={styles.item}>
      <Text style={styles.itemText}>{item.name}</Text>
      <Text style={styles.itemText}>Username: {item.username}</Text>
      <Text style={styles.itemText}>Email: {item.email}</Text>
      <Text style={styles.itemText}>Phone: {item.phone}</Text>
      <Text style={styles.itemText}>Website: {item.website}</Text>
      <Text style={styles.itemText}>Company: {item.name}</Text>
      <Text style={styles.itemText}>City: {item.city}</Text>
    </View>
  );

  if (profileViewModel.isLoading) {
    return <ActivityIndicator size="large" color="#007bff" />;
  }

  if (profileViewModel.error) {
    return <Text style={styles.errorText}>Error: {error.message}</Text>;
  }

  return (
    <View style={styles.container}>
      <FlatList
        style={styles.list}
        data={profileViewModel.users}
        renderItem={renderItem}
        keyExtractor={(item) => item.id.toString()}
      />
      <TouchableOpacity style={styles.button} onPress={handleUpdate}>
        <Text style={styles.buttonText}>Update</Text>
      </TouchableOpacity>
      <TouchableOpacity style={styles.button} onPress={goBack}>
        <Text style={styles.buttonText}>Go Back</Text>
      </TouchableOpacity>
    </View>
  );
});

export default ProfileView;
