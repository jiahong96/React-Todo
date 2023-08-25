import SearchInput from "./SearchInput";
import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom";
import userEvent from "@testing-library/user-event";

const mockInputCallback = jest.fn();

describe("SearchInput.jsx", () => {
  const factory = () => {
    return {
      user: userEvent.setup(),
      ...render(<SearchInput handleInput={mockInputCallback} />),
    };
  };
  it("should render", () => {
    factory();

    expect(screen.getByLabelText(/search input/i)).toBeVisible();
  });
  it("should trigger input callback", async () => {
    const { user } = factory();

    const searchInput = screen.getByLabelText(/search input/i);
    expect(searchInput).toBeVisible();
    expect(mockInputCallback.mock.calls.length).toBe(0);

    await user.type(searchInput, "abcd");
    expect(mockInputCallback.mock.calls.length).toBe(4);
  });
});
