class Edit extends Timer {
  constructor(props) {
    super(props);
    this.edit = document.querySelector(".function-timing__edit");
    this.edit.addEventListener("click", this.editTimer);
  }
  editTimer = () => {
    this.edit.classList.toggle("btnActive");
    this.divHrs.classList.toggle("timerActive");
    this.divMin.classList.toggle("timerActive");
    this.divSec.classList.toggle("timerActive");

    this.editTime();
  };
  editTime = () => {
    if (this.edit.className === "function-timing__edit btnActive") {
      this.divHrs.removeAttribute("disabled");
      this.divMin.removeAttribute("disabled");
      this.divSec.removeAttribute("disabled");
    } else if (this.edit.className === "function-timing__edit") {
      this.divHrs.setAttribute("disabled", true);
      this.divMin.setAttribute("disabled", true);
      this.divSec.setAttribute("disabled", true);
    }
  };
}
const edit = new Edit();
