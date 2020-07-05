class Alarm {
  constructor() {
    this.alarmStart;
    this.alarmBtn = document.querySelector(".wrap__alarm");
    this.alarmBtn.addEventListener("click", this.alarmReset);
  }
  alarmStart = () => {
    this.alarmBtn.style.display = "block";
  };
  alarmReset = () => {
    this.alarmBtn.style.display = "none";
  };
}
