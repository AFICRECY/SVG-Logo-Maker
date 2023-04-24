const Shapes = require("./shapes.js");

class Square extends Shapes{
    constructor(shape, text, textColor, shapeColor) {
        super (shape, text, textColor, shapeColor)}
    render() {
        return `<rect x="10" y="10" width="30" height="30" fill= "${this.shapeColor}"/>`
    }
}
module.exports = Square;