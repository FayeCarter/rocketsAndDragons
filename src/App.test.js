import React from "react";
import axios from "axios";
import { mount } from "enzyme";
import waitUntil from "async-wait-until";
import { act } from "react-dom/test-utils";

import App from "./App";

import { 
  rocketsMock, 
  dragonsMock, 
  singleDragonMock 
} from './components/fixtures/APIMocks';

jest.mock('axios');

describe("App testing", () => {

  let wrapper;

  beforeEach(() => {
    const data = singleDragonMock;
    wrapper = mount(<App />);
  });

  it("renders with `Rockets and Dragons` title", () => {
    expect(wrapper.find("h1").text()).toContain("Rockets and Dragons");
  });

  describe("Get Rockets", () => {
    it("`Get Rockets` button is rendered`", () => {
        expect(wrapper.find("button[children='Get Rockets']").text()).toEqual("Get Rockets");
    });

    it("When `Get Rockets` button is pressed, rocket names are rendered`", async() => {
  
      const response = rocketsMock;
      axios.get.mockResolvedValue(response);

      await act(async () => {
        wrapper.find("button[children='Get Rockets']").simulate("click");
        await waitUntil(() => wrapper.find(".rocket"));
      });

      expect(wrapper.text()).toContain("Falcon 1");
      expect(wrapper.text()).toContain("Falcon 9");
    });
  });

  describe("Get Dragons", () => {
    it("`Get Dragons` button is rendered`", () => {
        expect(wrapper.find("button[children='Get Dragons']").text()).toEqual("Get Dragons");
    });

    it("When `Get Dragons` button is pressed, dragon names are rendered`", async() => {
  
      const response = dragonsMock;
      axios.get.mockResolvedValue(response);

      await act(async () => {
        wrapper.find("button[children='Get Dragons']").simulate("click");
        await waitUntil(() => wrapper.find(".dragon"));
      });

      expect(wrapper.text()).toContain("Dragon 1");
      expect(wrapper.text()).toContain("Dragon 2");
    });
  });
});
