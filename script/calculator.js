let numOne = "";
let opertaor = "";
let numTwo = "";

const $operator = document.querySelector("#operator");
const $result = document.querySelector("#result");

// id는 #인거 안까먹었지? 😌
document.querySelector("#num-0").addEventListener("click", (number) => {
  if (operator) {
    numTwo += "0";
  } else {
    numOne += "0";
  }
  $result.value += "0"; // 화면 바꾸기
});
document.querySelector("#num-1").addEventListener("click", (number) => {
  if (operator) {
    // 비어있지 않다
    numTwo += "1";
  } else {
    // 비어 있다
    numOne += "1";
  }
  $result.value += "1";
});
document.querySelector("#num-2").addEventListener("click", (number) => {
  if (operator) {
    numTwo += "2";
  } else {
    numOne += "2";
  }
  $result.value += "2";
});
document.querySelector("#num-3").addEventListener("click", (number) => {
  if (operator) {
    numTwo += "3";
  } else {
    numOne += "3";
  }
  $result.value += "3";
});
document.querySelector("#num-4").addEventListener("click", (number) => {
  if (operator) {
    numTwo += "4";
  } else {
    numOne += "4";
  }
  $result.value += "4";
});
document.querySelector("#num-5").addEventListener("click", (number) => {
  if (operator) {
    numTwo += "5";
  } else {
    numOne += "5";
  }
  $result.value += "5";
});
document.querySelector("#num-6").addEventListener("click", (number) => {
  if (operator) {
    numTwo += "6";
  } else {
    numOne += "6";
  }
  $result.value += "6";
});
document.querySelector("#num-7").addEventListener("click", (number) => {
  if (operator) {
    numTwo += "7";
  } else {
    numOne += "7";
  }
  $result.value += "7";
});
document.querySelector("#num-8").addEventListener("click", (number) => {
  if (operator) {
    numTwo += "8";
  } else {
    numOne += "8";
  }
  $result.value += "8";
});
document.querySelector("#num-9").addEventListener("click", (number) => {
  if (operator) {
    numTwo += "9";
  } else {
    numOne += "9";
  }
  $result.value += "9";
});
document.querySelector("#plus").addEventListener("click", () => {});
document.querySelector("#minus").addEventListener("click", () => {});
document.querySelector("#divide").addEventListener("click", () => {});
document.querySelector("#multiply").addEventListener("click", () => {});
document.querySelector("#calculate").addEventListener("click", () => {});
document.querySelector("#clear").addEventListener("click", () => {});
