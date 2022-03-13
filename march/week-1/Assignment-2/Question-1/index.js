function checkPassword() {
  let password_feild = document.getElementById("pass_key");
  let con_password_feild = document.getElementById("check_pass_Key");

  let password = password_feild.value;
  let confirm_password = con_password_feild.value;

  let message = document.getElementById("message");
  if (password == confirm_password) {
    message.innerText = "Password is Matching";
  } else {
    message.innerText = "Password is not matching";
  }
}
