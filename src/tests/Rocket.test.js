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

  it("renders Rocket's basic info from passed data", () => {
    const basicInfo = {
      "country": "Republic of the Marshall Islands",
      "first-flight": "2006-03-24",
      "cost": "6700000",
      "success": "40"
    }

    expect(wrapper.find(".basic-info").text()).toContain(basicInfo.country);
    expect(wrapper.find(".basic-info").text()).toContain(basicInfo["first-flight"]);
    expect(wrapper.find(".basic-info").text()).toContain(basicInfo.cost);
    expect(wrapper.find(".basic-info").text()).toContain(basicInfo.success);

  });
});
