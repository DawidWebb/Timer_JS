class Alarm extends Start {
  constructor(props) {
    super(props);
    this.alarmStart;
    this.alarmBtn = document.querySelector(".wrap__alarm");
    this.alarmBtn.addEventListener("click", this.alarmReset);
  }
  alarmStart = () => {
    if (this.alarm === true) {
      this.alarmBtn.style.display = "inline-block";
    }
  };
}
