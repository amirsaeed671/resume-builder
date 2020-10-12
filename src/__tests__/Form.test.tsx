import React from "react";
import Form from "components/Form";
import { render } from "@testing-library/react";

test("Form Test", () => {
	const { getByTestId } = render(
		//eslint-disable-next-line
		<Form handleSubmit={() => {}} submitText="Hello" />
	);
	expect(getByTestId("submit-button").textContent).toBe("Hello");
});
