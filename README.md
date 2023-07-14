
# console-animations

console-animations is a lightweight Node.js module that provides various animated effects for the console. It allows you to easily add animated spinner, progress bar, bouncing ball, and dot animations to your command-line applications.

## Installation

You can install console-animations using npm:

shellCopy code

`npm install console-animations` 

## Usage

The module provides the `startAnimation` and `stopAnimation` functions to control the animations. Here's an example of how to use them:

```js
`const { startAnimation, stopAnimation } = require('console-animations');

// Start a spinner animation with color index 0 (cyan)
startAnimation('spinner', 0);

// Stop the animation after 3 seconds
setTimeout(() => {
  stopAnimation();
}, 3000);
```

## Animation Types

console-animations supports the following animation types:

-   **spinner**: Displays a spinning animation.
-   **progress**: Displays a progress bar animation.
-   **bouncing**: Displays a bouncing ball animation.
-   **dots**: Displays a dot animation.

To start an animation, use the `startAnimation` function and provide the animation type as the first argument. For example, to start a spinner animation:

`startAnimation('spinner', colorIndex);` 

Replace `colorIndex` with the index of the color you want to use (0-7).

## Color Types

console-animations supports 8 color types for the animations:

-   0: cyan
-   1: green
-   2: yellow
-   3: magenta
-   4: red
-   5: blue
-   6: white
-   7: gray

To choose the color for an animation, provide the desired color index as the second argument when calling `startAnimation`. For example, to start a spinner animation with the color green:

```js
startAnimation('spinner', 1); // Use color index 1 (green)
```

## Contributing

Contributions are welcome! If you have any ideas, bug reports, or feature requests, please open an issue on the GitHub repository

## License

This module is licensed under the [MIT License](https://opensource.org/licenses/MIT).