class Start extends Edit {
  constructor(props) {
    super(props);
    this.startDiv = document.querySelector(".function-timing__start");
    this.onBtn = document.querySelector(".fa-play");
    this.offBtn = document.querySelector(".fa-pause");
    this.startDiv.addEventListener("click", this.setTimer);
    this.startStop = false;
  }

  setTimer = () => {
    console.log("edit" + " " + this.editActive);
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
    if (this.seconds.length > 0) {
      this.seconds[0]--;
      this.divSec.value = this.seconds[0];
    }
  };
}

// const start = new Start();
