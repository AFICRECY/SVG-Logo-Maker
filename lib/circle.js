const Shapes = require("./shapes.js");


class Circle extends Shapes {
    render(color) {
        return `<circle cx="150" cy="125" r="80"   fill="${color}"/>`;
    }
}

module.exports = Circle;