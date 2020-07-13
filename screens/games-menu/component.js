import React from 'react';
import { StyleSheet, Text, Button, View, SafeAreaView, Alert } from 'react-native';
import Separator from '../../components/separator';
import { Ionicons } from '@expo/vector-icons';

const GamesMenu = ({ navigation }) => (
    <SafeAreaView style={styles.container}>
      <View>
        <View style={styles.headerContainer}>
          <Ionicons name="ios-book" size={100} color="gray" />
          <Ionicons name="ios-star" size={20} color="gray" />
          <Text style={styles.title}>Let's play!</Text>
        </View>
        <View style={styles.menuContainer}>
        <Button
          onPress={()=>{
            navigation.navigate('MinimalPairs')
          }}
          color='#6b8e23'
          title="Minimal Pairs"
          style={styles.optionBtn}
        />
        <Separator />
        <Button
          onPress={()=>{
            navigation.navigate('ComparativeSuperlative')
          }}
          title="Comparative and Superlative"
          color='#6b8e23'
          style={styles.optionBtn}
          accessibilityLabel="Learn more about this purple button"
        />
        <Separator />
        <Button
          onPress={()=>{
            navigation.navigate('BuildTheSentence')
          }}
          color='#6b8e23'
          title="Build the sentence"
          style={styles.optionBtn}
          accessibilityLabel="Learn more about this purple button"
        />
        <Separator />
        <Button
          onPress={()=>{
            navigation.navigate('DemonstrativePronouns')
          }}
          title="Demonstrative pronouns"
          color='#6b8e23'
          style={styles.optionBtn}
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
      alignItems: 'center',
    },
    headerContainer: {
      alignItems: 'center',
      marginTop: 20
    },
    menuContainer: {
      marginTop: '20%'
    },
    optionBtn: {
      backgroundColor: 'black'
    },
    title: {
      fontSize: 40
    }
  });

export default GamesMenu;