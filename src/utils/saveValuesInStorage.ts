import { IFormValues } from "components/Form";

const saveValuesInStorage: (formValues: IFormValues) => void = (formValues) => {
	const inputValues = {};
	for (const key in formValues) {
		if (formValues[key] === "") return "";
		inputValues[key] = formValues[key];
	}

	localStorage.setItem("form_values", JSON.stringify(inputValues));
};

export default saveValuesInStorage;
