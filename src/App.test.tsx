
import App from "./App";
import { test , expect} from "vitest";
import { render, screen, fireEvent } from "@testing-library/react";
import '@testing-library/jest-dom/vitest';

test("renders header", () => {
  render(<App />);
  const header = screen.getByText(/My Todos/i);
  expect(header).toBeInTheDocument();

  const button = screen.getByText("Add");
  fireEvent.click(button);
});