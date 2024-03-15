import React from "react"
import styles from "../ui/result.module.css"
import Image from "next/image"
import logo from "../../public/images/logo.png"
import QuestionItem from "./QuestionItem"
import Link from 'next/link'

export default function Results({ questions, score }) {
    return (
        <div className={styles.container}>
            <div className={styles.header}>
                <Image src={logo} className={styles.logo} alt="Zeniark Logo" />
                <p className={styles.title}>Final Results</p>
            </div>
            <div className={styles.questionList}>
                <div className={styles.score}>
                    <p>{score}/10</p>
                    <p>Your Score</p>
                </div>
                {
                    questions.map((q, index) => {
                        return <QuestionItem key={index} itemNum={index + 1} question={q} />
                    })
                }
            </div>
            <div className={styles.footer}>
                <Link className='primary-button' href="/">PLAY AGAIN</Link>
            </div>
        </div>
    )
}