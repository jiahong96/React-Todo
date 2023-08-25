import { render, screen } from "@testing-library/react";
import TodoListItem from "./TodoListItem";
import "@testing-library/jest-dom";
import userEvent from "@testing-library/user-event";

const mockUpdate = jest.fn();
const mockDelete = jest.fn();
const item = {
  id: 1,
  name: "Drink Coffee",
};

describe("TodoListItem.jsx", () => {
  const factory = () => {
    return {
      user: userEvent.setup(),
      ...render(
        <TodoListItem
          item={item}
          handleDelete={mockDelete}
          handleUpdate={mockUpdate}
        />
      ),
    };
  };

  it("should render", () => {
    factory();

    expect(screen.getByText("Drink Coffee")).toBeVisible();
    expect(screen.getByRole("button", { name: /update/i })).toBeVisible();
    expect(screen.getByRole("button", { name: /delete/i })).toBeVisible();
  });
  it("should allow update", async () => {
    const { user } = factory();

    const updateBtn = screen.getByRole("button", { name: /update/i });
    expect(updateBtn).toBeVisible();
    expect(mockUpdate.mock.calls.length).toBe(0);

    await user.click(updateBtn);
    expect(mockUpdate.mock.calls.length).toBe(1);
  });
  it("should allow delete", async () => {
    const { user } = factory();

    const deleteBtn = screen.getByRole("button", { name: /delete/i });
    expect(deleteBtn).toBeVisible();
    expect(mockDelete.mock.calls.length).toBe(0);

    await user.click(deleteBtn);
    expect(mockDelete.mock.calls.length).toBe(1);
  });
});
