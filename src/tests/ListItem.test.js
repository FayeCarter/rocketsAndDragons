import React from "react";
import { mount } from 'enzyme';

import ListItem from "../components/ListItem";

describe("ListItem testing", () => {
  it("renders Item's passed name", () => {
    const wrapper = mount(<ListItem name="Rocket" />);
    expect(wrapper.text()).toContain("Rocket");
  });

  it("renders Item's passed description", () => {
    const description = "Rocket Description";
    const wrapper = mount(<ListItem description={description} />);

    expect(wrapper.text()).toContain(description);
  });

  it("renders Item's passed image", () => {
    const image = "Rocket Description";
    const wrapper = mount(<ListItem image={image} />);

    expect(wrapper.find("img").prop("src")).toEqual(image);
  });
});