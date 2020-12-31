import React from "react";
import { IFormValues } from "components/Form";

interface IntroductionSectionProps {
	data: IFormValues;
}
const IntroductionSection: React.FC<IntroductionSectionProps> = ({
	data,
}: IntroductionSectionProps) => {
	return (
		<>
			<div>
				<h1 className="text-4xl font-bold">
					{data.first_name} {data.last_name}
				</h1>
			</div>
			<div className="mb-12">
				<p className="text-xl max-w-sm">{data.about}</p>
				<p className="italic max-w-sm">{data.street_address}</p>
				<p className="text-sm text-gray-600 max-w-sm">{data.email}</p>
			</div>
		</>
	);
};

export default IntroductionSection;
