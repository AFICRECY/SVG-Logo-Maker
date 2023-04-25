// This imports a module named Circle from a file named circle.js 
// located in the same directory as the current file.
const Circle = require("./circle");


describe("Circle", () => {
// A positive test for Circle is created to check that the render function does in fact return 
// the shape dimensions and fill color.
    describe("render", () => {
    it("should return a string for the corresponding SVG file with the given shape color", () => {
      //Act
      const myCircle = new Circle('hey', 'black', 'pink');
      // Assert
      expect(myCircle.render('orange')).toBe('<circle cx="150" cy="125" r="80"   fill="orange"/>');
    });
  });
});
