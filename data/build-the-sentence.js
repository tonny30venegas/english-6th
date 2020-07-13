const interview = [
    {
        id: 1,
        question: "happy / You / are",
        options: ["You happy are", "you are happy", "are happy you"],
        answer: "You happy are"
    },
    {
        id: 2,
        question: "lives / She / Costa Rica/ in",
        options: ["She lives Costa Rica in", "She lives in Costa Rica", "She Costa Rica in lives"],
        answer: "She lives in Costa Rica"
    },
    {
        id: 3,
        question: "don't / like / I / ice cream",
        options: ["don't like I ice cream", "I like don't ice cream", "I don't like ice cream"],
        answer: "I don't like ice cream"
    },
    {
        id: 4,
        question: "a / They / dog / have",
        options: ["They have a dog", "a They dog have", "They dog a have"],
        answer: "They have a dog"
    },
    {
        id: 5,
        question: "not / is / tired / He",
        options: ["He not is tired", "He tired is not", "He is not tired"],
        answer: "He is not tired"
    },
    {
        id: 6,
        question: "We / Costa Rica / don't live / in",
        options: ["We don't live in Costa Rica", "We live don't in Costa Rica", "We live in don't Costa Rica"],
        answer: "We don't live in Costa Rica"
    },
    {
        id: 7,
        question: "houses / are / Those / green",
        options: ["Those houses green are", "Those houses are green", "Those are houses green"],
        answer: "Those houses are green"
    },
    {
        id: 8,
        question: "Are / happy / ? / they",
        options: ["they Are happy?", "happy Are they", "Are they happy?"],
        answer: "Are they happy?"
    },
    {
        id: 9,
        question: "you / Do / like / fruits / ?",
        options: ["Do you like fruits?", "Do like you fruits?", "you Do like fruits?"],
        answer: "Do you like fruits?"
    },
    {
        id: 10,
        question: "? / Is / my / father / older / than / my / aunt",
        options: ["Is my older father than my aunt?", "Is my father older than my aunt?", "my Is father older than my aunt?"],
        answer: "Is my father older than my aunt?"
    }
]

export const getInterview = () => {
    let newInterview = interview.sort(element => Math.random() - 0.5);
    return newInterview.slice(0, 11);
}