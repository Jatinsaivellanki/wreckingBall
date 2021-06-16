class Ball {

    constructor(x,y,width,height){

        var opts = {
            
            frictionAir : 0.005 ,
            density : 1.0

            
            
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
        fill("black");
        ellipse(0,0,this.width,this.height);
        
        
        
        pop();
    }
    
}