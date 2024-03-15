import React from 'react'
import Image from "next/image"
import logo from "../public/images/zeniark-logo.png"
import styles from "./ui/home.module.css"
import Link from 'next/link'

export default function HomePage() {

	return (
		<div className={styles.home}>
			<Image
				src={logo}
				alt='Zeniark logo'
				className={styles.homeLogo}
				priority={true}
			/>
			<h2>Welcome to the Trivia Challenge!</h2>
			<p className={styles.description}>You will be presented with 10 True or False questions.</p>
			<p className={styles.badge}>Can you score 10/10?</p>
			<Link className='primary-button' href="/question">LET’S START!</Link>
		</div>
	)
}
