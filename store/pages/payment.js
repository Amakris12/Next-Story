import styles from '../styles/Home.module.css'

export default function payment(){
    return( 
        <div>
            <nav className={styles.nav}>
        <h2>Purchase Your Jersey Here</h2>
        <ul>
          <a href="/">Home</a>
          <a href="/contact">Contact</a>
          <a href="/login">Login</a>
        </ul>
        </nav>
       
        </div>
    )
}