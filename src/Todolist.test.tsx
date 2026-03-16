import TodoList from "./TodoList";
import { test } from "vitest";
import { render } from "@testing-library/react";

test("add todo", () => {
  render(<TodoList />);
});
