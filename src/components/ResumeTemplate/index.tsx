import { IFormValues } from "components/Form";
import React, { forwardRef } from "react";

interface ResumeTemplateProps {
	data: IFormValues;
}

const ResumeTemplate = forwardRef(
	({ data }: ResumeTemplateProps, ref: React.LegacyRef<HTMLDivElement>) => {
		return (
			<div className="bg-white p-6 pb-24 rounded" ref={ref}>
				<div>
					<h1 className="text-4xl font-bold">
						{data.first_name} {data.last_name}
					</h1>
				</div>
				<div className="mb-12">
					<p className="text-xl max-w-sm">{data.about}</p>
					<p className="italic max-w-sm">{data.street_address}</p>
					<p className="text-sm text-gray-600">{data.email}</p>
				</div>
				<div className="mt-6">
					<h1 className="text-2xl font-bold">Work Experience</h1>
					<hr />
					<div className="mt-4">
						<p className="font-bold text-lg">{data.company}</p>
						<span>{data.start_date}</span>
						<span className="italic text-sm mx-2 text-gray-600">
							to
						</span>
						<span>{data.end_date}</span>
					</div>
				</div>
				<div className="mt-6">
					<h1 className="text-2xl font-bold">Education</h1>
					<hr />
					<div className="mt-4">
						<span className="font-bold text-lg">{data.degree}</span>{" "}
						- <span>{data.institution}</span>
						<p className="mt-2">
							{data.date_of_completion}{" "}
							<span className="italic text-gray-600">
								({data.grade})
							</span>
						</p>
					</div>
				</div>
				<div className="mt-6">
					<h1 className="text-2xl font-bold">Skills</h1>
					<hr />
					<div className="mt-4 flex flex-wrap">
						{(data.skills || "").split(",").map((label) => (
							<div
								key={label}
								className="mr-4 text-xs inline-flex items-center font-bold leading-sm uppercase px-3 py-1 bg-red-200 text-red-700 rounded-full"
							>
								{label}
							</div>
						))}
					</div>
				</div>
			</div>
		);
	}
);

ResumeTemplate.displayName = "Resume Template";

export default ResumeTemplate;
