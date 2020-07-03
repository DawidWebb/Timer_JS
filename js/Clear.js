class Clear extends Timer {
  constructor(props) {
    super(props);
    this.reset = document.querySelector(".function-timing__reset");
    this.reset.addEventListener("click", this.resetAll);
  }
  resetAll = () => {
    this.divHrs.value = 0;
    this.divMin.value = 0;
    this.divSec.value = 0;
    this.seconds = [];
    this.minutes = [];
    this.hours = [];
  };
}
const clear = new Clear();
