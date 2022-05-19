import styles from '../styles/Home.module.css'

export default function login(){
    return ( 
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
      <div className={styles.login_box}>
            <h2>Login</h2>
            <form>
                <div className={styles.user_box}>
                <input type="text" name="" required=""/>
                <label>Username</label>
                </div>
                <div className={styles.user_box}>
                <input type="password" name="" required=""/>
                <label>Password</label>
                </div>
                <a href="#">
                <span></span>
                <span></span>
                <span></span>
                <span></span>
                Submit
                </a>
            </form>
            </div>
        </div>
    )
}