import styles from '../styles/Home.module.css'

export default function payment(){
    return( 
        <div>
            <nav className={styles.nav}>
        <h2>Welcome to the Jersey Store</h2>
        <ul>
          <a href="/">Home</a>
          {/* <a href="/about">About</a> */}
          <a href="/contact">Contact</a>
          <a href="/login">Login</a>
          {/* <a href="/payment">Pay</a> */}
        </ul>
        </nav>
        {/* <img className={styles.banner} src="https://wallpaperaccess.com/full/1112635.jpg" alt="" /> */}
        </div>
    )
}