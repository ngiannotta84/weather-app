import React from "react";
import { render, screen } from "@testing-library/react";
import App from "../components/App";

describe("App", () => {
  it("shows title element correctly", async () => {
    render(<App />);
    const h1Element = await screen.findByText("Manchester, GB");
    expect(h1Element).toBeInTheDocument();
  });
});
