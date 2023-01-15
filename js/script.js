// login
const users = [
  {
    name: "velmurugan",
    password: "12345678",
  },
];

const form = document.getElementById("form");
const names = document.getElementById("logname");
const password = document.getElementById("logpwd");
const divs = document.getElementById("shows");
const create = document.getElementById("create");

function veriFication() {
  const currentObject = users.find((e) => e.name === names.value);
  if (names.value == "" || password.value == "") {
    alert("Please enter the all fields");
  } else if (currentObject != undefined) {
    if (
      names.value === currentObject.name &&
      password.value === currentObject.password
    ) {
      divs.innerHTML = "Login  succeesfully";
      callPages();
      displayProfile();
      document.getElementById("fors").reset();
    }
  } else {
    divs.innerHTML = "Username/Password is incorrect";
  }
}
function callPages() {
  const Log = document.getElementById("firstform");
  const Main = document.getElementById("secondform");
  Log.className = "displayNone";
  Main.className = "displayBlock";
}
