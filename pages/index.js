import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'
import Header from '../components/Header'
import Figure from '../components/Figure'
import WrongLetter from '../components/WrongLetter'
import Word from '../components/Word'
import Notification from '../components/Notification'
import PopUp from '../components/PopUp'
import {showNotification as show, checkWin } from '../helpers/helpers'
import {useState,useEffect} from 'react'

const words = ['application', 'programming', 'interface', 'wizard'];
let selectedWord = words[Math.floor(Math.random() * words.length)];

export default function Home() {
    const [playable, setPlayable]  = useState(true);
    const [correctLetters, setCorrectLetters]  = useState([]);
    const [wrongLetters, setWrongLetters]  = useState([]);
    const [showNotification, setshowNotification]  = useState(false);
    useEffect(() => {
        const handleKeydown = event => {
            const { key, keyCode } = event;
            if (playable && keyCode >= 65 && keyCode <= 90) {
                const letter = key.toLowerCase();
                if (selectedWord.includes(letter)) {
                    if (!correctLetters.includes(letter)) {
                        setCorrectLetters(currentLetters => [...currentLetters, letter]);
                    } else {
                        show(setshowNotification);
                    }
                } else {
                    if (!wrongLetters.includes(letter)) {
                        setWrongLetters(currentLetters => [...currentLetters, letter]);
                    } else {
                        show(setshowNotification);
                    }
                }
            }
        }
        window.addEventListener('keydown', handleKeydown);

        return () => window.removeEventListener('keydown', handleKeydown);
    }, [correctLetters, wrongLetters, playable]);
    
    function playAgain() {
        setPlayable(true);

        // Empty Arrays
        setCorrectLetters([]);
        setWrongLetters([]);

        const random = Math.floor(Math.random() * words.length);
        selectedWord = words[random];
    }
    return (
        <div>
            <Header />
            <div className={styles.game_container}>
                <Figure wrongLetters={wrongLetters}/>
                <WrongLetter wrongLetters={wrongLetters}/>
                <Word selectedWord={selectedWord} correctLetters={correctLetters}/>
            </div>
            <PopUp correctLetters={correctLetters} wrongLetters={wrongLetters} selectedWord={selectedWord} setPlayable={setPlayable} playAgain={playAgain} />
            <Notification showNotification={showNotification}/>
        </div>
    )
}
