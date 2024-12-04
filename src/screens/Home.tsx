import {Button, StyleSheet, Text, View} from 'react-native';
import React from 'react';

//navigation
import {NativeStackScreenProps} from '@react-navigation/native-stack';
import {RootStackParamsList} from '../App';

type HomeProps = NativeStackScreenProps<RootStackParamsList, 'Home'>;

const Home = ({navigation}: HomeProps) => {
  return (
    <View style={styles.container}>
      <Text style={styles.text}>Home</Text>
      <Button
        title="Go to Details"
        onPress={() => navigation.navigate('Details', {productId: '304'})}
        color='#6CB4EE'
      />
    </View>
  );
};

export default Home;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  text: {
    color: '#000000',
    marginBottom: 20
  },
});
