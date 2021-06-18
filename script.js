function Generate() {
  let dict = "";
  let lower = "abcdefghijklmnopqrstuvwxyz";
  let upper = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
  let numbers = "0123456789";
  let symbols = "+$%{};*!@#&-=?()[]_";
  if (this.document.getElementById("lowercase").checked) dict += lower;
  if (this.document.getElementById("uppercase").checked) dict += upper;
  if (this.document.getElementById("numbers").checked) dict += numbers;
  if (this.document.getElementById("symbols").checked) dict += symbols;
  let password = "";
  var x = this.document.getElementById("length");
  for (let i = 0; i < x.value; i++) {
    password = password + dict.charAt(Math.floor(Math.random() * dict.length));
  }
  var pass_element = document.getElementById("pass");
  pass_element.innerHTML = password;
  console.log(password);
}

window.addEventListener("load", function () {
  var x = this.document.getElementById("length");
  for (let i =8;i < 17;i++){
    var option = this.document.createElement("option");
    option.text=i;
    x.add(option);
  }
  this.document.getElementById("lowercase").checked = true;
});