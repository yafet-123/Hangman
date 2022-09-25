import {useState,useEffect} from 'react'
import styles from '../styles/Home.module.css'

export default function Notification({showNotification}){
	return(
		<div class={`notification_container ${showNotification ? 'show' : ''}`}>
      		<p>You have already entered this letter</p>
    	</div>
	)
}