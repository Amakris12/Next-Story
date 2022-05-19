import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'
import {useState} from 'react'
import jersey from './api/jersey'

export default function Home() {
  const [shirt, setShirt] = useState(jersey)
  return (
    <div>
      <nav className={styles.nav}>
        <h2>Welcome to the Jersey Store</h2>
        <ul>
          <a href="">Home</a>
          <a href="">About</a>
          <a href="">Contact</a>
          <a href="">Login</a>
          <a href="">Pay</a>
        </ul>
      </nav>
      <h3>Popular Jerseys</h3>
      <div className={styles.JerseyCard}>
        {shirt.map((color)=>{
        const {id,image,cost,name} = color;
        return(
          <div key={id}>
            <img src={image} alt="" />
            <h2>{name}</h2>
            <p>Price: {cost}</p>
          </div>
        )
      })}
      </div>

    </div>
  )
}
