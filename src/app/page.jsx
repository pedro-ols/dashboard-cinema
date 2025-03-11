import styles from './page.module.css';
import Header from '@/components/header/index'
import SideBar from '@/components/sidebar/index';
import DashboardContent from '@/components/dashboardContent/index';

export default function Home() {
  return (
    <div>
      <Header/>
      <main className={styles.dashboardContainer}>
        <SideBar/>
        <DashboardContent/>
      </main>
    </div>
  );
}
