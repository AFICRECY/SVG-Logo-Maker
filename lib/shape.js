class Shape{
  setColor(color){
    this.shapeColor=color;
  }
  render(){
    throw new Error('Child class must implement a render() method');
  }
}

module.exports=Shape;