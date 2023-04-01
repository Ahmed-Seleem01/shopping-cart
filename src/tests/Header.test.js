import React from "react";
import { render, screen } from "@testing-library/react";
import Header from "../components/Header";

describe("test the whole component", () => {
  it("check the snapshot", ()=>{
    const { container } = render(<Header />);
    expect(container).toMatchSnapshot();
  })
});

describe("test the header", () => {
  it("check the site icon", () => {
    render(<Header />);
    const icon = screen.getByAltText("site icon");
    expect(icon.alt).toBe("site icon");
  });

  it("check the site title", () => {
    render(<Header />);
    const title = screen.getByRole("heading");
    expect(title.textContent).toBe("Ingrediento");
  });

  it("check the cart icon", () => {
    render(<Header />);
    const icon = screen.getByAltText("cart icon");
    expect(icon.alt).toBe("cart icon");
  });
});
