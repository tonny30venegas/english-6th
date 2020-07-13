import React from 'react';
import { StyleSheet, Text, View, Image } from 'react-native';
import { Ionicons } from '@expo/vector-icons';

const Credits = () => (
    <View style={styles.container}>
        <Text style={styles.title}></Text>
        <Image
            style={styles.logo}
            source={require('../../assets/tcu501.jpg')}
        />
    </View>
  );

const styles = StyleSheet.create({
    container: {
        flex: 1,
        flexDirection: 'column',
        alignItems: 'center',
        padding: 10,
        backgroundColor: 'white'
    },
    logo:{
        height: '60%',
        width: '60%'
    }
  });

export default Credits;