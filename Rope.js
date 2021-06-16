class Rope{

    constructor(bodyA,pointB){

        var opts =  {

            bodyA : bodyA,
            pointB : pointB,
            stiffness : 1.2 ,
            length : 250

        }

        this.rope = Constraint.create(opts);
        World.add(world,this.rope);
        this.pointB = pointB;



    }

    fly(){
        this.rope.bodyA = null;
    }
    attach(body){
        this.rope.bodyA = body;
    }

    display (){

        if(this.rope.bodyA){
            var pointA = this.rope.bodyA.position;
            var pointB = this.pointB;
            push();
            stroke("purple");
            strokeWeight(4);
            line(pointB.x,pointB.y,pointA.x,pointA.y);
            pop();

        }

    }
}