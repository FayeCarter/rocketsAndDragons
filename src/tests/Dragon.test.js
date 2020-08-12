import React from "react";
import { mount } from 'enzyme';
import { singleDragonMock } from './fixtures/APIMocks';

import Dragon from "../components/Dragon";

describe("Dragon testing", () => {

  let wrapper;

  beforeEach(() => {
    const data = singleDragonMock;
    wrapper = mount(<Dragon data={data} />);
  })

  it("renders Dragon's passed name", () => {
    expect(wrapper.text()).toContain("Dragon 1");
  });

  it("renders Dragon's passed description", () => {
    const description = "Dragon is a reusable spacecraft developed by SpaceX, an American private space transportation company based in Hawthorne, California";
    expect(wrapper.text()).toContain(description);
  });

});