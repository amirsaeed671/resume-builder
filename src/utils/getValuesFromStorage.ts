import { IFormValues } from "components/Form";

const getValuesFromStorage: () => Partial<IFormValues> = () => {
	return JSON.parse(localStorage.getItem("form_values")) || {};
};

export default getValuesFromStorage;
