import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { Ionicons } from '@expo/vector-icons';

const FinalScore = ({ score }) => (
    <View style={styles.container}>
        <Ionicons style={styles.question} name="ios-thumbs-up" color={'green'} size={100}  />
        <Text style={styles.title}>Congratulation</Text>
        <Text style={styles.subtitle}>Your final score is: {score} / 10</Text>
    </View>
  );

const styles = StyleSheet.create({
    container: {
        flex: 1,
        flexDirection: 'column',
        alignItems: 'center',
        padding: 10
    },
    title: {
        fontSize: 40
    },
    subtitle: {
        fontSize: 20
    }
  });

export default FinalScore;

