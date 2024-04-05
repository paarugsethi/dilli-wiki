import logo from './logo.svg';
import styles from './App.module.css';
import Navbar from './components/Navbar';
import Header from './components/Header';
import Body from './components/Body';
import { Analytics } from '@vercel/analytics/react';
// import { Helmet } from 'react-helmet';


function App() {
  return (
    <div>
      <div className={styles.AppHeader}>

        <Navbar/>
        <Header/>
        <Body/>
        <Analytics />
        
      </div>
    </div>
  );
}

export default App;
