import React from "react";
import Button from "components/Button";
import Layout from "components/Layout";
import {useRouter} from "next/router";

const Home: React.FC = () => {
  const router = useRouter();
  return (
    <Layout title="Resume Builder">
      <div className="md:flex container mx-auto flex-col bg-white rounded-lg p-24 justify-center">
        <h1 className="font-extrabold text-6xl leading-none">Build Your Resume</h1>
        <h2 className="text-3xl text text-gray-600 mt-12 leading-tight">Start out by these simple steps:</h2>
        <div className="mt-4 flex">
          <span className="text-2xl font-extrabold text-black">1.</span>
          <p className="text-2xl text-teal-700 font-bold">Fill out the simple form</p>
        </div>
        <div className="mt-4 flex">
          <span className="text-2xl font-extrabold text-black">2.</span>
          <p className="text-2xl text-teal-700 font-bold">Choose your template</p>
        </div>
        <div className="mt-4 flex">
          <span className="text-2xl font-extrabold text-black">3.</span>
          <p className="text-2xl text-teal-700 font-bold">Your Resume is ready!</p>
        </div>
        <Button text="Get Started" onClick={() => router.push('/resume-form')} />
      </div>
    </Layout>
  );
};

export default Home;
