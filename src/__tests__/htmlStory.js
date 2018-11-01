import React from "react";
import { htmlStory } from "../index";
import renderer from "react-test-renderer";
import { shallow } from "enzyme";

test("xxx", () => {
  const component = renderer.create(htmlStory({ html: "xxx" })());
  let tree = component.toJSON();
  expect(tree).toMatchSnapshot();
});

test("check innerHtml", () => {
  const dom = shallow(htmlStory({ html: "xxx" })());
  expect(dom.html()).toEqual("<div>xxx</div>");
});
