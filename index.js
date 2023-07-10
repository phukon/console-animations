class Animation {
  constructor(frames, interval, colorIndex) {
    this.frames = frames.map(frame => `${this.getColor(colorIndex)}${frame}\x1b[0m`);
    this.interval = interval;
    this.animationTimer = null;
    this.animationFrame = 0;
  }

  getColor(index) {
    const colors = [
      '\x1b[36m', // cyan
      '\x1b[32m', // green
      '\x1b[33m', // yellow
      '\x1b[35m', // magenta
      '\x1b[31m', // red
      '\x1b[34m', // blue
      '\x1b[37m', // white
      '\x1b[90m'  // gray
    ];

    return colors[index % colors.length];
  }

  start() {
    this.animationTimer = setInterval(() => {
      process.stdout.cursorTo(1);
      process.stdout.clearLine(1);
      process.stdout.write('   ' + this.frames[this.animationFrame]);
      this.animationFrame = (this.animationFrame + 1) % this.frames.length;
    }, this.interval);
  }

  stop() {
    clearInterval(this.animationTimer);
    this.animationTimer = null;
    process.stdout.cursorTo(1);
    process.stdout.clearLine(1);
  }
}

const animationTypes = {
  spinner: {
    frames: ['  ⠋  ', '  ⠙  ', '  ⠹  ', '  ⠸  ', '  ⠼  ', '  ⠴  ', '  ⠦  ', '  ⠧  ', '  ⠇  ', '  ⠏  '],
    interval: 100
  },
  progress: {
    frames: ['  █  ', '  ▓  ', '  ▒  ', '  ░  '],
    interval: 200
  },
  bouncing: {
    frames: ['  ( o    ', '   o )   ', '    ( o  ', '   ) o   '],
    interval: 300
  },
  dots: {
    frames: ['  .  ', '  ..  ', '  ... '],
    interval: 400
  }
};

module.exports = {
  Animation,
  animationTypes
};
