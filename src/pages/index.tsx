import React from "react";
import Button from "components/Button";
import Layout from "components/Layout";
import { useRouter } from "next/router";
import StepText from "components/StepText";
import Heading from "components/Heading";
import SubHeading from "components/SubHeading";
import Container from "components/Container";

const Home: React.FC = () => {
	const router = useRouter();
	return (
		<Layout title="Resume Builder">
			<Container>
				<Heading text="Build Your Resume" />
				<SubHeading text="Start out by these simple steps:" />
				<StepText order="1" text="Fill out the simple form" />
				<StepText order="2" text="Choose your template" />
				<StepText order="3" text="Your Resume is ready!" />
				<Button
					className="mt-10"
					text="Get Started"
					size="large"
					onClick={() => router.push("/resume-form")}
				/>
			</Container>
		</Layout>
	);
};

export default Home;
