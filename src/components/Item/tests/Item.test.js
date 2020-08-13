import React from "react";
import { mount } from "enzyme";
import { singleRocketMock } from "../../fixtures/APIMocks";

import Item from "../Item";

describe("Item testing", () => {

  let wrapper;

  beforeEach(() => {
    const data = singleRocketMock;
    wrapper = mount(<Item type="rockets" data={data} />);
  });

  it("Renders Item's passed name", () => {
    expect(wrapper.find("h2").text()).toEqual("Falcon 1");
  });

  it("Renders Item's passed image", () => {
    const image = "https://imgur.com/azYafd8.jpg";
    expect(wrapper.find("img").prop("src")).toEqual(image);
  });
});
