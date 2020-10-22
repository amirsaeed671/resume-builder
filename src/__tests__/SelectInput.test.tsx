import React from "react";
import SelectInput from "components/SelectInput";
import userEvent from "@testing-library/user-event";
import { render } from "@testing-library/react";

test("Select Input test", async () => {
	//eslint-disable-next-line
	const handleChange = jest.fn(() => {});
	const options = ["Test", "Select", "Input"];

	const { getByLabelText } = render(
		<SelectInput
			id="test"
			options={options}
			label="Test"
			onChange={handleChange}
		/>
	);

	const testSelect = getByLabelText("Test");
	userEvent.selectOptions(testSelect, "Select");

	expect(handleChange).toHaveBeenCalledTimes(2);
});
