import { useRouter } from "next/router";
import Form from "components/Form";
import Layout from "components/Layout";
import generateQuery from "utils/generateQuery";

const ResumeForm: React.FC = () => {
	const router = useRouter();
	return (
		<Layout title="Resume Builder">
			<Form
				handleSubmit={(formValues) => {
					const queryString = generateQuery(formValues);
					router.push(`/get-resume?${queryString}`);
				}}
				submitText="Submit"
			/>
		</Layout>
	);
};

export default ResumeForm;
