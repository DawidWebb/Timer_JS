class Edit extends Timer {
  constructor(props) {
    super(props);
    this.edit = document.querySelector(".function-timing__edit");
    this.edit.addEventListener("click", this.editTimer);
  }
  editTimer = () => {
    this.editActive = !this.editActive;
    this.edit.classList.toggle("btnActive");
    this.divHrs.classList.toggle("timerActive");
    this.divMin.classList.toggle("timerActive");
    this.divSec.classList.toggle("timerActive");
    if (this.divHrs.value < 0) {
      this.divHrs.value = 0;
    } else if (this.divHrs.value > 24) {
      this.divHrs.value = 24;
    }
    if (this.divMin.value < 0) {
      this.divMin.value = 0;
    } else if (this.divMin.value > 60) {
      this.divMin.value = 60;
    }
    if (this.divSec.value < 0) {
      this.divSec.value = 0;
    } else if (this.divSec.value > 60) {
      this.divSec.value = 60;
    }

    this.editTime();
  };
  editTime = () => {
    if (this.editActive === true) {
      this.divHrs.removeAttribute("disabled");
      this.divMin.removeAttribute("disabled");
      this.divSec.removeAttribute("disabled");
    } else if (this.editActive === false) {
      this.divHrs.setAttribute("disabled", true);
      this.divMin.setAttribute("disabled", true);
      this.divSec.setAttribute("disabled", true);
    }
  };
}
// const edit = new Edit();
