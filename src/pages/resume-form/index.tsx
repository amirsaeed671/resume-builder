import Form, { IFormValues } from "components/Form";
import Layout from "components/Layout";

const ResumeForm: React.FC = () => {
	return (
		<Layout title="Resume Builder">
			<Form
				handleSubmit={(formValues: IFormValues) => {
					alert(formValues.first_name);
				}}
				submitText="Submit"
			/>
		</Layout>
	);
};

export default ResumeForm;
