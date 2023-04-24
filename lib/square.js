const Shapes = require("./shapes.js");

class Square extends Shapes{
    constructor(shape, text, textColor, shapeColor) {
        super (shape, text, textColor, shapeColor)}
    render() {
        return `<rect x="50" y="20" width="200" height="200" fill= "${this.shapeColor}"/>`
    }
}
module.exports = Square;