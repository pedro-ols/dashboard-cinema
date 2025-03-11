import styles from './dashboardcontent.module.css'

const DashboardContent = () => {
    return (
            <section className={styles.content}>
                <div className={styles.welcomeBar}>
                    <h2>Bem-vindo ao Dashboard</h2>
                    <p>Data: 10/03/2025</p>
                </div>

                <div className={styles.summaryCards}>
                    <div className={styles.card}>
                        <h3>Arrecadação Diária</h3>
                        <div className={styles.cardValue}>R$ 12.450,00</div>
                        <div className={styles.cardChange + " " + styles.positive}>+15% em relação a ontem</div>
                    </div>

                    <div className={styles.card}>
                        <h3>Arrecadação Mensal</h3>
                        <div className={styles.cardValue}>R$ 345.780,00</div>
                        <div className={styles.cardChange + " " + styles.positive}>+8% em relação ao mês passado</div>
                    </div>

                    <div className={styles.card}>
                        <h3>Arrecadação Semestral</h3>
                        <div className={styles.cardValue}>R$ 1.987.650,00</div>
                        <div className={styles.cardChange + " " + styles.positive}>
                            +12% em relação ao semestre anterior
                        </div>
                    </div>

                    <div className={styles.card}>
                        <h3>Ocupação Média</h3>
                        <div className={styles.cardValue}>78%</div>
                        <div className={styles.cardChange + " " + styles.negative}>
                            -3% em relação à semana anterior
                        </div>
                    </div>
                </div>

                <div className={styles.chartContainers}>
                    <div className={styles.chartContainer}>
                        <h3>Desempenho de Bilheteria por Filme</h3>
                        <div className={styles.chartPlaceholder}></div>
                    </div>

                    <div className={styles.chartContainer}>
                        <h3>Arrecadação por Semana</h3>
                        <div className={styles.chartPlaceholder}></div>
                    </div>
                </div>

                <div className={styles.movieStats}>
                    <h3>Filmes em Cartaz</h3>

                    <div className={styles.movieTable}>
                        <div className={styles.movieTableHeader}>
                            <div className={styles.movieCell}>Filme</div>
                            <div className={styles.movieCell}>Ingressos</div>
                            <div className={styles.movieCell}>Arrecadação</div>
                            <div className={styles.movieCell}>Ocupação</div>
                            <div className={styles.movieCell}>Dias em Cartaz</div>
                        </div>

                        <div className={styles.movieRow}>
                            <div className={styles.movieCell}>Aventuras Intergaláticas</div>
                            <div className={styles.movieCell}>2.450</div>
                            <div className={styles.movieCell}>R$ 85.750,00</div>
                            <div className={styles.movieCell}>92%</div>
                            <div className={styles.movieCell}>14</div>
                        </div>

                        <div className={styles.movieRow}>
                            <div className={styles.movieCell}>O Mistério do Vale</div>
                            <div className={styles.movieCell}>1.870</div>
                            <div className={styles.movieCell}>R$ 65.450,00</div>
                            <div className={styles.movieCell}>75%</div>
                            <div className={styles.movieCell}>21</div>
                        </div>

                        <div className={styles.movieRow}>
                            <div className={styles.movieCell}>Amor em Paris</div>
                            <div className={styles.movieCell}>1.240</div>
                            <div className={styles.movieCell}>R$ 43.400,00</div>
                            <div className={styles.movieCell}>62%</div>
                            <div className={styles.movieCell}>28</div>
                        </div>

                        <div className={styles.movieRow}>
                            <div className={styles.movieCell}>Velocidade Máxima 5</div>
                            <div className={styles.movieCell}>2.180</div>
                            <div className={styles.movieCell}>R$ 76.300,00</div>
                            <div className={styles.movieCell}>87%</div>
                            <div className={styles.movieCell}>7</div>
                        </div>
                    </div>
                </div>

                <div className={styles.additionalInfo}>
                    <div className={styles.sessionBox}>
                        <h3>Próximas Sessões</h3>
                        <ul className={styles.sessionList}>
                            <li>
                                <span className={styles.sessionTime}>14:30</span>
                                <span className={styles.sessionMovie}>Aventuras Intergaláticas</span>
                                <span className={styles.sessionRoom}>Sala 1</span>
                                <span className={styles.sessionCapacity}>87% vendido</span>
                            </li>
                            <li>
                                <span className={styles.sessionTime}>15:00</span>
                                <span className={styles.sessionMovie}>O Mistério do Vale</span>
                                <span className={styles.sessionRoom}>Sala 2</span>
                                <span className={styles.sessionCapacity}>65% vendido</span>
                            </li>
                            <li>
                                <span className={styles.sessionTime}>16:45</span>
                                <span className={styles.sessionMovie}>Amor em Paris</span>
                                <span className={styles.sessionRoom}>Sala 3</span>
                                <span className={styles.sessionCapacity}>42% vendido</span>
                            </li>
                            <li>
                                <span className={styles.sessionTime}>19:00</span>
                                <span className={styles.sessionMovie}>Velocidade Máxima 5</span>
                                <span className={styles.sessionRoom}>Sala 1</span>
                                <span className={styles.sessionCapacity}>93% vendido</span>
                            </li>
                        </ul>
                    </div>

                    <div className={styles.concessionBox}>
                        <h3>Vendas Bomboniere</h3>
                        <div className={styles.concessionStats}>
                            <div className={styles.concessionItem}>
                                <span className={styles.itemName}>Pipoca</span>
                                <span className={styles.itemSales}>R$ 3.450,00</span>
                            </div>
                            <div className={styles.concessionItem}>
                                <span className={styles.itemName}>Bebidas</span>
                                <span className={styles.itemSales}>R$ 2.780,00</span>
                            </div>
                            <div className={styles.concessionItem}>
                                <span className={styles.itemName}>Chocolates</span>
                                <span className={styles.itemSales}>R$ 1.350,00</span>
                            </div>
                            <div className={styles.concessionItem}>
                                <span className={styles.itemName}>Combos</span>
                                <span className={styles.itemSales}>R$ 4.230,00</span>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
    );
};

export default DashboardContent;