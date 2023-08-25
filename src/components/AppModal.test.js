import AppModal from "./AppModal";
import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom";
import userEvent from "@testing-library/user-event";

describe("AppModal.jsx", () => {
  const factory = ({ children, props }) => {
    return render(<AppModal {...props}>{children}</AppModal>);
  };

  it("should render", () => {
    const body = <p>This is modal content</p>;
    factory({ children: body });

    expect(screen.getByRole("dialog", { hidden: true })).toBeInTheDocument();
    expect(screen.getByText("This is modal content")).toBeInTheDocument();
  });
  it("should render slots", () => {
    const header = (id) => <h1 id={id}>Modal Title</h1>;
    const body = <p>Modal Body</p>;
    const footer = <footer>Modal Footer</footer>;
    factory({ props: { header, body, footer } });

    expect(screen.getByText("Modal Title")).toBeInTheDocument();
    expect(screen.getByText("Modal Body")).toBeInTheDocument();
    expect(screen.getByText("Modal Footer")).toBeInTheDocument();
  });
});
