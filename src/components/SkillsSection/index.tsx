import React from "react";
import TextInput from "components/TextInput";
import FormHeading from "components/FormHeadings";

interface SkillSectionProps {
	onChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
}

const SkillSection: React.FC<SkillSectionProps> = ({
	onChange,
}: SkillSectionProps) => {
	return (
		<div className="mt-8 border-t border-gray-200 pt-8 sm:mt-5 sm:pt-10 mb-8 border-b pb-5">
			<FormHeading
				title="Skills / Experience"
				description="Please enter your relevant skills and experience"
			/>
			<div className="mt-6 sm:mt-5">
				<div className="sm:border-t sm:border-gray-200 sm:pt-5">
					<div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-0 sm:gap-4 sm:gap-y-8">
						<TextInput
							className="mt-6 sm:mt-0"
							placeholder="Skills [comma seperated] e.g. Javascript, React, Node"
							label="Skills"
							id="skills"
							onChange={onChange}
						/>
						<TextInput
							className="mt-6 sm:mt-0"
							placeholder="Company Name"
							label="Company"
							id="company"
							onChange={onChange}
						/>
						<TextInput
							className="mt-6 sm:mt-0"
							placeholder="Start Date"
							label="Start Date"
							id="start_date"
							onChange={onChange}
						/>
						<TextInput
							className="mt-6 sm:mt-0"
							placeholder="End Date"
							label="End Date"
							id="end_date"
							onChange={onChange}
						/>
					</div>
				</div>
			</div>
		</div>
	);
};

export default SkillSection;
