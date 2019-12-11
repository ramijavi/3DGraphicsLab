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

// draw an arrow for a vector at a given base position
function drawArrow(base, vec, myColor) {
    push();
    stroke(myColor);
    strokeWeight(3);
    fill(myColor);
    translate(base.x, base.y);
    line(0, 0, vec.x, vec.y);
    rotate(vec.heading());
    let arrowSize = 7;
    translate(vec.mag() - arrowSize, 0);
    triangle(0, arrowSize / 2, 0, -arrowSize / 2, arrowSize, 0);
    pop();
}
