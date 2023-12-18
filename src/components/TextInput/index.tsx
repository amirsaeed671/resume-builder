import React from "react";

type TextInputProps = {
	id: string;
	label: string;
	placeholder?: string;
	className?: string;
	span?: "full" | "lg";
	onChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
	required?: boolean;
	type?: "text" | "email";
} & React.HTMLAttributes<HTMLInputElement>;

const TextInput = React.forwardRef<HTMLInputElement, TextInputProps>(
	(
		{
			id,
			label,
			placeholder,
			className,
			onChange,
			span = "full",
			required = true,
			type = "text",
			...props
		}: TextInputProps,
		ref
	) => {
		return (
			<div className={className}>
				<label
					className="block text-sm font-medium leading-5 text-gray-700"
					htmlFor={id}
				>
					{label}
				</label>
				<div className="mt-1 sm:mt-0">
					<div className={`max-w-${span} rounded-md shadow-sm`}>
						<input
							{...props}
							className="form-input block w-full transition duration-150 ease-in-out sm:text-sm sm:leading-5"
							id={id}
							ref={ref}
							required={required}
							name={id}
							onChange={onChange}
							type={type}
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
