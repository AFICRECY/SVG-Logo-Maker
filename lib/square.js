const Shapes = require("./shapes.js");

class Square extends Shapes{
    render(color) {
        return `<rect x="50" y="20" width="200" height="200" fill= "${color}"/>`
    }
}
module.exports = Square;