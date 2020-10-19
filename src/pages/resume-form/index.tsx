import Form from "components/Form";
import Layout from "components/Layout";

const ResumeForm: React.FC = () => {
	return (
		<Layout title="Resume Builder">
			<Form
				handleSubmit={(formValues) => {
					alert(formValues.first_name);
				}}
				submitText="Submit"
			/>
		</Layout>
	);
};

export default ResumeForm;
