import { useEffect, useState } from "react";
import { useRouter } from "next/router";
import Form from "components/Form";
import Layout from "components/Layout";
import generateQuery from "utils/generateQuery";
import saveValuesInStorage from "utils/saveValuesInStorage";
import getValuesFromStorage from "utils/getValuesFromStorage";

const ResumeForm: React.FC = () => {
	const router = useRouter();
	const [formIntialData, setFormInitialData] = useState({});
	const [isLoading, setIsLoading] = useState(true);

	useEffect(() => {
		setFormInitialData(getValuesFromStorage());
		setIsLoading(false);
	}, []);

	if (isLoading) {
		return null;
	}

	return (
		<Layout title="Resume Builder">
			<Form
				initialData={formIntialData}
				handleSubmit={(formValues) => {
					saveValuesInStorage(formValues);
					console.log({ formValues });
					const queryString = generateQuery(formValues);
					router.push(`/get-resume?${queryString}`);
				}}
				submitText="Submit"
			/>
		</Layout>
	);
};

export default ResumeForm;
