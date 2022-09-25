import {useState,useEffect} from 'react'
import styles from '../styles/Home.module.css'

export default function PopUp(){
	return(
		<div className="popup_container" id="popup_container">
      		<div className="popup">
        		<h2 id="final_message"></h2>
        		<h3 id="final_message_reveal_word"></h3>
        		<button id="play_button">Play Again</button>
      		</div>
    	</div>
	)
}