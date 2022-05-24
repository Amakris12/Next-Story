import styles from '../styles/Home.module.css'
import {useState} from 'react'
import jersey from './api/jersey'

export default function loggedIn() {
  const [shirt, setShirt] = useState(jersey)
  return (
    <div>
      <nav className={styles.nav}>
        <h2>Welcome to the Jersey Store</h2>
        <ul>
          <a href="/">Home</a>
          {/* <a href="/about">About</a> */}
          <a href="/contact">Contact</a>
          {/* <a href="/login">Login</a> */}
          {/* <a href="/payment">Pay</a> */}
        </ul>
      </nav>
      {/* <img className={styles.banner} src="https://wallpaperaccess.com/full/1112635.jpg" alt="" /> */}
      <h3 className={styles.pop}>Popular Jerseys</h3>
      <hr className={styles.line} />
      <div className={styles.JerseyCard}>
        {shirt.map((color)=>{
        const {id,image,cost,name,link} = color;
        return(
          <div key={id}>
            <img src={image} alt="" />
            <hr />
            <h2>{name}</h2>
            <p>Price: {cost}</p>
            <a href={link}><button>Click here</button></a>
          </div>
        )
      })}
      </div>
    </div>
  )
}
