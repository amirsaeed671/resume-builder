import React, { useEffect, useState, Fragment } from "react";
import TextInput from "components/TextInput";
import FormHeading from "components/FormHeadings";

interface ExperienceSectionProps {
	onChange: (value: { id: string; values: string }) => void;
	initialValues: Record<string, string | undefined>;
}

type SectionRowInput = {
	id: number;
	company: string;
	designation: string;
	start_date: string;
	end_date: string;
};

const initialRowValue = (initData: string) => {
	const initialData = JSON.parse(initData || "[]");

	if (initialData.length > 0) {
		return initialData;
	}

	return [
		{
			id: new Date().getTime(),
			company: "",
			designation: "",
			start_date: "",
			end_date: "",
		},
	];
};

const ExperienceSection: React.FC<ExperienceSectionProps> = ({
	onChange,
	initialValues,
}: ExperienceSectionProps) => {
	const [sectionInputs, setSectionInputs] = useState<SectionRowInput[]>(
		initialRowValue(initialValues.experience_section)
	);

	const handleChange = (
		id: number,
		{ key, value }: { key: string; value: string }
	) => {
		setSectionInputs((prev) =>
			prev.map((x) => {
				if (x.id === id) {
					return { ...x, [key]: value };
				} else return x;
			})
		);
	};

	const handleAddRow = () => {
		setSectionInputs((prev) => [
			...prev,
			{
				id: new Date().getTime(),
				company: "",
				designation: "",
				start_date: "",
				end_date: "",
			},
		]);
	};

	const handleDeleteRow = (id: number) => {
		setSectionInputs((prev) => prev.filter((x) => x.id !== id));
	};

	useEffect(() => {
		onChange({
			id: "experience_section",
			values: JSON.stringify(sectionInputs),
		});
	}, [sectionInputs]);

	return (
		<div className="mt-8 border-t border-gray-200 pt-8 sm:mt-5 sm:pt-10">
			<FormHeading
				title="Experience"
				description="Please enter your job experience"
			/>
			<div className="mt-6 sm:mt-5">
				<div className="sm:border-t sm:border-gray-200 sm:pt-5">
					{sectionInputs?.map((row, i) => (
						<Fragment key={row.id}>
							<div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-0 sm:gap-4 sm:gap-y-8">
								<TextInput
									className="mt-6 sm:mt-0"
									placeholder="Company Name"
									label="Company"
									id="company"
									defaultValue={row["company"]}
									onChange={({ target }) =>
										handleChange(row.id, {
											key: target.id,
											value: target.value,
										})
									}
								/>
								<TextInput
									className="mt-6 sm:mt-0"
									placeholder="Role/Designation"
									label="Role/Designation"
									id="designation"
									defaultValue={row["designation"]}
									onChange={({ target }) =>
										handleChange(row.id, {
											key: target.id,
											value: target.value,
										})
									}
								/>
								<TextInput
									className="mt-6 sm:mt-0"
									placeholder="Start Date"
									label="Start Date"
									id="start_date"
									defaultValue={row["start_date"]}
									onChange={({ target }) =>
										handleChange(row.id, {
											key: target.id,
											value: target.value,
										})
									}
								/>
								<TextInput
									className="mt-6 sm:mt-0"
									placeholder="End Date"
									label="End Date"
									id="end_date"
									defaultValue={row["end_date"]}
									onChange={({ target }) =>
										handleChange(row.id, {
											key: target.id,
											value: target.value,
										})
									}
								/>
							</div>
							<div className="flex gap-2">
								{i + 1 === sectionInputs.length && (
									<img
										src="/icons8-plus.svg"
										className="my-4 cursor-pointer"
										onClick={handleAddRow}
										height={30}
										width={30}
									/>
								)}
								{sectionInputs.length !== 1 && (
									<img
										src="/icons8-trash.svg"
										className="my-4 cursor-pointer"
										onClick={() => handleDeleteRow(row.id)}
										height={30}
										width={30}
									/>
								)}
							</div>
						</Fragment>
					))}
				</div>
			</div>
		</div>
	);
};

export default ExperienceSection;
