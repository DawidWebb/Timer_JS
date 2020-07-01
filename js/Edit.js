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
  };
}
const edit = new Edit();
// export default Edit;
