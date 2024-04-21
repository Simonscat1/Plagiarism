import styles from "./Features.module.scss";
import twoType from "../../assets/icons/two-type.png";
import comfort from "../../assets/icons/comfort.png";
import speed from "../../assets/icons/speed.png";

const Features = () => {
	return (
		<div className={styles.features}>
			<h3 className={styles.features__title}>
				<span>Преимущества</span>
			</h3>
			<div className={styles.features__items}>
				<div className={styles.features__item}>
					<img
						src={twoType}
						alt='Два вида проверки'
					/>
					<h4 className={styles.featuresItem__title}>Два вида проверки</h4>
					<p className={styles.featuresItem__descr}>
						Два варианта функционала проверки кода - по нашей базе и в Интернете
					</p>
				</div>
				<div className={styles.features__item}>
					<img
						src={speed}
						alt='Скорость'
						className={styles.speedImg}
					/>
					<h4 className={styles.featuresItem__title}>Скорость</h4>
					<p className={styles.featuresItem__descr}>
						Проверка кода на нашем сервисе происходит всего за несколько секунд
					</p>
				</div>
				<div className={styles.features__item}>
					<img
						src={comfort}
						alt='Удобство'
					/>
					<h4 className={styles.featuresItem__title}>Удобство</h4>
					<p className={styles.featuresItem__descr}>
						Понятный и удобный интерфейс, в котором можно разобраться сразу
					</p>
				</div>
			</div>
		</div>
	);
};

export default Features;
