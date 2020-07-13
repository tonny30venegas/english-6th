import React, {useState, useEffect} from 'react';
import { StyleSheet, SafeAreaView, Text, ToastAndroid } from 'react-native';
import SelectionQuestion from '../../components/selection-question';
import FinalScore from '../../components/final-score';
import { getInterview } from '../../data/comparative-superlative.js';

const MinimalPairs = () => {
  const [questionDisplayed, setQuestionDisplayed] = useState(0);
  const [score, setScore] = useState(0);
  const [interview, setInterview] = useState(0);

  const params = {
    nextQuestion: () => {setQuestionDisplayed(questionDisplayed+1);},
    question: interview[questionDisplayed],
    setScore: () => {setScore(score+1)},
    instructions: "Choose the option that best completes the sentence."
  }

  useEffect(()=>{
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