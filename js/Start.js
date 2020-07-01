class Start extends Timer {
  constructor(props) {
    super(props);
    this.start = document.querySelector(".function-timing__start");
    this.start.addEventListener("click", this.startTimer);
  }
  startTimer = () => {
    this.start.classList.toggle("btnActive");
  };
}
const start = new Start();
