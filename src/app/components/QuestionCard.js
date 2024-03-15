"use client"

import React from "react"
import styles from "../ui/question.module.css"
import Image from "next/image"
import logo from "../../public/images/logo.png"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCheck, faXmark } from "@fortawesome/free-solid-svg-icons"
import { decode } from 'html-entities';

export default function QuestionCard({ question, currentItemNum, onHandleAnswer }) {

    return (
        <div className={styles.card}>
            <div className={styles.header}>
                <div className={styles.headerTitle}>
                    <Image src={logo} className={styles.logo} alt="Zeniark Logo" />
                    <p className={styles.category}>Category: {question?.category}</p>
                </div>
                <p className={styles.itemNumber}>{currentItemNum + 1} of 10</p>
            </div>
            <div className={styles.content}>
                <p className={styles.contentText}>{decode(question?.question, { level: 'html5' })}</p>
            </div>
            <div className={styles.footer}>
                <button className={styles.btnTrue} onClick={() => onHandleAnswer("True")}>
                    <FontAwesomeIcon icon={faCheck} className="fa-solid fa-check" /> True
                </button>
                <button className={styles.btnFalse} onClick={() => onHandleAnswer("False")}>
                    <FontAwesomeIcon icon={faXmark} className="fa-solid fa-xmark" /> False
                </button>
            </div>
        </div>
    )
}