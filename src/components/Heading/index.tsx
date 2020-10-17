import React from "react";

interface HeadingProps {
	text: string;
}

const Heading: React.FC<HeadingProps> = ({ text }: HeadingProps) => {
	return (
		<h1 className="font-extrabold text-5xl sm:text-6xl sm:leading-none leading-10">
			{text}
		</h1>
	);
};

export default Heading;
