import styles from './header.module.css'

const Header = () => {
    return (
        <header className={styles.mainHeader}>
            <div className={styles.logo}>
                <h1>Cinema {styles.Estrela}</h1>
            </div>
            <nav className={styles.mainNav}>
                <ul>
                    <li><a href='#' className={styles.active}>Dashboard</a></li>
                    <li><a href='#'>Filmes</a></li>
                    <li><a href='#'>Sessões</a></li>
                    <li><a href='#'>Relatórios</a></li>
                </ul>
            </nav>
            <div className={styles.userInfo}>
                <span className={styles.userName}>Admin</span>
                <div className={styles.userAvatar}></div>
            </div>
        </header>
    );
}

export default Header;