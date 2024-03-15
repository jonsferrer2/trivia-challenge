import React from "react"
import styles from "../ui/result.module.css"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCheck, faXmark } from "@fortawesome/free-solid-svg-icons"
import { decode } from 'html-entities';

export default function QuestionItem({ question, itemNum }) {

    function getAnswerStyle(answer) {
        if (answer === "True") return styles.answerTrue;
        else if (answer === "False") return styles.answerFalse;

        return "";
    }

    return (
        <div className={styles.questionItem}>
            <div className={styles.questionItemDesc}>
                <label className={styles.itemNum}>{itemNum}.</label>
                <label className={styles.question}>{decode(question?.question, { level: 'html5' })}</label>
                {
                    question?.my_answer.is_correct ?
                        <FontAwesomeIcon icon={faCheck} className="fa-solid fa-check correct-answer" />
                        : <FontAwesomeIcon icon={faXmark} className="fa-solid fa-xmark wrong-answer" />
                }
            </div>
            <div className={styles.resultDescContainer}>
                <label className={styles.resultDescNum}>{itemNum}.</label>
                <label className={styles.resultDesc}>The correct answer is&nbsp;
                    <span className={getAnswerStyle(question?.correct_answer)}>{question?.correct_answer ?? ""}</span>.
                    You answered&nbsp;
                    <span className={getAnswerStyle(question?.my_answer.answer)}>{question?.my_answer.answer ?? ""}</span>.
                </label>
            </div>
        </div>
    )
}