import React, { useState } from "react";
import Button from "components/Button";
import EducationSection from "components/EducationSection";
import FormContainer from "components/FormContainer";
import PersonalSection from "components/PersonalSection";
import SkillSection from "components/SkillsSection";
import ExperienceSection from "components/ExperienceSection";

interface FormProps {
	submitText: string;
	handleSubmit: (data: IFormValues) => void;
	initialData: Partial<IFormValues>;
}

export interface IFormValues {
	first_name: string;
	last_name: string;
	email: string;
	about: string;
	description: string;
	street_address: string;
	experience_section: string;
	education_section: string;
	skills: string;
}

const Form: React.FC<FormProps> = (props: FormProps) => {
	const [formValues, setFormValues] = useState<IFormValues>({
		first_name: "",
		last_name: "",
		email: "",
		about: "",
		description: "",
		street_address: "",
		experience_section: "",
		education_section: "",
		skills: "",
		...props.initialData,
	});

	const handleTextInputChange = (event) => {
		setFormValues({
			...formValues,
			[event.target.name]: event.target.value,
		});
	};

	const handleSectionChange = ({ id, values }) => {
		setFormValues({
			...formValues,
			[id]: values,
		});
	};
	return (
		<FormContainer
			onSubmit={() => {
				props.handleSubmit(formValues);
			}}
		>
			<PersonalSection
				initialValues={props.initialData}
				onChange={handleTextInputChange}
			/>
			<EducationSection
				initialValues={props.initialData}
				onChange={handleSectionChange}
			/>
			<ExperienceSection
				initialValues={props.initialData}
				onChange={handleSectionChange}
			/>
			<SkillSection
				initialValues={props.initialData}
				onChange={handleTextInputChange}
			/>
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
