class Start extends Timer {
  constructor(props) {
    super(props);
    this.start = document.querySelector(".function-timing__start");
    this.onBtn = document.querySelector(".fas .fa-play");
    this.offBtn = document.querySelector(".fa-pause");
    this.start.addEventListener("click", this.startTimer);
    this.startStop = false;
  }

  startTimer = () => {
    this.startStop = !this.startStop;
    console.log(this.startStop);

    if (this.divSec.value > 0) {
      this.seconds.push(this.divSec.value * 1);
    }
    if (this.divMin.value > 0) {
      this.minutes.push(this.divMin.value * 1);
    }
    if (this.divHrs.value > 0) {
      this.hours.push(this.divHrs.value * 1);
    }
    if (this.startStop === true) {
      this.start = setInterval(this.timerCalc, 1000);
    } else if (this.startStop === false) {
      clearInterval(this.start);
    }
  };

  timerCalc = () => {
    if (this.seconds.length > 0) {
      this.seconds[0]--;
      this.divSec.value = this.seconds[0];
    }
  };
}

const start = new Start();
