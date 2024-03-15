'use client'

import React, { useEffect, useState } from "react";
import QuestionCard from "../components/QuestionCard"
import Results from "../components/Results"

function getRandom(count, array) {
    let randomQuestions = []
    for (let index = 0; index < count; index++) {
        let randomIndex = Math.floor(Math.random() * array.length)
        randomQuestions.push(array[randomIndex])
        array.splice(randomIndex, 1)
    }

    return randomQuestions
}

function getData() {
    const res = require("../../public/files/questions.json");
    let questionsClone = [...res.results ?? []]
    let randomQuestions = getRandom(10, questionsClone)

    return randomQuestions
}

export default function Questions(props) {

    const [questions, setQuestions] = useState([])
    const [currentItemNum, setCurrentItemNum] = useState(0)
    const [showResults, setShowResults] = useState(false)
    const [score, setScore] = useState(0)

    useEffect(() => {
        setQuestions(getData())
    }, [])

    function handleAnswer(answer) {
        if (currentItemNum <= 9) {
            let currentQuestion = questions[currentItemNum]
            let is_correct = currentQuestion.correct_answer === answer

            if (is_correct) setScore(score + 1)

            let answeredQuestion = {
                ...currentQuestion,
                my_answer: {
                    answer: answer,
                    is_correct: is_correct
                }
            }

            questions[currentItemNum] = answeredQuestion
            setQuestions(questions)
            setCurrentItemNum(currentItemNum + 1)
        }

        if (currentItemNum == 9) {
            setShowResults(true)
        }
    }

    let content = <QuestionCard
        question={questions[currentItemNum] ?? {}}
        currentItemNum={currentItemNum}
        onHandleAnswer={handleAnswer}
    />
    if (showResults) {
        content = <Results
            questions={questions}
            score={score}
        />
    }
    return (<>{content}</>)
}