import React from "react";
import Form from "../components/Form";

const Home: React.FC = () => {
  return (
    <div className="md:flex bg-white rounded-lg p-24 justify-center">
      <Form
        handleSubmit={() => {
          alert("hello");
        }}
        submitText="Submit"
      />
    </div>
  );
};

export default Home;
