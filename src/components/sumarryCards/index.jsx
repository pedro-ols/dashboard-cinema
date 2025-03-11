import styles from './sumarryCards.module.css'

const SummaryCards = ({ cards }) => {
    return (
        <div className={styles.summaryCards}>
            {
                cards.map((card, index) => (
                    <div key={index} className={styles.card}>
                        <h3>{card.title}</h3>
                        <div className={styles.cardValue}>{card.value}</div>
                        <div className={styles + `.cardChange ${card.isPositive ? styles.positive : styles.negative}`}>{card.change}</div>
                    </div>
                ))
            }
        </div>
    );
};

export default SummaryCards