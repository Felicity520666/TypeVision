function setup() {
    createCanvas(400, 400);
    img.resize(100, 0);
    size = width / img.width;
}

function draw() {
    background(220);

    for (let i=0; i<img.width; i++) {
        for (let j=0; j<img.height; j++) {
            let pixelVal = img.get(i, j);
            let c = brightness(pixelVal);
            let t = floor(map(c, 0, 100, 0, asciiChar.length));

            let x = i*size;
            let y = j*size;
            text(t, x, y);
        }
    }
}