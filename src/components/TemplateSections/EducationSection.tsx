import React from "react";
import { IFormValues } from "components/Form";

interface EducationSectionProps {
	data: IFormValues;
}
const EducationSection: React.FC<EducationSectionProps> = ({
	data,
}: EducationSectionProps) => {
	return (
		<div className="mt-6">
			<h1 className="text-2xl font-bold">Education</h1>
			<hr />
			<div className="mt-4">
				<span className="font-bold text-lg">{data.degree}</span> -{" "}
				<span>{data.institution}</span>
				<p className="mt-2">
					{data.date_of_completion}{" "}
					<span className="italic text-gray-600">({data.grade})</span>
				</p>
			</div>
		</div>
	);
};

export default EducationSection;
