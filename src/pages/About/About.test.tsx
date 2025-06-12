import { render, screen } from "@testing-library/react";
import About from "./About";

describe("About Component Structure", () => {
  test("renders all components with correct hierarchy", () => {
    render(<About />);

    expect(screen.getByTestId("page-container")).toBeInTheDocument();
    expect(screen.getByTestId("page-title")).toBeInTheDocument();
    expect(screen.getByTestId("page-content")).toBeInTheDocument();
    expect(screen.getByTestId("description")).toBeInTheDocument();
    
    const container = screen.getByTestId("page-container");
    expect(container).toContainElement(screen.getByTestId("page-title"));
    expect(container).toContainElement(screen.getByTestId("page-content"));
  });
});
