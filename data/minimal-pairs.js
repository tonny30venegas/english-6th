const interview = [
    {
        id: 1,
        question: "Sit",
        options: ["Sit", "Seat", "Seet"],
        answer: "Sit"
    },
    {
        id: 2,
        question: "Shoes",
        options: ["Choose", "Choice", "Shoes"],
        answer: "Shoes"
    },
    {
        id: 3,
        question: "Choose",
        options: ["Shoes", "Choose", "Choice"],
        answer: "Choose"
    },
    {
        id: 4,
        question: "Sheep",
        options: ["Shift", "Sheep", "Cheap"],
        answer: "Sheep"
    },
    {
        id: 5,
        question: "Cheap",
        options: ["Cheap", "Sheep", "Shift"],
        answer: "Cheap"
    },
    {
        id: 6,
        question: "Watch",
        options: ["Watch", "Wall", "Wash"],
        answer: "Watch"
    },
    {
        id: 7,
        question: "Wash",
        options: ["Wash", "Wall", "Watch"],
        answer: "Wash"
    },
    {
        id: 8,
        question: "Match",
        options: ["Mash", "Match", "Mass"],
        answer: "Match"
    },
    {
        id: 9,
        question: "Mash",
        options: ["Match", "Mass", "Mash"],
        answer: "Mash"
    },
    {
        id: 10,
        question: "Cash",
        options: ["Cough", "Cash", "Catch"],
        answer: "Cash"
    },
    {
        id: 11,
        question: "Catch",
        options: ["Catch", "Cough", "Cash"],
        answer: "Catch"
    },
    {
        id: 12,
        question: "Seat",
        options: ["Sit", "Seat", "Seet"],
        answer: "Seat"
    },
    {
        id: 13,
        question: "Share",
        options: ["Chair", "Share", "Shore"],
        answer: "Share"
    },
    {
        id: 14,
        question: "Chair",
        options: ["Share", "Chair", "Shore"],
        answer: "Chair"
    },
    {
        id: 15,
        question: "Chew",
        options: ["Chew", "Shoe", "Shoot"],
        answer: "Chew"
    },
    {
        id: 16,
        question: "Shoe",
        options: ["Share", "Shoot", "Shoe"],
        answer: "Shoe"
    },
    {
        id: 17,
        question: "Chop",
        options: ["Chew", "Shoot", "Chop"],
        answer: "Chop"
    },
    {
        id: 18,
        question: "Shop",
        options: ["Shoot", "Chop", "Shop"],
        answer: "Shop"
    },
    {
        id: 19,
        question: "Wish",
        options: ["Wish", "With", "Witch"],
        answer: "Wish"
    },
    {
        id: 20,
        question: "Witch ",
        options: ["Wish", "With", "Witch"],
        answer: "Witch "
    }
]

export const getInterview = () => {
    let newInterview = interview.sort(element => Math.random() - 0.5);
    return newInterview.slice(0, 11);
}