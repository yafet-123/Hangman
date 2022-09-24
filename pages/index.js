import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'
import Header from '../components/Header'
import Figure from '../components/Figure'
import WrongLetter from '../components/WrongLetter'
import Word from '../components/Word'

export default function Home() {
    return (
        <div>
            <Header />
            <div className={styles.game_container}>
                <Figure />
                <WrongLetter />
                <Word />
            </div>
        </div>
    )
}
