import styles from '../styles/Home.module.css'
// import LoginForm from '../components/LoginForm'
export default function login(){
    function information(){
        var email = document.getElementById('email').value;
        var pass = document.getElementById('pass').value;
        console.log(`Email:${email} && Password:${pass}`)
    }
    return ( 
        <div>
            <nav className={styles.nav}>
            <h2>Welcome to the Jersey Store</h2>
            <ul>
            <a href="/">Home</a>
            <a href="/contact">Contact</a>
            <a href="/login">Login</a>
            </ul>
        </nav>
            <div className={styles.login_box}>
                <h2>Login</h2>
                <form>
                    <div className={styles.user_box}>
                    <input type="email" name="email" required=""/>
                    <label>Email</label>
                    </div>
                    <div className={styles.user_box}>
                    <input type="password" name="password" required=""/>
                    <label>Password</label>
                    </div>
                    <a onclick="information()" href="/loggedIn">
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