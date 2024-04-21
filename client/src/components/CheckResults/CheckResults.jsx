import styles from "./CheckResults.module.scss";

const CheckResults = ({ checkPercent, type }) => {
	let similarityPercent, uniquePercent;

	if (type === "base") {
		similarityPercent = !checkPercent ? 0 : checkPercent.toFixed(2);
		uniquePercent = (100 - checkPercent).toFixed(2);
	} else {
		uniquePercent = checkPercent.toFixed(2);
		similarityPercent = (100 - checkPercent).toFixed(2);
	}

	return (
		<div className={styles.checkResults}>
			<h3 className={styles.checkResults__title}>Результаты проверки</h3>
			<div className={styles.checkResults__group}>
				<div className={styles.checkResults__results}>
					<h4 className={styles.results__title}>Уникальность кода</h4>
					<div className={styles.results__percent}>
						<span className={styles.results__percentTitle}>{`${uniquePercent}%`}</span>
						<div
							className={`${styles.results__scale} ${
								uniquePercent <= 35
									? styles.results__scale_low
									: uniquePercent < 70
									? styles.results__scale_middle
									: styles.results__scale_high
							}`}
							style={{ width: `${uniquePercent}%` }}
						></div>
					</div>
				</div>
				<div className={styles.checkResults__results}>
					<h4 className={styles.results__title}>Заимствование кода</h4>
					<div className={styles.results__percent}>
						<span
							className={styles.results__percentTitle}
						>{`${similarityPercent}%`}</span>
						<div
							className={`${styles.results__scale} ${
								similarityPercent <= 35
									? styles.results__scale_high
									: similarityPercent < 70
									? styles.results__scale_middle
									: styles.results__scale_low
							}`}
							style={{ width: `${similarityPercent}%` }}
						></div>
					</div>
				</div>
			</div>
		</div>
	);
};

export default CheckResults;
