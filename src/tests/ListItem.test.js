import React from "react";
import { mount } from "enzyme";
import { singleRocketMock } from "./fixtures/APIMocks";

import ListItem from "../components/ListItem";

describe("ListItem testing", () => {

  let wrapper;

  beforeEach(() => {
    const data = singleRocketMock;
    wrapper = mount(<ListItem type="rockets" data={data} />);
  });

  it("Renders Item's passed name", () => {
    expect(wrapper.find("h2").text()).toEqual("Falcon 1");
  });

  it("Renders Item's passed image", () => {
    const image = "https://imgur.com/azYafd8.jpg";
    expect(wrapper.find("img").prop("src")).toEqual(image);
  });
});
