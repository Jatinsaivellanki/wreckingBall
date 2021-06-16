class Ground {

    constructor(x,y,width,height){

        var opts = {
            isStatic : true
        }

        this.body = Bodies.rectangle(x,y,width,height,opts);
        World.add(world,this.body);
        this.width = width;
        this.height = height;

    }

    display(){

        var pos = this.body.position;
        rectMode(CENTER);
        fill("blue");
        rect(pos.x,pos.y,this.width,this.height);
    }
    
}