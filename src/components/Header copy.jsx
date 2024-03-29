import styles from "./Header.module.css"
import delhi from '../images/Delhi.png'

export default function Header() {
    return (
        <div className={styles.maindiv} style={{backgroundImage:`url(${delhi})`, backgroundRepeat:"no-repeat",backgroundSize:"cover" }}>
            <h1>
            Want to romanticise Dilli on Instagram? This list should help.
            </h1>
            <p>
            Stop getting lost on Google.
            </p>
            <button>
                Share
            </button>
        </div>
    );
  }