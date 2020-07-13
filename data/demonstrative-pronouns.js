const interview = [
    {
        id: 1,
        question: "Look at ________ newspaper here.",
        options: ["these", "this", "those"],
        answer: "this"
    },
    {
        id: 2,
        question: "________ are my grandparents, and ________ people over there are my friend's grandparents.",
        options: ["These / those", "This / those", "That / those"],
        answer: "These / those"
    },
    {
        id: 3,
        question: "_______ building over there is the Chrysler Building.",
        options: ["That", "These", "This"],
        answer: "That"
    },
    {
        id: 4,
        question: "______ is my mobile phone and _______ is your mobile phone on the shelf over there.",
        options: ["This / that", "That / this", "This / those"],
        answer: "This / that"
    },
    {
        id: 5,
        question: "_______ photos here are much better than ______ photos on the book.",
        options: ["These / those", "Those / this", "This / those"],
        answer: "These / those"
    },
    {
        id: 6,
        question: "______ are my new shoes I'm wearing.",
        options: ["That", "Those", "These"],
        answer: "These"
    },
    {
        id: 7,
        question: "Are ______ your pencils here?",
        options: ["that", "those", "these"],
        answer: "these"
    },
    {
        id: 8,
        question: "______ bottle over there is empty.",
        options: ["This", "That", "These"],
        answer: "That"
    },
    {
        id: 9,
        question: "______ bricks over there are for your chimney.",
        options: ["These", "That", "Those"],
        answer: "Those"
    },
    {
        id: 10,
        question: "John, take ______ folder and put it on the desk over there.",
        options: ["that", "this", "these"],
        answer: "this"
    },
    {
        id: 11,
        question: "I like _____ flowers, not these flowers.",
        options: ["that", "those", "these"],
        answer: "those"
    },
    {
        id: 12,
        question: "______ letters, not those letters.",
        options: ["That", "These", "Those"],
        answer: "These"
    },
    {
        id: 13,
        question: "Can I use _____ pencil here?",
        options: ["that", "these", "this"],
        answer: "this"
    },
    {
        id: 14,
        question: "_____ shirt looks great.",
        options: ["These", "That", "Those"],
        answer: "That"
    },
    {
        id: 15,
        question: "Do you like ______ flowers?",
        options: ["these", "that", "this"],
        answer: "these"
    },
    {
        id: 16,
        question: "What are the answers to _____ questions?",
        options: ["these", "that", "this"],
        answer: "these"
    },
    {
        id: 17,
        question: "____ is a beautiful day today.",
        options: ["Those", "This", "That"],
        answer: "This"
    },
    {
        id: 18,
        question: "Look at _____ man over there.",
        options: ["this", "that", "those"],
        answer: "that"
    },
    {
        id: 19,
        question: "These books are mine and ______ are yours.",
        options: ["this", "that", "those"],
        answer: "those"
    },
    {
        id: 20,
        question: "Who is ______ person over there?",
        options: ["those", "that", "these"],
        answer: "that"
    }
]

export const getInterview = () => {
    let newInterview = interview.sort(element => Math.random() - 0.5);
    return newInterview.slice(0, 11);
}