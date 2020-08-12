import React from "react";
import App from "../App";

import { mount } from 'enzyme';

describe("App testing", () => {
  test("renders with `Rockets and Dragons` title", () => {
    const wrapper = mount(<App />)
    expect(wrapper.find("h1").text()).toContain("Rockets and Dragons");
  });
})