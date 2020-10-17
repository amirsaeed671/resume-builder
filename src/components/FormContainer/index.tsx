import React from "react";

interface FormContainerProps {
	onSubmit: () => void;
	children: React.ReactNode;
}

const FormContainer: React.FC<FormContainerProps> = (
	props: FormContainerProps
) => {
	return (
		<form
			onSubmit={(e: React.FormEvent<HTMLFormElement>) => {
				e.preventDefault();
				props.onSubmit();
			}}
			className="container p-4 mx-auto"
		>
			{props.children}
		</form>
	);
};

export default FormContainer;
