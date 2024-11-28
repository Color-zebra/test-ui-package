import { cleanup, render, screen } from "@testing-library/react";
import { Button } from "./Button";

describe("Button", () => {
  afterEach(() => cleanup());

  it("just render", () => {
    render(<Button text="jest test" />);
    const button = screen.getByTestId("root-button");

    expect(button).toBeInTheDocument();
  });
});
