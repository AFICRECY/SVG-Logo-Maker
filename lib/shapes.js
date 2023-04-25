class Shapes {
  constructor(shape, text, textColor, shapeColor) {
    this.shape = shape;
    this.text = text;
    this.textColor = textColor;
    this.shapeColor = shapeColor;
  }
}
// This code defines a Shapes class that takes four arguments (shape, text, textColor, and shapeColor) 
// in its constructor and assigns them to properties of the same name on the global object instance.



module.exports = Shapes;
// The module.exports statement exports the Shapes class, making it available for other modules to 
// import and use.