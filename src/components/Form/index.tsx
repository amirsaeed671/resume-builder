import React from "react";

interface Props {
  submitText: String;
  handleSubmit: (data) => void;
};

const Form: React.FC<Props> = (props) => {
  return (
    <form onSubmit={(e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        props.handleSubmit({});
    }}>
      <input
        className="rounded shadow-md text-gray-500 p-2 text-base bg-white"
        placeholder="Name"
      />
      <button data-testid="submit-button" type="submit" className="bg-indigo-400 rounded-md shadow-md text-white p-2 m-4">{props.submitText}</button>
    </form>
  );
};

export default Form;
