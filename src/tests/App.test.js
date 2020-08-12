import React from "react";
import axios from "axios";
import { mount } from 'enzyme';
import waitUntil from 'async-wait-until';

import App from "../App";
import { rocketMock } from './fixtures/APIMocks';

jest.mock('axios');

describe("App testing", () => {
  it("renders with `Rockets and Dragons` title", () => {
    const wrapper = mount(<App />)
    expect(wrapper.find("h1").text()).toContain("Rockets and Dragons");
  });

  describe("Get Rockets", () => {
    it("`Get Rockets` button is rendered`", () => {
      const wrapper = mount(<App />)
      expect(wrapper.find("button").text()).toContain("Get rockets");
    });
  })
})