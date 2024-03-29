import logo from './logo.svg';
import styles from './App.module.css';
import Navbar from './components/Navbar';
import Header from './components/Header';
import Body from './components/Body';

function App() {
  return (
    <div>
      <div className={styles.AppHeader}>
        <Navbar/>
        <Header/>
        <Body/>
      </div>
    </div>
  );
}

export default App;
