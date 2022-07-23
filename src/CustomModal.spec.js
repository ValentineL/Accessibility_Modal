import React from "react";
import { render, fireEvent } from "@testing-library/react";
import { axe, toHaveNoViolations } from "jest-axe";

import CustomModal from "./CustomModal";

/* In here please contirbute a test or tests that 
show the modal meets WCAG 2.1 AA Standards, you can
put your tests in different files to this one */

test("modal should have a text and a cancel button", () => {
  // Arrange
  const toggleVisibility = jest.fn();

  // Act
  const { getByText } = render(
    <CustomModal visible toggleVisibility={toggleVisibility}></CustomModal>
  );
  // Assert
  expect(
    getByText(
      "I will not close if you click outside me. Don't even try to press escape key."
    )
  ).toBeTruthy();

  // Act
  fireEvent.click(getByText(/Cancel/i));

  // Assert
  expect(toggleVisibility).toHaveBeenCalledTimes(1);
});

expect.extend(toHaveNoViolations);

it("modal should not fail any accessibility tests", async () => {
  const { baseElement } = render(<CustomModal visible={true} />);
  expect(await axe(baseElement)).toHaveNoViolations();
});
