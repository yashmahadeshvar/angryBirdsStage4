class Chain{
    constructor(bodyA,bodyB){

        var options = {
            bodyA: bodyA,
            bodyB: bodyB,
            length: 10,
            stiffness: 0.04
        }
    
        this.chain = Constraint.create(options);
        World.add(world,this.chain);
    
    }

    display(){

                //drawing a line to see the connection
        var pointA = this.chain.bodyA.position;
        var pointB = this.chain.bodyB.position;

        strokeWeight(3);
        line(pointA.x,pointA.y,pointB.x,pointB.y);
    }
}