let pop_up = document.getElementById("pop_up_container");
let open_btn = document.getElementById("open_btn");

function openPopUp() {
  open_btn.classList.replace("openPopUp_btn", "openPopUp_btn_close");
  pop_up.classList.replace("pop-up_hide", "pop-up_display");
}

function closePopup() {
  pop_up.classList.replace("pop-up_display", "pop-up_hide");
  open_btn.classList.replace("openPopUp_btn_close", "openPopUp_btn");
}
