import React from "react";
import { mount } from 'enzyme';
import { singleRocketMock } from './fixtures/APIMocks';

import Rocket from "../components/Rocket";

describe("Rocket testing", () => {

  let wrapper;

  beforeEach(() => {
    const data = singleRocketMock;
    wrapper = mount(<Rocket data={data} />);
  })


  it("renders Rocket's passed name", () => {
    expect(wrapper.text()).toContain("The Falcon 1");
  });

  it("renders Rocket's passed description", () => {
    const description = "The Falcon 1 was an expendable launch system privately developed and manufactured by SpaceX during 2006-2009.";
    expect(wrapper.text()).toContain(description);
  });

});