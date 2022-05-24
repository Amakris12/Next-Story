import {useRouter} from 'next/router'
import styles from '../../styles/Home.module.css'


export default function Jersey({jersey}){
    const router = useRouter()
    const {id} = router.query
    console.log(jersey)
    return (
        <>
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
            <div className={styles.Player}>
                <img src={jersey.Img} alt="" />
                <hr />
                <h1>{jersey.Name}</h1>
                <p>{jersey.Price}</p>
                <a href={jersey.Link}><button>Purchase</button></a>
            </div>
        </>
    )
}


export const getServerSideProps= async({params})=>{
    const req = await fetch(`http://localhost:3000/${params.id}.json`)
    const data = await req.json()
    console.log(params.id)
    return {
        props:{jersey:data}
    }
}