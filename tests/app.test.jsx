/* eslint-disable no-unused-vars */
import React from "react";
import { render, screen } from "@testing-library/react";
import { describe, expect, it } from "vitest";
import "@testing-library/jest-dom/vitest";
import App from "../src/App";

describe("testing components", () => {
  it("app component", () => {
    render(<App />);
    expect(screen.getByText("Vite + React")).toBeInTheDocument();
    screen.debug();
  });
});
