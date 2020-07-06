class Alarm {
  constructor() {
    // this.audio = new Audio("./alarm_sound");
    this.alarmStart;
    this.alarmBtn = document.querySelector(".wrap__alarm");
    this.watch = document.querySelector(".fa-stopwatch");
    this.alarmBtn.addEventListener("click", this.alarmReset);
  }
  alarmStart = () => {
    this.alarmBtn.style.display = "block";
    this.watch.classList.add("shake");

    // this.audio.play();
  };
  alarmReset = () => {
    this.alarmBtn.style.display = "none";
  };
}
