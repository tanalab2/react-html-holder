import React from "react";
import { htmlStory } from "../index";
import renderer from "react-test-renderer";
import { shallow, mount } from "enzyme";

test("xxx", () => {
  const component = renderer.create(htmlStory({ html: "xxx" })());
  let tree = component.toJSON();
  expect(tree).toMatchSnapshot();
});

test("check html", () => {
  const dom = mount(htmlStory({ html: "xxx" })());
  expect(dom.text()).toEqual("xxx");
});

test("check html with style", () => {
  const dom = mount(htmlStory({ html: "xxx", styles: {backgroundColor: 'black', color: 'white'}})());
  expect(dom.getDOMNode().getAttribute('style')).toEqual("background-color: black; color: white;");
});
