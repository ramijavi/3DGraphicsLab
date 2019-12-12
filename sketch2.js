var vector1, vector2, vector3;

function setup(){
    createCanvas(1200, 1200, WEBGL);
    
    vector1 = createVector(460, 340, 510);
    vector2 = createVector(250, 155, 290);
    
}

function draw(){
    background(255);
    
    camVector = createVector(mouseX,mouseY);
    camera(camVector.x*2, camVector.y*2, ((height/2) / tan(PI/6))*2, width/2, height/2, 0, 0, 1, 0);
    
    translate(width/2, height/2);
    
    strokeWeight(5);
    
    stroke('blue');
    line(vector1.x, vector1.y, vector1.z, 0, 0, 0);
    
    stroke('green');
    line(vector2.x, vector2.y, vector2.z, 0, 0, 0);
    
    let cross1 = vector1.cross(vector2);
    stroke('red');
    line(cross1.x, cross1.y, cross1.z, 0, 0, 0);
    
    let cross2 = vector2.cross(vector1);
    stroke('yellow');
    line(cross2.x, cross2.y, cross2.z, 0, 0, 0);
}
