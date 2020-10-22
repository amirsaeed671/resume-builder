import React from "react";
import TextInput from "components/TextInput";
import userEvent from "@testing-library/user-event";
import { render } from "@testing-library/react";

test("Text Input Test", () => {
	//eslint-disable-next-line
	const handleChange = jest.fn(() => {});
	const label = "Test";
	const inputText = "Text for testing";

	const { getByLabelText } = render(
		<TextInput id="test" label={label} onChange={handleChange} />
	);

	const testInput = getByLabelText(label);
	userEvent.type(testInput, inputText);

	expect(handleChange).toHaveBeenCalledTimes(16);
});
