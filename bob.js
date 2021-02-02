class Bob{


    constructor(x,y,radius){
    
        var    options={
            isStatic:true,
            restitution:0.3,
            friction:0.5,
            density:0.5
         }
        this.body=Bodies.circle(x,y,radius,options);
        this.radius = radius*2;
        

       // this.image.scale =70.0;
    
        
       World.add(world, this.body);
    
       
    
    }
    
    
    
    display(){
    
    
    
        var pos = this.body.position;
        
        push();
        translate(pos.x,pos.y);
        
      ellipseMode(RADIUS);
       fill("pink");
        
     ellipse(0,0,this.radius,this.radius);
        pop();
    
    
    
    }
    
    
    
}    
