import React from "react";
import TextInput from "components/TextInput";
import FormHeading from "components/FormHeadings";

interface EducationSectionProps {
	onChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
}

const EducationSection: React.FC<EducationSectionProps> = ({
	onChange,
}: EducationSectionProps) => {
	return (
		<div className="mt-8 border-t border-gray-200 pt-8 sm:mt-5 sm:pt-10 mb-8 border-b pb-5">
			<FormHeading
				title="Education"
				description="Please enter your education information"
			/>
			<div className="mt-6 sm:mt-5">
				<div className="sm:border-t sm:border-gray-200 sm:pt-5">
					<div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-0 sm:gap-4 sm:gap-y-8">
						<TextInput
							className="mt-6 sm:mt-0 col-span-2"
							placeholder="Please enter your Institution name"
							label="Institution name"
							id="institution"
							onChange={onChange}
						/>
						<TextInput
							className="mt-6 sm:mt-0"
							placeholder="Please enter your degree name"
							label="Degree name"
							id="degree"
							onChange={onChange}
						/>
						<TextInput
							className="mt-6 sm:mt-0"
							placeholder="Please enter your Grade/GPA"
							label="Grade/GPA"
							id="grade"
							onChange={onChange}
						/>
						<TextInput
							className="mt-6 sm:mt-0"
							placeholder="Please enter your date of completion"
							label="Date of completion"
							id="date_of_completion"
							onChange={onChange}
						/>
					</div>
				</div>
			</div>
		</div>
	);
};

export default EducationSection;
