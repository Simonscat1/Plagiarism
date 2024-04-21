import styles from "./WhoWe.module.scss";
import main from "../../assets/img/logo.png";
import { Link } from "react-router-dom";

const WhoWe = () => {
	return (
		<div className={styles.content}>
			<img
				className={styles.mainImg}
				src={main}
				alt='Лого сервиса'
			></img>
			<div className={styles.content__info}>
				<h3 className={styles.content__title}>Сервис проверки кода на плагиат</h3>
				<h4 className={styles.content__subtitle}>Кто мы такие?</h4>
				<p className={styles.content__descr}>
					CopyCode - сервис, осуществляющий деятельность по проверке программного кода на
					плагиат. Мы предоставляем простой и понятный интерфейс, позволяющий быстро и в
					пару кликлов проверить уникальность программного кода.
				</p>
				<div className={styles.content__controls}>
					<Link
						className={styles.content__btnSecondary}
						to='/contacts'
					>
						Связаться
					</Link>
					<Link
						className={styles.content__btnPrimary}
						to='/check/local'
					>
						Проверить код
					</Link>
				</div>
			</div>
		</div>
	);
};

export default WhoWe;
