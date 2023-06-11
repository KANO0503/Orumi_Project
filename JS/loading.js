
const btn = document.querySelector(".submit-button")

// 로딩 시작 함수
function btnshow() {
  btn.classList.add("button--loading");
}
// 로딩 종료 함수
function btnhide() {
  btn.classList.remove("button--loading");
}


