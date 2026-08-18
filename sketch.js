let video;
let vidw = 80;
let vidh = 60;
let scl = 10;
let w, h;

let asciiChar = "$@B%8&WM#*oahkbdpqwmZO0QLCJUYXzcvunxrjft/\\|()1{}[]?-_+~<>i!lI;:,\"^`'. ";

function setup() {
    createCanvas(vidw * scl, vidh * scl);
    video = createCapture(VIDEO);
    video.size(vidw, vidh);
    video.hide();
    w = width / vidw;
    h = height / vidh;
}

function draw() {
    background(0);
    video.loadPixels();

    for (let i = 0; i < video.width; i++) {
        for (let j = 0; j < video.height; j++) {
            let pixelVal = video.get(i, j);
            let r = red(pixelVal);
            let g = green(pixelVal);
            let b = blue(pixelVal);
            let bright = (r + g + b) / 3;

            let tIndex = floor(map(bright, 0, 255, asciiChar.length - 1, 0));
            tIndex = constrain(tIndex, 0, asciiChar.length - 1);

            let x = i * w + w / 2;
            let y = j * h + h / 2;
            let t = asciiChar.charAt(tIndex);

            fill(r, g, b);
            noStroke();
            textSize(w);
            textAlign(CENTER, CENTER);
            text(t, x, y);
        }
    }
}
