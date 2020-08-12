import React from "react";
import { mount } from 'enzyme';
import { singleRocketMock } from './fixtures/APIMocks';

import ListItem from "../components/ListItem";

describe("ListItem testing", () => {

  let wrapper;

  beforeEach(() => {
    const data = singleRocketMock;
    wrapper = mount(<ListItem data={data} />);
  })


  it("renders Item's passed name", () => {
    expect(wrapper.text()).toContain("The Falcon 1");
  });

  it("renders Item's passed description", () => {
    const description = "The Falcon 1 was an expendable launch system privately developed and manufactured by SpaceX during 2006-2009.";
    expect(wrapper.text()).toContain(description);
  });

  it("renders Item's passed image", () => {
    const image = "https://imgur.com/azYafd8.jpg";
    expect(wrapper.find("img").prop("src")).toEqual(image);
  });
});