import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'
import Header from '../components/Header'
import Figure from '../components/Figure'
import WrongLetter from '../components/WrongLetter'
import Word from '../components/Word'
import Notification from '../components/Notification'
import PopUp from '../components/PopUp'
import {showNotification as show} from '../helpers/helpers'
import {useState,useEffect} from 'react'


export default function Home() {
    const words = ['application', 'programming', 'interface', 'wizard'];
    let selectedWord = words[Math.floor(Math.random() * words.length)];
    const [playable, setplayable]  = useState(true);
    const [correctLetters, setcorrectLetters]  = useState([]);
    const [wrongLetters, setwrongLetters]  = useState([]);
    const [showNotification, setshowNotification]  = useState(false);
    useEffect(()=>{
        const handleKeyDown = event =>{
            const {key,keyCode} = event
            if (playable && keyCode >= 65 && keyCode <= 90) {
                const letter = key.toLowerCase();

                if (selectedWord.includes(letter)) {
                    if (!correctLetters.includes(letter)) {
                        setcorrectLetters(correctLetters => [...correctLetters, letter]);
                    } else {
                        show(setshowNotification);
                    }
                } else {
                    if (!wrongLetters.includes(letter)) {
                        setwrongLetters(wrongLetters => [...wrongLetters, letter]);
                    } else {
                        show(setshowNotification);
                    }
                }
            }
        }

        window.addEventListener('keydown', handleKeyDown)
        return () => window.removeEventListener('keydown', handleKeyDown)
    },[correctLetters,wrongLetters,playable])
    

    return (
        <div>
            <Header />
            <div className={styles.game_container}>
                <Figure wrongLetters={wrongLetters}/>
                <WrongLetter wrongLetters={wrongLetters}/>
                <Word selectedWord={selectedWord} correctLetters={correctLetters}/>
            </div>
            <PopUp />
            <Notification showNotification={showNotification}/>
        </div>
    )
}
