import {useState,useEffect} from 'react'
import styles from '../styles/Home.module.css'

export default function  Word({selectedWord, correctLetters}){
	return(
	    <div className={styles.word}>
	    	{selectedWord.split('').map((letter,index) =>{
	    		return(
		          	<span className={styles.letter} key={index}>
		            	{correctLetters.includes(letter) ? letter : ''}
		          	</span>
		        )
        	})}
	    </div>
	)
}