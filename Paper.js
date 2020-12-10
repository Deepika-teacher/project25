class Paper{
    constructor(x,y){
        var paper_options={
            restitution:0.3,
            isStatic:false,
            friction:0.5,
            density:1.2
        }
        this.paperBody=Bodies.circle(x,y,25,paper_options);
        this.image=loadImage("Paper.png");
        World.add(myWorld,this.paperBody);
        this.radius=70;
    }

    display(){
        var pos=this.paperBody.position;

        push();
        translate(pos.x,pos.y);
        imageMode(CENTER);
        image(this.image,0,0,70,70);
        pop();
    }
}
