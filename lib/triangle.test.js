const Triangle = require("./triangle");

const shape = new Triangle();
shape.shapeColor("blue");
expect(shape.render()).toEqual(`<polygon points="150, 18 244, 182 56, 182" fill="${this.shapeColor}"/>`);