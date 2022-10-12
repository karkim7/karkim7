function setup() {
    createCanvas(600, 400);background(0)
}
function draw() {
background(0)

vx=vx+0.5
vy=vy+0.5
ellipse(px+vx, py+vy, radius, radius);

}
