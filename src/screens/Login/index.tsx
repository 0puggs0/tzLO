import {Text, TextInput, TouchableOpacity, View} from 'react-native';
import React, {useCallback, useState} from 'react';
import {NavigationProp, useNavigation} from '@react-navigation/native';
import {Storage} from '../../storage/storage';
import {RootStackParamList} from '../../navigation/RootStack/types';
import {styles} from './styles';

export default function Login() {
  const [token, setToken] = useState('');
  const handleInputChange = useCallback((value: string) => {
    setToken(value);
  }, []);
  const goToFeed = () => {
    Storage.set('token', token);
    navigation.navigate('Feed');
  };
  const navigation = useNavigation<NavigationProp<RootStackParamList>>();
  return (
    <View style={styles.container}>
      <TextInput
        placeholder="Please enter token"
        value={token}
        onChangeText={handleInputChange}
        style={styles.input}
      />
      <TouchableOpacity onPress={goToFeed}>
        <Text>Login</Text>
      </TouchableOpacity>
    </View>
  );
}
