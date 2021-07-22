class Paper{
    constructor(x,y){
    var options = {
    restitution:0.1,
    density:0.1,
    friction:0.2
}
this.body = Bodies.rectangle(x, y, width, height, options);
this.width = 40;
this.height = 40;

this.image = loadImage("sprites/pp.png");

World.add(world,this.body)

    }
    display(){
        var angle =this.body.angle;
        push();
        translate(this.body.position.x, this.body.position.y);
        rotate(angle);
        fill(255)
        imageMode(CENTER)
        image(this.image,10,10,this.width,this.height)
        pop();
    }
}