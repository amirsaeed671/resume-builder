import React from "react";

interface StepTextProps {
	text: string;
	order: string;
}

const StepText: React.FC<StepTextProps> = ({ order, text }: StepTextProps) => {
	return (
		<div className="mt-4 flex">
			<span className="text-2xl font-extrabold text-black">{order}.</span>
			<p className="text-2xl text-teal-700 font-bold">{text}</p>
		</div>
	);
};

export default StepText;
