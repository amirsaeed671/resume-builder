import React from "react";
import { IFormValues } from "components/Form";

interface AboutSectionProps {
	data: IFormValues;
}
const AboutSection: React.FC<AboutSectionProps> = ({
	data,
}: AboutSectionProps) => {
	console.log(data);
	return (
		<div className="mt-6">
			<h1 className="text-2xl font-bold">About me</h1>
			<hr />
			<div className="mt-4">
				<p className="text-gray-600">{data.description}</p>
			</div>
		</div>
	);
};

export default AboutSection;
