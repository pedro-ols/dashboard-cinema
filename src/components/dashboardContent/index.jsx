import SummaryCards from '@/components/sumarryCards';
import styles from './dashboardcontent.module.css';

const summaryData = [
    { title: 'Arrecadação Diária', value: 'R$ 12.450,00', change: '+15% em relação a ontem', isPositive: true },
    { title: 'Arrecadação Mensal', value: 'R$ 345.780,00', change: '+8% em relação ao mês passado', isPositive: true },
    { title: 'Arrecadação Semestral', value: 'R$ 1.987.650,00', change: '+12% em relação ao semestre anterior', isPositive: true },
    { title: 'Ocupação Média', value: '78%', change: '-3% em relação à semana anterior', isPositive: false }
  ];

  const movies = [
    { name: 'Aventuras Intergaláticas', tickets: 2450, revenue: 'R$ 85.750,00', occupancy: '92%', days: 14 },
    { name: 'O Mistério do Vale', tickets: 1870, revenue: 'R$ 65.450,00', occupancy: '75%', days: 21 },
    { name: 'Amor em Paris', tickets: 1240, revenue: 'R$ 43.400,00', occupancy: '62%', days: 28 },
    { name: 'Velocidade Máxima 5', tickets: 2180, revenue: 'R$ 76.300,00', occupancy: '87%', days: 7 }
  ];

  const sessions = [
    { time: '14:30', movie: 'Aventuras Intergaláticas', room: 'Sala 1', capacity: '87% vendido' },
    { time: '15:00', movie: 'O Mistério do Vale', room: 'Sala 2', capacity: '65% vendido' },
    { time: '16:45', movie: 'Amor em Paris', room: 'Sala 3', capacity: '42% vendido' },
    { time: '19:00', movie: 'Velocidade Máxima 5', room: 'Sala 1', capacity: '93% vendido' }
  ];

  const concessions = [
    { name: 'Pipoca', sales: 'R$ 3.450,00' },
    { name: 'Bebidas', sales: 'R$ 2.780,00' },
    { name: 'Chocolates', sales: 'R$ 1.350,00' },
    { name: 'Combos', sales: 'R$ 4.230,00' }
  ];

const DashboardContent = () => {
    return (
            <section className={styles.content}>
                <div className={styles.welcomeBar}>
                    <h2>Bem-vindo ao Dashboard</h2>
                    <p>Data: 10/03/2025</p>
                </div>
                <SummaryCards cards={summaryData}/>
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