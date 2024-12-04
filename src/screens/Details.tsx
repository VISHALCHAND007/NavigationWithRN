import {Button, StyleSheet, Text, View} from 'react-native';
import React from 'react';

//navigation
import {NativeStackScreenProps} from '@react-navigation/native-stack';
import {RootStackParamsList} from '../App';
import {useNavigation} from '@react-navigation/native';
import {NativeStackNavigationProp} from '@react-navigation/native-stack';

type DetailsProps = NativeStackScreenProps<RootStackParamsList, 'Details'>;

const Details = ({route}: DetailsProps) => {
  const navigation = useNavigation<NativeStackNavigationProp<DetailsProps>>();
  const {productId} = route.params;
  return (
    <View style={styles.container}>
      <Text style={styles.text}>Details: {productId}</Text>
      <Button
        title="Go Back"
        color="#6CB4EE"
        // onPress={() => navigation.goBack()}
        onPress={() => navigation.popToTop()}
      />
    </View>
  );
};

export default Details;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  text: {
    color: '#000000',
    marginBottom: 20,
  },
});
