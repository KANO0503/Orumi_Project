
// 구현이 되지 않고 화면에 답변이 나와도 지속적으로 로딩이 돌아감
// 수정할 것
const btn = document.querySelector(".submit-button");
btn.addEventListener('click', () => {
    if(!document.getElementById("chat-content").value) {
        btn.classList.add("button--loading");
    } else {
        btn.classList.remove("button--loading");
    }
});