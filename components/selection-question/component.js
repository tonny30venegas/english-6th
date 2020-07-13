import React, {useState} from 'react';
import { StyleSheet, Text, View, TouchableOpacity } from 'react-native';
import Separator from '../separator';
import * as Speech from 'expo-speech';

const selectionQuestion = ({ nextQuestion, question, setScore, instructions }) => {
    const [selected, setSelected] = useState(false);
    const [selected1, setSelected1] = useState(false);
    const [selected2, setSelected2] = useState(false);
    const [btnText, setBtnText] = useState('Check Answer');
    const [answerSelected, setAnswerSelected] = useState('');

    const reset = () => {
        setBtnText('Check Answer');
        setSelected(false);
        setSelected1(false);
        setSelected2(false);
        setAnswerSelected('');
        activeBtn = StyleSheet.compose(styles.button, styles.activeBtn);
    }

    const handleBtn = () => {
        if(answerSelected !== ''){
            if(btnText === 'Check Answer'){
                setBtnText('Next');
                if(answerSelected === question.answer){
                    activeBtn = StyleSheet.compose(styles.button, styles.goodBtn);
                    setScore();
                    Speech.speak("Well done!", {
                        language: "en"
                    });
                }else{
                    activeBtn = StyleSheet.compose(styles.button, styles.failedBtn);
                    Speech.speak("That was closed. Keep trying!", {
                        language: "en"
                    });
                }
            }else if(btnText === 'Next'){
                reset();
                nextQuestion();
            }
        }
    }

    const handleSelected = (index) => {
        if(btnText === 'Check Answer'){
            setSelected(index===0);
            setSelected1(index===1);
            setSelected2(index===2);
            setAnswerSelected(question.options[index]);
        }
    }

    return (
      <View style={styles.container}>
        <View style={styles.questionContainer}>
          <Text style={styles.instruction}>{instructions}</Text>
        </View>
        
        <View style={styles.answerContainer}>
            <Text style={styles.question}>{ question.question }</Text>
            <Separator />
            <TouchableOpacity
                activeOpacity={0.6}
                style={selected?activeBtn:styles.button}
                onPress={()=>{handleSelected(0)}}
            >
                <Text>{ question.options[0] }</Text>
            </TouchableOpacity>
            <TouchableOpacity
                activeOpacity={0.6}
                style={selected1?activeBtn:styles.button}
                onPress={()=>{handleSelected(1)}}
            >
                <Text> { question.options[1] } </Text>
            </TouchableOpacity>
            <TouchableOpacity
                activeOpacity={0.6}
                style={selected2?activeBtn:styles.button}
                onPress={()=>{handleSelected(2)}}
            >
                <Text>{ question.options[2] }</Text>
            </TouchableOpacity>
        </View>
        <View style={styles.btnContainer}>
            <TouchableOpacity
                activeOpacity={0.6}
                style={styles.btnCheck}
                onPress={()=>{handleBtn()}}
            >
                <Text style={{fontWeight: 'bold'}}>{btnText}</Text>
            </TouchableOpacity>
        </View>
      </View>
    );
}

  const styles = StyleSheet.create({
    container: {
      flex: 1,
      flexDirection: 'column',
      padding: 10
    },
    questionContainer: {
        alignItems: 'flex-start',
        marginTop: 10,
        marginBottom: 30,
        height: '10%'
    },
    answerContainer: {
        flex: 1,
        fontSize: 20,
        flexDirection: 'column',
        justifyContent: 'flex-start',
        alignItems: "center"
    },
    button: {
        width: '80%',
        height: 40,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#a9a9a9',
        borderRadius: 7,
        marginBottom: 20
      },
      activeBtn: {
        backgroundColor: '#add8e6',
      },
      failedBtn: {
        backgroundColor: '#f08080',
      },
      goodBtn: {
        backgroundColor: '#32cd32',
      },
      instruction: {
          fontSize: 17,
          color: 'gray'
      },
      question:{
          fontSize: 20,
          marginBottom: '20%',
          fontWeight: 'bold'

      },
      btnContainer:{
        alignItems: 'center',
      },
      btnCheck: {
        width: '80%',
        height: 40,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#32cd32',
        borderRadius: 7,
        marginBottom: 0,
      }
  });
  let activeBtn = StyleSheet.compose(styles.button, styles.activeBtn);

  export default selectionQuestion;