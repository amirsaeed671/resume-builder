import React from "react";
import { IFormValues } from "components/Form";

interface ExperienceSectionProps {
	data: IFormValues;
}
const ExperienceSection: React.FC<ExperienceSectionProps> = ({
	data,
}: ExperienceSectionProps) => {
	return (
		<div className="mt-6">
			<h1 className="text-2xl font-bold">Work Experience</h1>
			<hr />
			<div className="mt-4">
				<p className="font-bold text-lg">{data.company}</p>
				<span>{data.start_date}</span>
				<span className="italic text-sm mx-2 text-gray-600">to</span>
				<span>{data.end_date}</span>
			</div>
		</div>
	);
};

export default ExperienceSection;
