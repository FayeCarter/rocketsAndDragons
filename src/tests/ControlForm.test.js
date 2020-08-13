import React from "react";
import { mount } from 'enzyme';

import ControlForm from "../components/ControlForm";

describe("ControlForm testing", () => {

  let wrapper;

  beforeEach(() => {
    wrapper = mount(<ControlForm />);
  })

  it("renders Two arrows", () => {
    expect(wrapper.html()).toContain("left-arrow");
    expect(wrapper.html()).toContain("right-arrow");
  });
});