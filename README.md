# TypeVision

A real-time webcam-to-ASCII-art renderer built with [p5.js](https://p5js.org/).

Your camera feed is converted into colored ASCII characters that fill the entire browser window, resizing dynamically when the window changes.

## How it works

1. The webcam is captured at a resolution matched to the character grid.
2. Each pixel's brightness determines which ASCII character is drawn — dense characters like `$` and `@` represent dark areas, while lighter characters like `.` and spaces represent bright areas.
3. Each character is colored with the original RGB value of that pixel, preserving the look of the video feed.

## Running locally

Open `index.html` in any modern browser and allow camera access when prompted. No build step or server required.

## Controls

- The canvas automatically fills the browser window and responds to resizing.
- Character cell size is set by the `scl` variable in `sketch.js` (default `10`). Lower values = more detail, higher values = faster performance.

## Dependencies

- [p5.js 1.9.4](https://cdnjs.cloudflare.com/ajax/libs/p5.js/1.9.4/p5.js) (loaded via CDN)

## License

MIT
