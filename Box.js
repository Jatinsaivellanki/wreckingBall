class Box {

    constructor(x,y,width,height){

        var opts = {
            restitution : 0.8 ,
            friction : 1.0 ,
            density : 0.04
            
        }

        this.body = Bodies.rectangle(x,y,width,height,opts);
        World.add(world,this.body);
        this.width = width;
        this.height = height;

    }

    display(){

        var pos = this.body.position;
        var angle = this.body.angle;
        push();
        translate(pos.x,pos.y);
        rotate(angle);
        rectMode(CENTER);
        fill("yellow");
        strokeWeight(4);
        stroke("red");
        rect(0,0,this.width,this.height);
        pop();
    }
    
}