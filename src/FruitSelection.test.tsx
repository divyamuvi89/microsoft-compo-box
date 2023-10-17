import React from "react";
import renderer from "react-test-renderer";
import FruitSelection from "./FruitSelection"; // Update the path to your component file

test("renders FruitSelection component correctly", () => {
  const tree = renderer.create(<FruitSelection />).toJSON();
  expect(tree).toMatchSnapshot();
});
