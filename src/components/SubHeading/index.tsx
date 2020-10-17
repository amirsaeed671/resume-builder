import React from "react";

interface SubHeadingProps {
	text: string;
}

const SubHeading: React.FC<SubHeadingProps> = ({ text }: SubHeadingProps) => {
	return (
		<h2 className="text-3xl text text-gray-600 mt-6 sm:mt-12 leading-tight">
			{text}
		</h2>
	);
};

export default SubHeading;
