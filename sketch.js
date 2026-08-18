let img;
let size;
let asciiChar = "$@B%8&WM#*oahkbdpqwmZO0QLCJUYXzcvunxrjft/\|()1{}[]?-_+~<>i!lI;:,"^`'.";

let video; let vidw = 64; let vidh = 48; let scl = 10;
let w, h;

function setup() {
    createCanvas(vidw * scl, vidh * scl);
    video = createCapture(VIDEO);
    video.size(vidw, vidh);
    w = width / video.width;
    h = height / video.height;
}

function draw() {
    background(220);

    for (let i=0; i<img.width; i++) {
        for (let j=0; j<img.height; j++) {
            let pixelVal = img.get(i, j);
            let bright = (r + g + b) / 3;
            let tIndex = floor(map(bright, 0, 255, 0, assciChar.length));

            let x = i*w + w/2;
            let y = j*h + h/2;
            let t = asciiChar.charAt(tIndex);
            textSize(w)
            textAlign(CENTER. CENTER);
            text(t, x, y);
    }
}