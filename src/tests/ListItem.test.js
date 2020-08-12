import React from "react";
import { mount } from 'enzyme';

import ListItem from "../components/ListItem";

describe("ListItem testing", () => {
  it("renders Item's passed name", () => {
    const wrapper = mount(<ListItem name="Rocket" />)
    expect(wrapper.text()).toContain("Rocket");
  });
});