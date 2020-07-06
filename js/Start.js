class Start extends Edit {
  constructor(props) {
    super(props);
    this.alarm = new Alarm();
    this.alarmOff;
    this.startDiv = document.querySelector(".function-timing__start");
    this.onBtn = document.querySelector(".fa-play");
    this.offBtn = document.querySelector(".fa-pause");
    this.startDiv.addEventListener("click", this.setTimer);
    this.startStop = false;
    this.start;
  }

  setTimer = () => {
    if (
      this.editActive === true ||
      (this.divHrs.value === 0 &&
        this.divMin.value === 0 &&
        this.divSec.value === 0)
    ) {
      return;
    } else if (this.editActive === false) {
      this.startTimer();
      this.startActive = !this.startActive;
    }
  };

  startTimer = () => {
    this.startStop = !this.startStop;

    if (this.divSec.value > 0) {
      this.seconds = [];
      this.seconds.push(this.divSec.value * 1);
    }
    if (this.divMin.value > 0) {
      this.minutes = [];
      this.minutes.push(this.divMin.value * 1);
    }
    if (this.divHrs.value > 0) {
      this.hours = [];
      this.hours.push(this.divHrs.value * 1);
    }
    if (this.startStop === true) {
      this.start = setInterval(this.timerCalc, 1000);
      this.onBtn.style.display = "none";
      this.startDiv.style.backgroundColor = "white";
      this.offBtn.style.display = "inline-block";
    } else if (this.startStop === false) {
      clearInterval(this.start);
      this.onBtn.style.display = "inline-block";
      this.startDiv.style.backgroundColor = "black";
      this.offBtn.style.display = "none";
    }
  };

  timerCalc = () => {
    let sec = this.seconds;
    let min = this.minutes;
    let hrs = this.hours;

    if (sec[0] > 0) {
      sec[0]--;
      this.divSec.value = sec[0];
    }
    if (sec[0] === 0 && min[0] > 0) {
      sec[0] = 60;
      sec--;
      min[0] = min[0] - 1;
      this.divMin.value = min[0];
    }
    if (sec[0] === 0 && min[0] === 0 && hrs > 0) {
      sec[0] = 60;
      sec--;
      min[0] = 60;
      min[0] = min[0] - 1;
      this.divMin.value = min[0];
      hrs[0] = hrs[0] - 1;
      this.divHrs.value = hrs[0];
    }
    if (sec[0] === 0) {
      this.startStop = false;
      clearInterval(this.start);
      this.onBtn.style.display = "inline-block";
      this.startDiv.style.backgroundColor = "black";
      this.offBtn.style.display = "none";
      this.alarm.alarmStart();
      this.startActive = false;
    }
  };
}

// const start = new Start();
