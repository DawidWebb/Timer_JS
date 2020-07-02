class Start extends Timer {
  constructor(props) {
    super(props);
    this.start = document.querySelector(".function-timing__start");
    this.onBtn = document.querySelector(".fas .fa-play");
    this.offBtn = document.querySelector(".fa-pause");
    this.start.addEventListener("click", this.startTimer);
  }
  startTimer = () => {
    this.onBtn.classList.toggle("markOff");
  };
}
const start = new Start();
