
  class Dustbin{
    constructor(x, y, w, h) {
      var options = {
        isStatic:true,
      }
      this.body = Bodies.rectangle(x,y,w,h,options);
      this.h = 150;
      this.w = 150;
      
      this.image = loadImage("sprites/dbg.png");
      World.add(world,this.body);
      
      }
      display(){
        var angle = this.body.angle;
        push();
        translate(this.body.position.x, this.body.position.y);
        rotate(angle);
        imageMode(CENTER);
        image(this.image, 0, 0, this.h, this.w);
        pop();
       
    }
  }
