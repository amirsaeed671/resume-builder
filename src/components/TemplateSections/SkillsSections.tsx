import React from "react";
import { IFormValues } from "components/Form";

interface SkillsSectionProps {
	data: IFormValues;
}
const SkillsSection: React.FC<SkillsSectionProps> = ({
	data,
}: SkillsSectionProps) => {
	return (
		<div className="mt-6">
			<h1 className="text-2xl font-bold">Skills</h1>
			<hr />
			<div className="mt-4 flex flex-wrap">
				{(data.skills || "").split(",").map((label) => (
					<div
						key={label}
						className="mr-4 text-xs inline-flex items-center font-bold leading-sm uppercase px-3 py-1 bg-red-200 text-red-700 rounded-full"
					>
						{label}
					</div>
				))}
			</div>
		</div>
	);
};

export default SkillsSection;
