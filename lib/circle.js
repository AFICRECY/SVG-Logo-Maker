const Shapes = require("./shapes.js");


class Circle extends Shapes {
    constructor(shape, text, textColor, shapeColor) {
        super (shape, text, textColor, shapeColor)}
    render() {
        return `<circle cx="25" cy="75" r="20"  fill="${this.shapeColor}"/>`;
    }
}







module.exports = Circle;