import React, { useState, useEffect, Fragment } from "react";
import TextInput from "components/TextInput";
import FormHeading from "components/FormHeadings";

interface EducationSectionProps {
	onChange: (value: { id: string; values: string }) => void;
	initialValues: Record<string, string | undefined>;
}

type SectionRowInput = {
	id: number;
	institution: string;
	grade: string;
	degree: string;
	date_of_completion: string;
};

const initialRowValue = (initData: string) => {
	const initialData = JSON.parse(initData || "[]");

	if (initialData.length > 0) {
		return initialData;
	}

	return [
		{
			id: new Date().getTime(),
			institution: "",
			grade: "",
			degree: "",
			date_of_completion: "",
		},
	];
};

const EducationSection: React.FC<EducationSectionProps> = ({
	onChange,
	initialValues,
}: EducationSectionProps) => {
	const [sectionInputs, setSectionInputs] = useState<SectionRowInput[]>(
		initialRowValue(initialValues.education_section)
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
				institution: "",
				degree: "",
				grade: "",
				date_of_completion: "",
			},
		]);
	};

	const handleDeleteRow = (id: number) => {
		setSectionInputs((prev) => prev.filter((x) => x.id !== id));
	};

	useEffect(() => {
		onChange({
			id: "education_section",
			values: JSON.stringify(sectionInputs),
		});
	}, [sectionInputs]);

	return (
		<div className="mt-8 border-t border-gray-200 pt-8 sm:mt-5 sm:pt-10">
			<FormHeading
				title="Education"
				description="Please enter your education information"
			/>
			<div className="mt-6 sm:mt-5">
				<div className="sm:border-t sm:border-gray-200 sm:pt-5">
					{sectionInputs.map((row, i) => (
						<Fragment key={row.id}>
							<div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-0 sm:gap-4 sm:gap-y-8">
								<TextInput
									className="mt-6 sm:mt-0 col-span-1 lg:col-span-2"
									placeholder="Please enter your Institution name"
									label="Institution name"
									id="institution"
									defaultValue={row["institution"]}
									onChange={({ target }) =>
										handleChange(row.id, {
											key: target.name,
											value: target.value,
										})
									}
								/>
								<TextInput
									className="mt-6 sm:mt-0"
									placeholder="Please enter your degree name"
									label="Degree name"
									id="degree"
									defaultValue={row["degree"]}
									onChange={({ target }) =>
										handleChange(row.id, {
											key: target.name,
											value: target.value,
										})
									}
								/>
								<TextInput
									className="mt-6 sm:mt-0"
									placeholder="Please enter your Grade/GPA"
									label="Grade/GPA"
									id="grade"
									defaultValue={row["grade"]}
									onChange={({ target }) =>
										handleChange(row.id, {
											key: target.name,
											value: target.value,
										})
									}
								/>
								<TextInput
									className="mt-6 sm:mt-0"
									placeholder="Please enter your date of completion"
									label="Date of completion"
									id="date_of_completion"
									defaultValue={row["date_of_completion"]}
									onChange={({ target }) =>
										handleChange(row.id, {
											key: target.name,
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

export default EducationSection;
