import './global.css';
import {Post} from './Post'
import { Header } from './components/Header';
import styles from './App.module.css'
import { SideBar } from './components/SideBar';


function App() {

  return (
    <>

      <Header/>
      <div className={styles.wrapper}>

        <SideBar />
        <main>
          <Post author={'edu'} title={'dsadsad'}/>
          <Post author={'edu'} title={'dsadsad'}/>
        </main>

      </div>

    </>
  )
}

export default App
