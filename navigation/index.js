import React from 'react';
import { NavigationContainer, DefaultTheme, DarkTheme } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import GamesMenu from '../screens/games-menu';
import MinimalPairs from '../screens/minimal-pairs';
import ComparativeSuperlative from '../screens/comparative-superlative';
import BuildeTheSentece from '../screens/build-the-sentence';
import DemonstrativePronouns from '../screens/demonstrative-pronouns';
import Home from '../screens/home';
import Credits from '../screens/credits';

const Stack = createStackNavigator();

export default function Navigation({ colorScheme }) {
    return (
      <NavigationContainer
        theme={colorScheme === 'dark' ? DarkTheme : DefaultTheme}>
        <RootNavigator />
      </NavigationContainer>
    );
}

const RootNavigator = () => (
    <Stack.Navigator initialRouteName="Home">
      <Stack.Screen name="Home" component={Home} options={{
          title: "Home"
        }}/>
        <Stack.Screen name="GameMenu" component={GamesMenu} options={{
          title: "Games"
        }}/>
        <Stack.Screen name="MinimalPairs" component={MinimalPairs} options={{
          title: "Minimal Pairs"
        }}/>
        <Stack.Screen name="ComparativeSuperlative" component={ComparativeSuperlative} options={{
          title: "Comparative and Superlative"
        }}/>
        <Stack.Screen name="BuildTheSentence" component={BuildeTheSentece} options={{
          title: "Build the Sentence"
        }}/>
        <Stack.Screen name="DemonstrativePronouns" component={DemonstrativePronouns} options={{
          title: "Demonstrative Pronouns"
        }}/>
        <Stack.Screen name="Credits" component={Credits} options={{
          title: "Credits"
        }}/>
    </Stack.Navigator>
);
  

