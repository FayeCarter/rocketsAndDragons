import React from "react";
import { mount } from "enzyme";
import { singleDragonMock } from "./fixtures/APIMocks";

import Dragon from "../components/Dragon";

describe("Dragon testing", () => {

  let wrapper;

  beforeEach(() => {
    const data = singleDragonMock;
    wrapper = mount(<Dragon data={data} />);
  });

  it("Renders Dragon's passed name", () => {
    expect(wrapper.text()).toContain("Dragon 1");
  });

  it("Renders Dragon's passed description", () => {
    const description = "Dragon is a reusable spacecraft developed by SpaceX, an American private space transportation company based in Hawthorne, California";
    expect(wrapper.text()).toContain(description);
  });

  it("Renders Dragons's basic info from passed data on first page", () => {
    const basicInfo = {
      "type": "capsule",
      "crew capacity": "0",
      "first-flight": "2010-12-08"
    };
    
    expect(wrapper.find(".basic-info").text()).toContain(basicInfo.type);
    expect(wrapper.find(".basic-info").text()).toContain(basicInfo["crew capacity"]);
    expect(wrapper.find(".basic-info").text()).toContain(basicInfo["first-flight"]);
  });
});
