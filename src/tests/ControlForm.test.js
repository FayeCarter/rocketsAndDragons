import React from "react";
import { mount } from 'enzyme';

import ControlForm from "../components/ControlForm";

describe("ControlForm testing", () => {

  let wrapper;

  beforeEach(() => {
    let pages = ["page 1", "page 2", "page 3"];
    wrapper = mount(<ControlForm titles={pages} />);
  })

  it("renders Two arrows", () => {
    expect(wrapper.html()).toContain("left-arrow");
    expect(wrapper.html()).toContain("right-arrow");
  });

  it("renders passed page ttitles", () => {
    expect(wrapper.text()).toContain("page 1");
    expect(wrapper.text()).toContain("page 2");
    expect(wrapper.text()).toContain("page 3");
  });
});