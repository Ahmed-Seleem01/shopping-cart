import React from "react";
import { render, screen } from "@testing-library/react";
import Homepage from "../components/Homepage";

describe("check the snapshot", ()=>{
  it("check the component", ()=>{
    const {container} = render(<Homepage />)
    expect(container).toMatchSnapshot();
  })
})