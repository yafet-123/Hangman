import {useState,useEffect} from 'react'
import styles from '../styles/Home.module.css'

export default function  WrongLetter(){
	return(
	    <div className={styles.wrong_letters_container}>
	    	<div id="wrong-letters"></div>
	    </div>
	)
}