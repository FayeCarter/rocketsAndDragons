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

  describe('Rendered Info', () => {
    it("renders Rocket's basic info from passed data on first page", () => {
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
  
    xit("renders Rocket's dimensions from passed data", () => {
      const dimensions = {
        "height": "22.25",
        "diameter": "1.68",
        "mass": "30146"
      }
  
      expect(wrapper.find(".dimensions").text()).toContain(dimensions.height);
      expect(wrapper.find(".dimensions").text()).toContain(dimensions.diameter);
      expect(wrapper.find(".dimensions").text()).toContain(dimensions.mass);
    });
  
    xit("renders Rocket's engine information from passed data", () => {
      const engine = {
        "engines": "1",
        "type": "merlin",
        "version": "1C",
        "layout": "single",
        "engine-loss": "0",
        "propellant1": "liquid oxygen",
        "propellant2": "RP-1 kerosene",
        "thrust-2-weight": "96",
        "ips-sea": "267",
        "thrust-sea": "420",
        "ips-vacuum": "304",
        "thrust-vacuum": "480"
      }
  
      expect(wrapper.find(".engines").text()).toContain(engine.engines);
      expect(wrapper.find(".engines").text()).toContain(engine.type);
      expect(wrapper.find(".engines").text()).toContain(engine.version);
      expect(wrapper.find(".engines").text()).toContain(engine.layout);
      expect(wrapper.find(".engines").text()).toContain(engine["engine-loss"]);
      expect(wrapper.find(".engines").text()).toContain(engine.propellant1);
      expect(wrapper.find(".engines").text()).toContain(engine.propellant2);
      expect(wrapper.find(".engines").text()).toContain(engine["thrust-2-weight"]);
      expect(wrapper.find(".engines").text()).toContain(engine["ips-sea"]);
      expect(wrapper.find(".engines").text()).toContain(engine["thrust-sea"]);
      expect(wrapper.find(".engines").text()).toContain(engine["ips-vacuum"]);
      expect(wrapper.find(".engines").text()).toContain(engine["thrust-vacuum"]);
    });
  });
});
