// HTML 버튼 요소를 생성
const scrollTop = function () {
    const scrollBtn = document.createElement("button");
    scrollBtn.innerHTML = "&uarr;";
    scrollBtn.setAttribute("id", "scroll-btn");
    document.body.appendChild(scrollBtn);
   // 스크롤 거리에 따라 버튼 숨기기, 보이기
    const scrollBtnDisplay = function () {
      window.scrollY > window.innerHeight
        ? scrollBtn.classList.add("show")
        : scrollBtn.classList.remove("show");
    };
    window.addEventListener("scroll", scrollBtnDisplay);
  // 버튼을 클릭하면 상단으로 스크롤
    const scrollWindow = function () {
      if (window.scrollY != 0) {
        setTimeout(function () {
        window.scrollTo({top: location, behavior: "smooth"});
          scrollWindow();
        }, 650);
      }
    };
    scrollBtn.addEventListener("click", scrollWindow);
  };
  scrollTop();