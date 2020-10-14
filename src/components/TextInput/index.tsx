import React from "react";

interface TextInputProps {
	id: string;
	label: string;
	placeholder?: string;
	className?: string;
	onChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
}

const TextInput = React.forwardRef<HTMLInputElement, TextInputProps>(
	({ id, label, placeholder, className, onChange }: TextInputProps, ref) => {
		return (
			<div className={className}>
				<label
					className="block text-sm font-medium leading-5 text-gray-700"
					htmlFor={id}
				>
					{label}
				</label>
				<div className="mt-1 sm:mt-0">
					<div className="max-w-lg rounded-md shadow-sm">
						<input
							className="form-input block w-full transition duration-150 ease-in-out sm:text-sm sm:leading-5"
							id={id}
							ref={ref}
							name={id}
							onChange={onChange}
							type="text"
							placeholder={placeholder}
						/>
					</div>
				</div>
			</div>
		);
	}
);

TextInput.displayName = "Text Input";

export default TextInput;
