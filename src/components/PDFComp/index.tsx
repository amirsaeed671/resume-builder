import React, { useEffect, useRef, useState } from "react";
import { useRouter } from "next/router";
import ReactPrint from "react-to-print";
import Container from "components/Container";
import ResumeTemplate from "components/ResumeTemplate";
import { IFormValues } from "components/Form";

const PDFComp: React.FC = () => {
	const resumeRef = useRef(null);
	const [data, setData] = useState<IFormValues>({
		first_name: "",
		last_name: "",
		email: "",
		about: "",
		description: "",
		street_address: "",
		skills: "",
		education_section: "",
		experience_section: "",
	});
	const router = useRouter();
	useEffect(() => {
		const {
			first_name,
			last_name,
			email,
			about,
			description,
			street_address,
			skills,
			education_section,
			experience_section,
		} = router.query;
		setData({
			first_name,
			last_name,
			email,
			about,
			description,
			street_address,
			skills,
			education_section,
			experience_section,
		} as IFormValues);
	}, [router]);
	return (
		<Container>
			<div className="text-center">
				<ReactPrint
					content={() => resumeRef.current}
					trigger={() => (
						<button className="text-xl rounded-full text-white bg-purple-500 p-2 px-12 mx-auto text-center">
							Print
						</button>
					)}
				/>
			</div>
			<div className="shadow-md">
				<ResumeTemplate data={data} ref={resumeRef} />
			</div>
		</Container>
	);
};

export default PDFComp;
