import React, { Fragment } from "react";
import { IFormValues } from "components/Form";

interface EducationSectionProps {
	data: IFormValues;
}
const EducationSection: React.FC<EducationSectionProps> = ({
	data,
}: EducationSectionProps) => {
	const sectionData = JSON.parse(data.education_section || "[]");

	if (sectionData.length < 1) return null;

	if (
		sectionData.length === 1 &&
		!sectionData[0].grade &&
		!sectionData[0].degree &&
		!sectionData[0].institution &&
		!sectionData[0].date_of_completion
	)
		return null;

	return (
		<div className="mt-6">
			<h1 className="text-2xl font-bold">Education</h1>
			<hr />
			{sectionData.map((x) => (
				<Fragment key={x.id}>
					<div className="mt-4">
						<span className="font-bold text-lg">{x.degree}</span> -{" "}
						<span>{x.institution}</span>
						<p className="mt-2">
							{x.date_of_completion}{" "}
							<span className="italic text-gray-600">
								({x.grade})
							</span>
						</p>
					</div>
				</Fragment>
			))}
		</div>
	);
};

export default EducationSection;
