import React from "react";
import { render } from "@testing-library/react";
import Button from "components/Button";

test("button component snapshot", () => {
	const { container } = render(
		<Button
			type="submit"
			data-testid="button"
			text="Button"
			size="medium"
		/>
	);

	expect(container).toMatchInlineSnapshot(`
		<div>
		  <button
		    class="bg-purple-600 rounded-full text-white text-lg py-2 px-4 focus:outline-none shadow-lg "
		    data-testid="button"
		    type="submit"
		  >
		    Button
		  </button>
		</div>
	`);
});
