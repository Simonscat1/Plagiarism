import Menu from "../../components/Menu/Menu";
import { MENU } from "../../constants/menu";
import styles from "./Footer.module.scss";

const Footer = () => {
	return (
		<footer className={styles.footer}>
			<div className='container'>
				<div className={styles.footer__content}>
					<Menu items={MENU} />
					<div className={styles.footer__copyright}>
						Code Checker &copy; 2024 — проверка кода на плагиат
					</div>
				</div>
			</div>
		</footer>
	);
};

export default Footer;
