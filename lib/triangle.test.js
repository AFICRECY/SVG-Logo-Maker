const Triangle = require("./triangle");


describe("Triangle", () => {
 // A positive test for Triangle is created to check that the render function does in fact return 
// the shape dimmensions and fill color.
    describe("render", () => {
      it("should return a string for the corresponding SVG file with the given shape color", () => {
        // Act
        const myTriangle = new Triangle('hey', 'black', 'pink');
        // Assert
        expect(myTriangle.render('orange')).toBe("<polygon points='150, 18 244, 182 56, 182' fill='orange' />");
      });
    });
  });