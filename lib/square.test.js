const Square = require("./square");

// const shape = new Square();
// shape.shapeColor("blue");
// expect(shape.render()).toEqual(`<rect x="10" y="10" width="30" height="30" fill= "${this.shapeColor}"/>`);

describe("Square", () => {
    // A test is created to check that modulus does in fact return the remainder of the quotient of the two numbers.
    describe("render", () => {
      it("should return a string for the corresponding SVG file with the given shape color", () => {
        // Arrange
        //const total = 0;
        const mySquare = new Square('hey', 'black', 'pink');
        // Act
        //const arithmetic = new Arithmetic();
        // Assert
        // expect(arithmetic.modulus(2, 2)).toEqual(total);
        //expect(arithmetic.modulus(2, 2)).toBe(total);
        expect(mySquare.render('orange')).toBe('<rect x="50" y="20" width="200" height="200" fill= "orange"/>');
      });
    });
  });
  