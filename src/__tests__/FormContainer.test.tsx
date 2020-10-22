import React from "react";
import { render } from "@testing-library/react";
import TextInput from "components/TextInput";
import userEvent from "@testing-library/user-event";
import FormContainer from "components/FormContainer";

test("Form Container test", async () => {
	//eslint-disable-next-line
	const handleSubmit = jest.fn(() => {});
	const { findByText, findByLabelText } = render(
		<FormContainer onSubmit={handleSubmit}>
			{/* eslint-disable-next-line */}
			<TextInput id="test" label="test" onChange={() => {}} />
			<button type="submit">Submit</button>
		</FormContainer>
	);
	const submitButton = await findByText("Submit");
	const inputBox = await findByLabelText("test");
	userEvent.type(inputBox, "Hello");
	userEvent.click(submitButton);

	expect(handleSubmit).toHaveBeenCalledTimes(1);
});

test("Form Container snapshot", async () => {
	//eslint-disable-next-line
	const handleSubmit = jest.fn(() => {});
	const { container } = render(
		<FormContainer onSubmit={handleSubmit}>Dummy Text</FormContainer>
	);

	expect(container).toMatchInlineSnapshot(`
		<div>
		  <form
		    class="container p-4 mx-auto"
		  >
		    Dummy Text
		  </form>
		</div>
	`);
});
