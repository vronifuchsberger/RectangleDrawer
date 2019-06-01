const drawRectangle = require("./rectangleDrawer");

test("draws a 2 by 2 rectangle", () => {
  expect("\n" + drawRectangle(2, 2)).toMatchSnapshot();
});

test("draws a 5 by 5 rectangle", () => {
  expect("\n" + drawRectangle(5, 5)).toMatchSnapshot();
});

test("draws a 5 by 3 rectangle", () => {
  expect("\n" + drawRectangle(5, 3)).toMatchSnapshot();
});

test("minimum size", () => {
  expect(() => drawRectangle(1, 2)).toThrow();
  expect(() => drawRectangle(3, 1)).toThrow();
});

test("infinite input", () => {
  expect(() => drawRectangle(Infinity, 3)).toThrow();
});

test("non numerical input", () => {
  expect(() => drawRectangle()).toThrow();
  expect(() => drawRectangle("test", 3)).toThrow();
  expect(() => drawRectangle(true, 3)).toThrow();
});

test("non integer input", () => {
  expect(() => drawRectangle(5.1, 3)).toThrow();
});
