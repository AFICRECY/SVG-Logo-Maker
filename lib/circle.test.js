const Circle = require("./circle");


const shape = new Circle();
shape.shapeColor("blue");
expect(shape.render()).toEqual(`<circle cx="25" cy="75" r="20"  fill="${this.shapeColor}"/>`);