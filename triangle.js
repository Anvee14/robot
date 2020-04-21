class Triangle{
constructor(x,y,sides,radius){
    var options = {
        'restitution':0.8,
        'friction':1.0,
        'density':1.0
    }
    this.body = Matter.Bodies.polygon(x, y, sides, radius, options);
    this.width = width;
    this.height = height;
    World.add(world,this.body)
}
display(){
   
   triangle(30, 75, 58, 20, 86, 75);
}

    
}