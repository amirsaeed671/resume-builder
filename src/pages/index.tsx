import Button from "components/Button";
import Layout from "components/Layout";
import { useRouter } from "next/router";

const Home: React.FC = () => {
	const router = useRouter();
	return (
		<Layout title="Resume Builder">
			<div className="min-h-screen min-w-full background-image">
				<div className="container mx-auto bg-transparent rounded-lg justify-center md:pt-24 p-6">
					<h1 className="font-extrabold text-5xl sm:text-6xl sm:leading-none leading-10">
						Build Your Resume
					</h1>
					<h2 className="text-3xl text text-gray-600 mt-6 sm:mt-12 leading-tight">
						Start out by these simple steps:
					</h2>
					<div className="mt-4 flex">
						<span className="text-2xl font-extrabold text-black">
							1.
						</span>
						<p className="text-2xl text-teal-700 font-bold">
							Fill out the simple form
						</p>
					</div>
					<div className="mt-4 flex">
						<span className="text-2xl font-extrabold text-black">
							2.
						</span>
						<p className="text-2xl text-teal-700 font-bold">
							Choose your template
						</p>
					</div>
					<div className="mt-4 flex">
						<span className="text-2xl font-extrabold text-black">
							3.
						</span>
						<p className="text-2xl text-teal-700 font-bold">
							Your Resume is ready!
						</p>
					</div>
					<Button
						text="Get Started"
						size="large"
						onClick={() => router.push("/resume-form")}
					/>
				</div>
			</div>
		</Layout>
	);
};

export default Home;
