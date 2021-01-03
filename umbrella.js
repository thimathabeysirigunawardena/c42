
class Umbrella {
    constructor(x, y, width, height) {
      var options = { 
        density: 1, 
        friction: 0};

      
      this.image = loadImage("sprites/walking_6.png");
      this.body = Bodies.rectangle(x, y, width, height, options);
      this.width = width;
      this.height = height;
      World.add(World, this.body);
    }
  
    display() {
      var angle = this.body.angle;
      push();
      translate(this.body.position.x, this.body.position.y);
      rotate(angle);
      ellipse(0, 0, this.width, this.height);
      pop();
    }
  }
  