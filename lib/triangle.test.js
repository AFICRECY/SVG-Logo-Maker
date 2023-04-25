const Triangle = require("./triangle");

// const shape = new Triangle();
// shape.shapeColor("blue");
// expect(shape.render()).toEqual(`<polygon points="150, 18 244, 182 56, 182" fill="${this.shapeColor}"/>`);

describe("Triangle", () => {
    // A test is created to check that modulus does in fact return the remainder of the quotient of the two numbers.
    describe("render", () => {
      it("should return a string for the corresponding SVG file with the given shape color", () => {
        // Arrange
        //const total = 0;
        const myTriangle = new Triangle('hey', 'black', 'pink');
        // Act
        //const arithmetic = new Arithmetic();
        // Assert
        // expect(arithmetic.modulus(2, 2)).toEqual(total);
        //expect(arithmetic.modulus(2, 2)).toBe(total);
        expect(myTriangle.render('orange')).toBe("<polygon points='150, 18 244, 182 56, 182' fill='orange' />");
      });
    });
  });