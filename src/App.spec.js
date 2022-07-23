import React from "react";
import { render } from "@testing-library/react";
import { axe, toHaveNoViolations } from "jest-axe";

import App from "./App";

/* In here please contirbute a test or tests that 
show the modal meets WCAG 2.1 AA Standards, you can
put your tests in different files to this one */

test("should have NewDay as text", () => {
  const { queryByText } = render(<App />);

  expect(queryByText(/NewDay/)).toBeTruthy();
});

expect.extend(toHaveNoViolations);

it("app should not fail any accessibility tests", async () => {
  const { container } = render(<App />);
  expect(await axe(container)).toHaveNoViolations();
});
