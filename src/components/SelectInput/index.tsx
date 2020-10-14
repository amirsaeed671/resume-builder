import React from "react";

interface SelectInputProps {
	id: string;
	label: string;
	onChange: (event: React.ChangeEvent<HTMLSelectElement>) => void;
	options: string[];
	className?: string;
}

const SelectInput: React.FC<SelectInputProps> = ({
	id,
	label,
	onChange,
	options,
	className,
}: SelectInputProps) => {
	return (
		<div className={className}>
			<label
				htmlFor={id}
				className="block text-sm font-medium leading-5 text-gray-700"
			>
				{label}
			</label>
			<div className="mt-1 sm:mt-0">
				<div className="max-w-lg rounded-md shadow-sm">
					<select
						onChange={onChange}
						id={id}
						name={id}
						className="form-select block w-full transition duration-150 ease-in-out sm:text-sm sm:leading-5"
					>
						{options.map((selectLabel) => (
							<option key={selectLabel}>{selectLabel}</option>
						))}
					</select>
				</div>
			</div>
		</div>
	);
};

export default SelectInput;
