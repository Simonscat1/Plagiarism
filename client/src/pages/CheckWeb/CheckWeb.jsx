import { useSelector } from "react-redux";
import AccessDenied from "../../components/AccessDenied/AccessDenied";
import CheckForm from "../../components/CheckForm/CheckForm";
import styles from "./CheckWeb.module.scss";

const CheckWeb = () => {
	const isLogged = useSelector(state => state.authSlice.isLogged);

	return (
		<div className='container'>
			<h2 className={styles.title}>Проверка кода в интернете</h2>
			{isLogged ? <CheckForm type='web' /> : <AccessDenied />}
		</div>
	);
};

export default CheckWeb;
