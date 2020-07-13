import './styles.css';

const refs = {
  startBtn: document.querySelector('button[data-action="start"]'),
  stopBtn: document.querySelector('button[data-action="stop"]'),
  body: document.querySelector('body'),
};

const colors = [
  '#FFFFFF',
  '#2196F3',
  '#4CAF50',
  '#FF9800',
  '#009688',
  '#795548',
];

const randomIntegerFromInterval = (min, max) => {
  return Math.floor(Math.random() * (max - min + 1) + min);
};

const randomColor = {
  intervalId: null,
  isActive: false,

  start() {
    if (this.isActive) {
      return;
    }

    refs.startBtn.disabled = true;
    this.isActive = true;
    this.intervalId = setInterval(() => {
      const randomColorIndex =
        colors[randomIntegerFromInterval(0, colors.length - 1)];
      refs.body.style.backgroundColor = randomColorIndex;
      console.log(randomColorIndex);
    }, 1000);
  },

  stop() {
    clearInterval(this.intervalId);
    refs.startBtn.disabled = false;
    this.isActive = false;
    this.intervalId = null;
    console.clear();
  },
};

refs.startBtn.addEventListener('click', randomColor.start.bind(randomColor));
refs.stopBtn.addEventListener('click', randomColor.stop.bind(randomColor));
