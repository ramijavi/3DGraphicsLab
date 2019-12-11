var position,dir,velocity;

function setup() 
{
    createCanvas(600, 600);
    fill(0);
    position = createVector(0,0);
    dir = createVector(0,-1); 
    velocity = createVector(-0.4, -0.3);
}

function draw() 
{
    background(255);
    translate(width/2, height/2);
            
    translate(position.x,position.y);
    position = p5.Vector.add(position, velocity); 

    //your code here
    if(velocity.x > 0){
        rotate(acos(dir.dot(velocity)/(mag(dir.x, dir.y)*mag(velocity.x, velocity.y))), position);
    } else {
        rotate((2*Math.PI)-acos(dir.dot(velocity)/(mag(dir.x, dir.y)*mag(velocity.x, velocity.y))), position);
    }
        
    //if(velocity.x > 0){
    //    rotate(dir.angleBetween(velocity), position);    
    //} else {
    //    rotate((2*Math.PI)-dir.angleBetween(velocity), position);
    //}
    
    // Display the shape
    triangle(0, 0, -5, 15, 5, 15);
}
