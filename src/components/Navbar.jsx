import styles from "./Navbar.module.css"
import gate from '../images/gate.svg'

export default function Navbar() {
    return (
        <div className={styles.navdiv}>
            <img className={styles.gatelogo} src={gate} />
            <p className={styles.logo}>
            dilli.<span className={styles.wiki}>wiki</span>
            </p>
        </div>
    );
  }