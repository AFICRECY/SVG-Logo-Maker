// Constructor Circle is imported...do we have the constructor, though, in the original file?
const Circle = require("./circle");
// const shape = new Circle();
// shape.shapeColor("blue");
// expect(shape.render()).toEqual(
//   `<circle cx="25" cy="75" r="20"  fill="${this.shapeColor}"/>`
// );

// A testing suite for Circle is created.
describe("Circle", () => {
  // A test is created to check that modulus does in fact return the remainder of the quotient of the two numbers.
  describe("render", () => {
    it("should return a string for the corresponding SVG file with the given shape color", () => {
      // Arrange
      //const total = 0;
      const myCircle = new Circle('hey', 'black', 'pink');
      // Act
      //const arithmetic = new Arithmetic();
      // Assert
      // expect(arithmetic.modulus(2, 2)).toEqual(total);
      //expect(arithmetic.modulus(2, 2)).toBe(total);
      expect(myCircle.render('orange')).toBe('<circle cx="150" cy="125" r="80"   fill="orange"/>');
    });
  });
});
