import React from 'react';
import { StyleSheet, Text, Button, View, SafeAreaView, Image } from 'react-native';
import Separator from '../../components/separator';
import { Ionicons } from '@expo/vector-icons';

const Home = ({navigation}) => (
  <SafeAreaView style={styles.container}>
    <View>
      <View style={styles.headerContainer}>
        <Ionicons name="ios-book" size={100} color="gray" />
        <Ionicons name="ios-star" size={20} color="gray" />
        <Text style={styles.title}>English 6th</Text>
        <Text style={styles.subtitle}>Welcome</Text>
      </View>
      <View style={styles.menuContainer}>
      <Button
        onPress={()=>{
          navigation.navigate('GameMenu')
        }}
        title="Play"
        color="#6b8e23"
        accessibilityLabel="Learn more about this purple button"
      />
      <Separator />
      <Button
        onPress={()=>{
          navigation.navigate('Credits')
        }}
        title="Credits"
        color="#6b8e23"
        accessibilityLabel="Learn more about this purple button"
      />
      <Separator />
      </View>
    </View>
  </SafeAreaView>
);


const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center'
  },
  headerContainer: {
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: 20
  }, 
  title: {
    fontSize: 40
  },
  subtitle: {
    fontSize: 25
  },
  menuContainer: {
    marginTop: '20%'
  },
  logo: {
    width: 100,
    height: 100,
  }
});

export default Home;