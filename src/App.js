import logo from './logo.svg';
import styles from './App.module.css';
import Navbar from './components/Navbar';
import Header from './components/Header';
import Body from './components/Body';
import { Analytics } from '@vercel/analytics/react';
import { Helmet } from 'react-helmet';


function App() {
  return (
    <div>
      <div className={styles.AppHeader}>

        <Helmet>
          <title>dilli.wiki</title>
          <meta name="description" content="Dilli [dot] wiki is a local's google list with the best places in town. From Chole Bhature to co-working spots, this has everything you need to know." />
          <meta property="og:title" content="dilli.wiki" />
          <meta property="og:description" content="a local's guide to falling in love with dilli." />
          <meta property="og:url" content="https://www.dilli.wiki" />
          <meta property="og:type" content="website" />
          <meta property="og:image" content={`${process.env.PUBLIC_URL}/ogimage.png`} />
        </Helmet>

        <Navbar/>
        <Header/>
        <Body/>
        <Analytics />
      </div>
    </div>
  );
}

export default App;
