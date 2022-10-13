function setup() {
    createCanvas (600, 400);
    background(0)

}

px = 0
py =  0

vx = 1
vy = 1

radius = 30

function draw () {
    background(0)
    px = px + vx
    py = py + vy

    if (px > 600 || px  <0){
        vx = -vx
    }

    if (py > 400 || py < 0){
        vy = -vy
    }
    fill(255, 0, 0)


    ellipse(px, py, radius, radius);
}