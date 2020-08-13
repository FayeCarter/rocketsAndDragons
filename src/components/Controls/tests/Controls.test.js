import React from "react";
import { mount } from "enzyme";

import Controls from "../Controls";

describe("ControlForm testing", () => {

  let wrapper;

  beforeEach(() => {
    let pages = ["page 1", "page 2", "page 3"];
    wrapper = mount(<Controls titles={pages} />);
  });

  it("Renders Two arrows", () => {
    expect(wrapper.html()).toContain("left-arrow");
    expect(wrapper.html()).toContain("right-arrow");
  });

  it("Renders passed page titles", () => {
    expect(wrapper.text()).toContain("page 1");
    expect(wrapper.text()).toContain("page 2");
    expect(wrapper.text()).toContain("page 3");
  });
});
