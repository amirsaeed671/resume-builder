import React, { useState, useEffect, useRef } from "react";

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
	const [value, setValue] = useState(options[0]);
	const elementRef = useRef<HTMLSelectElement>(null);

	const handleChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
		setValue(event.target.value);
		onChange(event);
	};

	useEffect(() => {
		const inputEvent = new Event("change", { bubbles: true });
		elementRef.current.dispatchEvent(inputEvent);
	}, []);

	return (
		<div className={className}>
			<label
				htmlFor={id}
				className="block text-sm font-medium leading-5 text-gray-700"
			>
				{label}
			</label>
			<div className="mt-1 sm:mt-0">
				<div className="rounded-md shadow-sm">
					<select
						onChange={handleChange}
						value={value}
						ref={elementRef}
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
