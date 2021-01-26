var canvas;
var mic;
let width = 1920;
var body = document.body,
    html = document.documentElement;

let height = Math.max( body.scrollHeight, body.offsetHeight,
    html.clientHeight, html.scrollHeight, html.offsetHeight );
console.log(height);
// let height = document.body.he;
let offset = 100;

let flow_cell_size = 10;

let noise_size = 0.003;
let noise_radius = 0.1;

let flow_width = (width + offset * 2) / flow_cell_size;
let flow_height = (height + offset * 2) / flow_cell_size;

let noise_grid = [];
let flow_grid = [];

let number_of_particles = 700;
let particles = [];
let tick = 0;

function windowResized() {
    //console.log('resized');
    resizeCanvas(windowWidth, windowHeight);
}

function setup() {

    // canvas = createCanvas(windowWidth, windowHeight);
    canvas = createCanvas(width, height);
    canvas.background('#0E192B');
    // canvas.background('#022');
    // canvas.smooth();
    // canvas.noStroke();
    canvas.position(0, 0);
    canvas.style('z-index', '-1');
    init_particles();
    init_flow();
    // mic = new p5.AudioIn();
    // mic.start();
    //background(175);
}

function keyPressed() {
    clear();
}

function draw() {
    translate(-offset, -offset);
    //display_flow();
    update_particles();
    display_particles();
    tick += 0.002;
}

function init_particles() {
    for (var i = 0; i < number_of_particles; i++) {
        let r = random(width + 2 * offset);
        let q = random(height + 2 * offset);
        particles.push({
            prev: createVector(r, q),
            pos: createVector(r, q),
            vel: createVector(0, 0),
            acc: createVector(0, 0),
            col: random(255),
            seed: i
        });
    }
}

function update_particles() {
    for (var i = 0; i < number_of_particles; i++) {
        let prt = particles[i];
        let flow = get_flow(prt.pos.x, prt.pos.y);

        prt.prev.x = prt.pos.x;
        prt.prev.y = prt.pos.y;

        prt.pos.x = mod(prt.pos.x + prt.vel.x, width + 2 * offset);
        prt.pos.y = mod(prt.pos.y + prt.vel.y, height + 2 * offset);

        prt.vel
            .add(prt.acc)
            .normalize()
            .mult(2.2);

        //prt.acc = p5.Vector.fromAngle(noise(prt.seed * 10, tick) * TAU).mult(0.01);
        prt.acc = createVector(0, 0);
        prt.acc.add(flow).mult(3);
    }
}

function init_flow() {
    for (let i = 0; i < flow_height; i++) {
        let row = [];
        for (let j = 0; j < flow_width; j++) {
            row.push(calculate_flow(j * noise_size, i * noise_size, noise_radius));
        }
        flow_grid.push(row);
    }
}

function calculate_flow(x, y, r) {
    //console.log(x,y);
    let high_val = 0;
    let low_val = 1;
    let high_pos = createVector(0, 0);
    let low_pos = createVector(0, 0);

    for (var i = 0; i < 100; i++) {
        let angle = i / 100 * TAU;
        let pos = createVector(x + cos(angle) * r, y + sin(angle) * r);
        let val = noise(pos.x, pos.y);

        if (val > high_val) {
            high_val = val;
            high_pos.x = pos.x;
            high_pos.y = pos.y;
        }
        if (val < low_val) {
            low_val = val;
            low_pos.x = pos.x;
            low_pos.y = pos.y;
        }
    }

    let flow_angle = createVector(low_pos.x - high_pos.x, low_pos.y - high_pos.y);
    flow_angle.normalize().mult(high_val - low_val);

    return flow_angle;
}

function get_flow(xpos, ypos) {
    xpos = constrain(xpos, 0, width + offset * 2);
    ypos = constrain(ypos, 0, height + offset * 2);
    return flow_grid[floor(ypos / flow_cell_size)][floor(xpos / flow_cell_size)];
}

function display_particles() {
    strokeWeight(2);
    stroke(255, 240, 220, 5);
    for (let i = 0; i < particles.length; i++) {
        //stroke(particles[i].col);
        //point(particles[i].pos.x, particles[i].pos.y);
        if (p5.Vector.dist(particles[i].prev, particles[i].pos) < 10)
            line(particles[i].prev.x, particles[i].prev.y, particles[i].pos.x, particles[i].pos.y);
    }
}

function display_flow() {
    for (let i = 0; i < flow_grid.length; i++) {
        for (let j = 0; j < flow_grid[i].length; j++) {
            strokeWeight(1);
            stroke(255, 0, 0);
            noFill();
            ellipse(j * flow_cell_size, i * flow_cell_size, 7, 7);
            line(
                j * flow_cell_size,
                i * flow_cell_size,
                j * flow_cell_size + flow_grid[i][j].x * 50,
                i * flow_cell_size + flow_grid[i][j].y * 50
            );
        }
    }
}

keyPressed = function() {
    if (keyCode === 80) {
        saveCanvas('landslide', 'jpeg');
    }
};

function mod(x, n) {
    return (x % n + n) % n;
}
