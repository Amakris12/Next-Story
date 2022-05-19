import styles from '../styles/Home.module.css'

export default function contact(){
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
            <div className={styles.contact}>
                <div className={styles.flex}>
                    <section>
                        <h3>Contact here</h3>
                        <input type="text" placeholder="Name" />
                        <input type="text" placeholder="Email"/>
                        <textarea name="Message" id="" cols="30" rows="10" placeholder="Message"></textarea>
                    </section>
                    <article>
                        <h3>Contact Information</h3>
                        <p>Phone: (623) - 806 - 9966</p>
                        <p>Email: Amakris03@gmail.com</p>
                        <div className={styles.flexBTN}>
                            <button>Github</button>
                            <button>Instagram</button>
                            <button>Twitter</button>
                            <button>LinkedIn</button>
                        </div>
                    </article>
                </div>
            </div>
        </div>
    )
}