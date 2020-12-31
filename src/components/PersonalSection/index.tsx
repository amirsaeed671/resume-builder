import React, { useRef, useEffect } from "react";
import TextInput from "components/TextInput";
import FormHeading from "components/FormHeadings";

interface PersonalSectionProps {
	onChange: (
		event: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>
	) => void;
}

const PersonalSection: React.FC<PersonalSectionProps> = ({
	onChange,
}: PersonalSectionProps) => {
	const firstInput = useRef<HTMLInputElement>(null);

	useEffect(() => {
		firstInput.current.focus();
	}, []);
	return (
		<div>
			<div className="sm:border-b sm:border-gray-200 sm:pb-4">
				<FormHeading
					title="Personal Information"
					description="Please enter your information for your resume."
				/>
			</div>
			<div className="mt-2 pt-4 sm:mt-2 sm:pt-2">
				<div className="mt-6 sm:mt-5">
					<div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-0 sm:gap-4 sm:gap-y-8">
						<TextInput
							onChange={onChange}
							label="First Name"
							ref={firstInput}
							placeholder="Please enter your First Name"
							id="first_name"
						/>
						<TextInput
							className="mt-6 sm:mt-0"
							onChange={onChange}
							label="Last Name"
							placeholder="Please enter your Last Name"
							id="last_name"
						/>
						<TextInput
							className="mt-6 sm:mt-0"
							id="email"
							type="email"
							placeholder="Please enter your email address"
							label="Email Address"
							onChange={onChange}
						/>
						<TextInput
							className="mt-6 sm:mt-0"
							placeholder="Short and engaging title"
							label="Title"
							id="about"
							onChange={onChange}
						/>
						<TextInput
							className="mt-6 sm:mt-0"
							placeholder="Please enter your postal address"
							label="Postal address"
							id="street_address"
							onChange={onChange}
						/>
					</div>
				</div>
			</div>
		</div>
	);
};

export default PersonalSection;
