import {useState,useEffect} from 'react'
import styles from '../styles/Home.module.css'

export default function  WrongLetter({wrongLetters}){
	return(
	    <div className={styles.wrong_letters_container}>
	    	<div>
	    		{wrongLetters.length > 0 && <p>Wrong</p>}
    			{wrongLetters.map((letter,index) => <span key={index}>{letter}</span>)
    				.reduce((prev,curr)=> prev === null ? [curr] : [prev, ':', curr], null)

    			}
	    	</div>
	    </div>
	)
}