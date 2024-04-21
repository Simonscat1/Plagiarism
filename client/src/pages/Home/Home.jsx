import styles from "./Home.module.scss";
import WhoWe from "../../containers/WhoWe/WhoWe";

const Home = () => {
	return (
		<div className='container'>
			<h2 className={styles.title}>Главная</h2>
			<WhoWe />
		</div>
	);
};

export default Home;
