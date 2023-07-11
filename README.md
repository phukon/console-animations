# Console Animations

Console Animations is a lightweight npm package that allows you to create animated console effects in your Node.js applications. It provides a simple and customizable way to add visual appeal and interactivity to command-line interfaces.

## Features

- Supports various animation types including spinners, progress bars, bouncing effects, and more.
- Customizable color options to enhance visual representation.
- Easy-to-use API for starting and stopping animations.
- Lightweight and dependency-free.

## Installation

You can install Console Animation via npm:

```js
npm install console-animation
```
## Usage
```js
Copy code
const { Animation, animationTypes } = require('console-animation');

// Create a spinner animation with cyan color
const spinnerAnimation = new Animation(animationTypes.spinner.frames, animationTypes.spinner.interval, 0);
spinnerAnimation.start();

// Stop the animation after 5 seconds
setTimeout(() => {
  spinnerAnimation.stop();
  console.log('\nAnimation stopped.');
}, 5000);
```
Stops the animation.

## Animation Types

The `animationTypes` object provides pre-defined animation configurations that you can use out of the box. Each animation type consists of an array of frames and an interval.

Supported animation types:

-   `spinner`: Displays a rotating spinner effect.
-   `progress`: Represents a progress bar animation.
-   `bouncing`: Creates a bouncing effect.
-   `dots`: Shows a series of expanding dots.

Refer to the example in the Usage section to see how to use these animation types.

## Contributing

Contributions are welcome! If you find any issues or have suggestions for improvements, please feel free to open an issue or submit a pull request.

## License

This package is open source and available under the [MIT License](https://opensource.org/licenses/MIT).
