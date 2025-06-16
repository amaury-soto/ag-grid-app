import { render, screen, act } from "@testing-library/react";
import "@testing-library/jest-dom";
import GridExample from "./GridExample";

// AG Grid Mock
jest.mock("ag-grid-react", () => ({
  AgGridReact: () => <div data-testid="ag-grid">AG Grid Component</div>,
}));

// ModuleRegistry Mock
jest.mock("ag-grid-community", () => ({
  ModuleRegistry: {
    registerModules: jest.fn(),
  },
  AllCommunityModule: {},
  ClientSideRowModelModule: {},
}));

// Mock data
const mockUsers = [
  {
    id: 1,
    name: "John Doe",
    username: "johndoe",
    email: "john@example.com",
    address: { city: "New York" },
  },
];

// Mock service
jest.mock("../../../services/api/userService", () => ({
  getUsers: jest.fn(),
}));

describe("GridExample Component", () => {
  beforeEach(() => {
    jest.clearAllMocks();
  });

  test("renders title correctly", async () => {
    await act(async () => {
      render(<GridExample />);
    });
    expect(screen.getByText("AG Grid Example")).toBeInTheDocument();
  });

  test("renders AG Grid component", async () => {
    await act(async () => {
      render(<GridExample />);
    });
    expect(screen.getByTestId("ag-grid")).toBeInTheDocument();
  });

  test("handles data fetching and rendering", async () => {
    const { getUsers } = require("../../../services/api/userService");
    getUsers.mockResolvedValueOnce(mockUsers);

    await act(async () => {
      render(<GridExample />);
    });

    // Verify that the grid is present
    expect(screen.getByTestId("ag-grid")).toBeInTheDocument();

    // Verify that getUsers was called
    expect(getUsers).toHaveBeenCalledTimes(1);
  });

  test("handles API error", async () => {
    const consoleSpy = jest.spyOn(console, "error").mockImplementation();
    const { getUsers } = require("../../../services/api/userService");
    getUsers.mockRejectedValueOnce(new Error("API Error"));

    await act(async () => {
      render(<GridExample />);
    });

    expect(consoleSpy).toHaveBeenCalled();
    consoleSpy.mockRestore();
  });
});
