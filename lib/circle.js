const Shapes = require("./shapes.js");


class Circle extends Shapes {
    constructor(shape, text, textColor, shapeColor) {
        super (shape, text, textColor, shapeColor)}
    render() {
        return `<circle cx="150" cy="125" r="80"   fill="${this.shapeColor}"/>`;
    }
}







module.exports = Circle;