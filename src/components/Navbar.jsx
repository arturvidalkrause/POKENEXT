import Link from "next/link";
import Image from "next/image";
import styles from "@/styles/Navbar.module.css";

export default function Navbar () {
    return (
        <nav className={styles.navbar}>
            <div className={styles.logo}>
                <Image src="/images/pokeball.png" width="30" height="30" alt="PokeNext"/>
                <h1>PokeNext</h1>
            </div>
            <ul className={styles.links}>
                <li><Link href="/">Home</Link></li>
                <li><Link href="/about">About</Link></li>
            </ul>
        </nav>
    )
}