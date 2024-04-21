import { useState } from "react";
import styles from "./CheckForm.module.scss";
import SelectLanguage from "../SelectLanguage/SelectLanguage";
import {
	useAddListingToBaseMutation,
	useCheckListingMutation,
	useCheckListingWebMutation,
} from "../../api/checking";
import CheckResults from "../CheckResults/CheckResults";

const CheckForm = ({ type }) => {
	const [code, setCode] = useState("");
	const [language, setLanguage] = useState("");
	const [error, setError] = useState("");
	const [success, setSuccess] = useState("");

	const [checkListing, checkResponse] = useCheckListingMutation();
	const [checkWebListing, checkWebResponse] = useCheckListingWebMutation();
	const [addListing, addListingResponse] = useAddListingToBaseMutation();

	const codeChangeHandler = evt => {
		setCode(evt.target.value);
	};

	const formSubmitHandler = async evt => {
		evt.preventDefault();

		if (code.length < 100 || code.length > 10000) {
			setError("Длина кода должна быть от 100 до 10000 символов");
			return;
		}

		if ((type === "base" && code && language) || (type === "web" && code)) {
			try {
				setError("");
				const res =
					type === "base"
						? await checkListing({ language, code })
						: await checkWebListing({ code });
				if (type === "base" && res.data.similarity <= 40) {
					const confirm = window.confirm(`Добавить код в нашу базу?`);
					if (confirm) {
						const addRes = await addListing({ language, code });

						addRes.error.status === 500
							? setError("Ошибка при добавлении кода в базу")
							: setSuccess("Код добавлен в базу");
					}
				}
				console.log(res);
			} catch (e) {
				if (type === "base") {
					setError(checkResponse?.error?.data?.message);
				} else {
					setError(checkWebResponse?.error?.data?.message);
				}
			}
		} else {
			if (!code) {
				setError("Введите код для проверки");
				return;
			}
			if (type === "base" && !language) {
				setError("Укажите язык программирования");
				return;
			}
		}

		setTimeout(() => {
			setError("");
			setSuccess("");
		}, 3000);
	};

	return (
		<form
			method='post'
			onSubmit={formSubmitHandler}
			className={styles.checkForm}
		>
			<textarea
				placeholder='Введите код для проверки'
				rows={5}
				value={code}
				onChange={codeChangeHandler}
			></textarea>
			{type === "base" && (
				<SelectLanguage
					onSetLanguage={setLanguage}
					language={language}
				/>
			)}
			{error && <p className={styles.checkForm__failure}>{error}</p>}
			{success && <p className={styles.checkForm__success}>{success}</p>}
			<button
				type='submit'
				className={styles.btnSend}
			>
				Проверить
			</button>
			<div className={styles.checkForm__results}>
				{(checkResponse.isLoading || checkWebResponse.isLoading) && (
					<p>Загрузка результатов... Пожалуйста, ожидайте</p>
				)}
				{checkResponse.isSuccess && !error && !checkResponse.isError && (
					<CheckResults
						checkPercent={checkResponse.data.similarity}
						type='base'
					/>
				)}
				{checkWebResponse.isSuccess && !error && !checkWebResponse.isError && (
					<CheckResults
						checkPercent={checkWebResponse.data.main.percent}
						type='web'
					/>
				)}
			</div>
		</form>
	);
};

export default CheckForm;
