import { useSelector } from "react-redux";
import CheckForm from "../../components/CheckForm/CheckForm";
import styles from "./Check.module.scss";
import AccessDenied from "../../components/AccessDenied/AccessDenied";

const Check = () => {
	const isLogged = useSelector(state => state.authSlice.isLogged);

	return (
		<div className='container'>
			<h2 className={styles.title}>Проверка кода по базе</h2>
			{isLogged ? <CheckForm type='base' /> : <AccessDenied />}
		</div>
	);
};

export default Check;
