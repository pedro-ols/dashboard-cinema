import styles from './page.module.css';
import Header from '../components/header'
import SideBar from '../components/sidebar';

export default function Home() {
  return (
    <div>
      <Header/>
      <main classNane={styles.dashboardContainer}>
      <SideBar/>
      </main>
    </div>
  );
}
