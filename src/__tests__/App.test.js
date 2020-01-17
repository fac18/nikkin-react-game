import React from "react";
import { render } from "@testing-library/react";
import App from "../../src/App";

test("App renders GameHeader and Landing Page", () => {
  const { getByText } = render(<App />);
  getByText("Keep on Flyin'");
  getByText("New Player:");
  getByText("Find me");
});
