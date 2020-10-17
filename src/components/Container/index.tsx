import React from "react";

interface ContainerProps {
	children: React.ReactNode;
}

const Container: React.FC<ContainerProps> = ({ children }: ContainerProps) => {
	return (
		<div className="min-h-screen min-w-full background-image">
			<div className="container mx-auto bg-transparent rounded-lg justify-center md:pt-24 p-6">
				{children}
			</div>
		</div>
	);
};

export default Container;
