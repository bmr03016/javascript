let numOne = "";
let opertaor = "";
let numTwo = "";

const $operator = document.querySelector("#operator");
const $result = document.querySelector("#result");
const onClickNumber = (number) => () => {
  // (numer) => { return () => {....}} 이었는데 생략
  // 함수가 함수를 return : 고차 함수(high order function)
  if (operator) {
    numTwo += number;
  } else {
    numOne += number;
  }
  $result.value += number; // 화면 바꾸기
};
// id는 #인거 안까먹었지? 😌
document.querySelector("#num-0").addEventListener("click", onClickNumber("0"));
document.querySelector("#num-1").addEventListener("click", onClickNumber("1"));
document.querySelector("#num-2").addEventListener("click", onClickNumber("2"));
document.querySelector("#num-3").addEventListener("click", onClickNumber("3"));
document.querySelector("#num-4").addEventListener("click", onClickNumber("4"));
document.querySelector("#num-5").addEventListener("click", onClickNumber("5"));
document.querySelector("#num-6").addEventListener("click", onClickNumber("6"));
document.querySelector("#num-7").addEventListener("click", onClickNumber("7"));
document.querySelector("#num-8").addEventListener("click", onClickNumber("8"));
document.querySelector("#num-9").addEventListener("click", onClickNumber("9"));
document.querySelector("#plus").addEventListener("click", () => {});
document.querySelector("#minus").addEventListener("click", () => {});
document.querySelector("#divide").addEventListener("click", () => {});
document.querySelector("#multiply").addEventListener("click", () => {});
document.querySelector("#calculate").addEventListener("click", () => {});
document.querySelector("#clear").addEventListener("click", () => {});
