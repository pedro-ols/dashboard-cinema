import styles from './sidebar.module.css'

const SideBar = () => {
    return (
        <section className={styles.sidebar}>
            <div className={styles.sidebarHeader}>
                <h2>Menu</h2>
            </div>
            <div className={styles.sidebarMenu}>
                <ul>
                    <li><a href='#' className={styles.active}>Visão Geral</a></li>
                    <li><a href='#'>Vendas</a></li>
                    <li><a href='#'>Ocupação</a></li>
                    <li><a href='#'>Bomboniere</a></li>
                    <li><a href='#'>Funcionários</a></li>
                </ul>
            </div>
        </section>
    )
};

export default SideBar;