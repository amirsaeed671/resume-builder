import { IFormValues } from "components/Form";

const generateQuery: (formValues: IFormValues) => string = (formValues) => {
	let queryString = "";
	for (const key in formValues) {
		if (formValues[key] === "") return "";
		queryString += `${key}=${formValues[key]}&`;
	}
	return queryString;
};

export default generateQuery;
