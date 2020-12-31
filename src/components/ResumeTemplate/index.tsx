import React, { forwardRef } from "react";
import { IFormValues } from "components/Form";
import Layout from "components/Layout";
import IntroductionSection from "components/TemplateSections/IntroductionSection";
import ExperienceSection from "components/TemplateSections/ExperienceSection";
import SkillsSection from "components/TemplateSections/SkillsSections";
import EducationSection from "components/TemplateSections/EducationSection";

interface ResumeTemplateProps {
	data: IFormValues;
}

const ResumeTemplate = forwardRef(
	({ data }: ResumeTemplateProps, ref: React.LegacyRef<HTMLDivElement>) => {
		return (
			<Layout title={`Resume (${data.first_name} ${data.last_name})`}>
				<div className="bg-white p-6 pb-24 rounded" ref={ref}>
					<IntroductionSection data={data} />
					<ExperienceSection data={data} />
					<EducationSection data={data} />
					<SkillsSection data={data} />
				</div>
			</Layout>
		);
	}
);

ResumeTemplate.displayName = "Resume Template";

export default ResumeTemplate;
