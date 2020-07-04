class Clear extends Start {
  constructor(props) {
    super(props);
    this.reset = document.querySelector(".function-timing__reset");
    this.reset.addEventListener("click", this.resetAll);
  }
  resetAll = () => {
    if (this.startActive === true) {
      return;
    } else if (this.startActive === false) {
      this.divHrs.value = 0;
      this.divMin.value = 0;
      this.divSec.value = 0;
      this.seconds = [];
      this.minutes = [];
      this.hours = [];
    }
  };
}
const clear = new Clear();
