import React, {useState, useEffect} from 'react';
import { StyleSheet, SafeAreaView, Text } from 'react-native';
import SelectionQuestion from '../../components/selection-question';
import FinalScore from '../../components/final-score';
import { getInterview } from '../../data/build-the-sentence.js';

const BuildTheSentence = () => {
  const [questionDisplayed, setQuestionDisplayed] = useState(0);
  const [score, setScore] = useState(0);
  const [interview, setInterview] = useState(0);

  const params = {
    nextQuestion: () => setQuestionDisplayed(questionDisplayed+1),
    question: interview[questionDisplayed],
    setScore: () => setScore(score+1),
    instructions: "Choose the option that map the correct order of the sentence."
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

export default BuildTheSentence;