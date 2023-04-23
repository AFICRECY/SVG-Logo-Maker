const Shape = require("./shape");



class Triangle extends Triangle {
    render() {
        return `<polygon points="150, 18 244, 182 56, 182" fill= "${this.shapeColor}" />`;
    }
}






module.exports = Triangle;