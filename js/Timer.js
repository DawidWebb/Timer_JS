class Timer {
  constructor() {
    this.divHrs = document.querySelector(".show-timing__hours");
    this.divMin = document.querySelector(".show-timing__minutes");
    this.divSec = document.querySelector(".show-timing__seconds");
    this.seconds = [0];
    this.minutes = [0];
    this.hours = [0];
    this.editActive = false;
    this.startActive = false;
  }
}
