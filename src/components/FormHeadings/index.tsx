import React from "react";

interface FormHeadingProps {
	title: string;
	description: string;
}

const FormHeading: React.FC<FormHeadingProps> = ({
	title,
	description,
}: FormHeadingProps) => {
	return (
		<div>
			<h3 className="text-lg leading-6 font-medium text-gray-900">
				{title}
			</h3>
			<p className="mt-1 max-w-2xl text-sm leading-5 text-gray-500">
				{description}
			</p>
		</div>
	);
};

export default FormHeading;
