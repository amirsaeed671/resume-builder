import React from "react";
import { IFormValues } from "components/Form";

interface ExperienceSectionProps {
	data: IFormValues;
}
const ExperienceSection: React.FC<ExperienceSectionProps> = ({
	data,
}: ExperienceSectionProps) => {
	const sectionData = JSON.parse(data.experience_section || "[]");

	if (sectionData.length < 1) return null;

	if (
		sectionData.length === 1 &&
		!sectionData[0].company &&
		!sectionData[0].designation &&
		!sectionData[0].start_date &&
		!sectionData[0].end_date
	)
		return null;

	return (
		<div className="mt-6">
			<h1 className="text-2xl font-bold">Work Experience</h1>
			<hr />
			{sectionData.map((x) => (
				<div key={x.id} className="mt-4">
					<p className="font-bold text-lg">
						<span className="italic text-gray-600 font-semibold">
							{x.designation}
						</span>{" "}
						- {x.company}
					</p>
					<span>{x.start_date}</span>
					<span className="italic text-sm mx-2 text-gray-600">
						to
					</span>
					<span>{x.end_date}</span>
				</div>
			))}
		</div>
	);
};

export default ExperienceSection;
