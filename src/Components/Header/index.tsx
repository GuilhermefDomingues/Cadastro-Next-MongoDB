import Link from "next/link"
import styles from "./Header.module.css"

export function Header(){
    return(
        <header className={styles.header}>
            <div className={styles.container}>
                <div className={styles.logo}>
                   API + NextJs
                </div>

                <nav className={styles.nav}>
                    <ul>
                        <li>
                            <Link href='/'>Home</Link>
                        </li>
                    </ul>
                </nav>
            </div>
        </header>
    )
}