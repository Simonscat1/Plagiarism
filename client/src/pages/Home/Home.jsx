import Features from "../../containers/Features/Features";
import WhoWe from "../../containers/WhoWe/WhoWe";
import styles from "./Home.module.scss";

const Home = () => {
	return (
		<div className='container'>
			<h2 className={styles.title}>Главная</h2>
			<WhoWe />
			<Features />
		</div>
	);
};

export default Home;
