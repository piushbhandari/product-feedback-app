const goBackBtns = [...document.querySelectorAll(".go-back")];

goBackBtns.forEach((btn) => {
  btn.addEventListener("click", (e) => {
    e.preventDefault();
    history.back();
  });
});
