import React, {useState, useEffect} from 'react';
import { StyleSheet, Text, Button, View, SafeAreaView } from 'react-native';
import SelectionQuestion from '../../components/question-audio';
import FinalScore from '../../components/final-score';
import { getInterview } from '../../data/minimal-pairs.js';

const MinimalPairs = () => {
  const [questionDisplayed, setQuestionDisplayed] = useState(0);
  const [score, setScore] = useState(0);
  const [interview, setInterview] = useState(0);

  const params = {
    nextQuestion: () => setQuestionDisplayed(questionDisplayed+1),
    question: interview[questionDisplayed],
    setScore: () => setScore(score+1)
  }

  useEffect(() => {
    setInterview(getInterview());
}, []);
  return(
    interview === 0?<SafeAreaView style={styles.container}><Text>Loading</Text></SafeAreaView>:
    questionDisplayed >= 10?
      <SafeAreaView style={styles.container}><FinalScore score={score}/></SafeAreaView>
      :
      <SafeAreaView style={styles.container}>
        <SelectionQuestion {...params} />
      </SafeAreaView>
    )
  };


const styles = StyleSheet.create({
  container: {
    flex: 1
  }
});

export default MinimalPairs;