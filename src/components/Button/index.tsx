import React, { useState } from "react";

interface ButtonProps {
	text: string;
	size: "small" | "medium" | "large";
	type?: "button" | "submit" | "reset";
	onClick?: () => void;
	"data-testid"?: string;
	className?: string;
}

const getClass = (size) => {
	if (size === "large") {
		return "bg-purple-600 rounded-full text-white text-2xl py-3 px-6 focus:outline-none shadow-lg";
	} else if (size === "medium") {
		return "bg-purple-600 rounded-full text-white text-lg py-2 px-4 focus:outline-none shadow-lg";
	} else if (size === "small") {
		return "bg-purple-600 rounded-full text-white text-sm py-1 px-3 focus:outline-none shadow-lg";
	}
};

const Button: React.FC<ButtonProps> = (props: ButtonProps) => {
	const [className] = useState(getClass(props.size));
	return (
		<button
			type={props.type}
			data-testid={props["data-testid"]}
			onClick={props.onClick}
			className={`${className} ${props.className}`}
		>
			{props.text}
		</button>
	);
};

export default Button;
