const Square = require("./square");

describe("Square", () => {
  // A positive test for Square is created to check that the render function does in fact return 
// the shape dimmensions and fill color.
    describe("render", () => {
      it("should return a string for the corresponding SVG file with the given shape color", () => {
        //Act
        const mySquare = new Square('hey', 'black', 'pink');
        // Assert
        expect(mySquare.render('orange')).toBe('<rect x="50" y="20" width="200" height="200" fill= "orange"/>');
      });
    });
  });
  