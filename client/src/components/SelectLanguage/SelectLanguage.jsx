import { useGetAllLanguagesQuery } from "../../api/languages";
import styles from "./SelectLanguage.module.scss";

const SelectLanguage = ({ onSetLanguage, language }) => {
	const { data } = useGetAllLanguagesQuery();

	const changeLanguageHandler = evt => {
		onSetLanguage(evt.target.value);
	};

	return (
		<select
			name='language'
			value={language}
			onChange={changeLanguageHandler}
		>
			<option
				value=''
				disabled
			>
				Язык программирования
			</option>
			{data?.map(language => (
				<option
					key={language._id}
					value={language.value}
				>
					{language.value}
				</option>
			))}
		</select>
	);
};

export default SelectLanguage;
