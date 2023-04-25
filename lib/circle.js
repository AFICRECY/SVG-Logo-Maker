const Shapes = require("./shapes.js");

//const someCircle = new Circle('hey', 'black', 'pink')

class Circle extends Shapes {
    constructor(text, textColor, shapeColor) {
        super(text, textColor, shapeColor)
        this.shape = "Circle"
    }

    render(color) {
        return `<circle cx="150" cy="125" r="80"   fill="${color}"/>`;
    }
}

module.exports = Circle;