import { render, screen } from "@testing-library/react";
import IndexPage from "../";

describe("Index page", () => {
  it("renders without crashing", () => {
    render(<IndexPage />);
    expect(
      screen.getByRole("heading", { name: /hello Next.js/i })
    ).toBeInTheDocument();
  });
});
