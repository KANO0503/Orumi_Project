const btn = document.querySelector(".submit-button");
btn.addEventListener('click', ()=> {
    document.btn.classList.add("button--loading");
    if (document.getElementById("chat-content").value){
    document.body.btn.classList.remove("button--loading");
    }
});

// btn.classList.remove("button--loading");