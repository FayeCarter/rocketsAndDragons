import React from "react";
import axios from "axios";
import { mount } from 'enzyme';
import waitUntil from 'async-wait-until';
import { act } from 'react-dom/test-utils';

import App from "../App";
import { rocketsMock } from './fixtures/APIMocks';

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

    it("When `Get Rockets` button is pressed, rocket names are rendered`", async() => {
      const wrapper = mount(<App />)

      const response = rocketsMock;
      axios.get.mockResolvedValue(response);

      await act(async () => {
        wrapper.find("button").simulate("click")
        await waitUntil(() => wrapper.find(".rocket"))
      });
      
      expect(wrapper.text()).toContain("Falcon 1");
      expect(wrapper.text()).toContain("Falcon 9");
    });
  })
})