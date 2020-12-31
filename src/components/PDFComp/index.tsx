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
		country: "",
		street_address: "",
		start_date: "",
		end_date: "",
		company: "",
		skills: "",
		institution: "",
		grade: "",
		degree: "",
		date_of_completion: "",
	});
	const router = useRouter();
	useEffect(() => {
		const {
			first_name,
			last_name,
			email,
			about,
			country,
			street_address,
			start_date,
			end_date,
			company,
			skills,
			institution,
			degree,
			grade,
			date_of_completion,
		} = router.query;
		setData({
			first_name,
			last_name,
			email,
			about,
			country,
			street_address,
			start_date,
			end_date,
			company,
			skills,
			institution,
			grade,
			degree,
			date_of_completion,
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
