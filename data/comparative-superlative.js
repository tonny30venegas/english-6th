const interview = [
    {
        id: 1,
        question: "Superman is _____(strong) than my brother.",
        options: ["stronger", "strongest", "most strong"],
        answer: "stronger"
    },
    {
        id: 2,
        question: "Wonder woman is _____ (intelligent) than batman.",
        options: ["more intelligent", "most intelligent", "intelligent"],
        answer: "more intelligent"
    },
    {
        id: 3,
        question: "Puntarenas is the _______ (big) province from Costa Rica.",
        options: ["more big", "bigger", "biggest"],
        answer: "biggest"
    },
    {
        id: 4,
        question: "My sister thinks she's _______ (intelligent) than me, but I don't agree.",
        options: ["more intelligent", "most intelligent", "intelligent"],
        answer: "more intelligent"
    },
    {
        id: 5,
        question: "Avatar is probably the _________ (bad) film I've seen!",
        options: ["worst", "worse", "most bad"],
        answer: "worst"
    },
    {
        id: 6,
        question: "What is the _______ (wet) month of the year in Costa Rica.",
        options: ["wet", "more wet", "wettest"],
        answer: "wettest"
    },
    {
        id: 7,
        question: "Do you think the Harry Potter films are ________ (good) than the books?",
        options: ["best", "better", "good"],
        answer: "better"
    },
    {
        id: 8,
        question: "Who is the _________ (powerful) person in your country?",
        options: ["most powerful", "more powerful", "powerful"],
        answer: "most powerful"
    },
    {
        id: 9,
        question: "I think my cousin is _________ (funny) than my brother.",
        options: ["funny", "funniest", "funnier"],
        answer: "funnier"
    },
    {
        id: 10,
        question: "Is my father _______ (old) than my aunt?",
        options: ["more older", "older", "most older"],
        answer: "older"
    }
]

export const getInterview = () => {
    let newInterview = interview.sort(element => Math.random() - 0.5);
    return newInterview.slice(0, 11);
}