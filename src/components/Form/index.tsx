import React, { useState } from "react";
import Button from "components/Button";
import EducationSection from "components/EducationSection";
import FormContainer from "components/FormContainer";
import PersonalSection from "components/PersonalSection";
import SkillSection from "components/SkillsSection";

interface FormProps {
	submitText: string;
	handleSubmit: (data: IFormValues) => void;
}

interface IFormValues {
	first_name?: string;
	last_name?: string;
	email?: string;
	about?: string;
	country?: string;
	street_address?: string;
	start_date?: string;
	end_date?: string;
	company?: string;
	skills?: string;
	institution?: string;
	degree?: string;
	grade?: string;
	date_of_completion?: string;
}

const Form: React.FC<FormProps> = (props: FormProps) => {
	const [formValues, setFormValues] = useState<IFormValues>({});

	const handleTextInputChange = (event) => {
		setFormValues({
			...formValues,
			[event.target.name]: event.target.value,
		});
	};

	return (
		<FormContainer
			onSubmit={() => {
				props.handleSubmit(formValues);
			}}
		>
			<PersonalSection onChange={handleTextInputChange} />
			<EducationSection onChange={handleTextInputChange} />
			<SkillSection onChange={handleTextInputChange} />
			<Button
				type="submit"
				data-testid="submit-button"
				text={props.submitText}
				size="medium"
			/>
		</FormContainer>
	);
};

export default Form;
