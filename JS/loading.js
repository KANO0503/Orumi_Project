const btn = document.querySelector(".submit-button");
btn.addEventListener('click', ()=> {
    btn.classList.add("button--loading");
    if (document.getElementById("chat-content").value){
    btn.classList.remove("button--loading");
    }
});

// btn.classList.remove("button--loading");


        // /* 대답창 숨기기 */
        // const responseContainer = document.querySelector('.response-container');
        // responseContainer.style.display = 'none';