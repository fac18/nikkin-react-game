import React from "react";
import { render } from "@testing-library/react";
import GameHeader from "../components/GameHeader/GameHeader";

test("Game header component renders correctly", () => {
  const { getByText } = render(<GameHeader />);
  getByText("Keep on Flyin'");
});
