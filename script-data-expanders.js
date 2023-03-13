const dataTogglers = [...document.querySelectorAll("[data-expander]")];

dataTogglers.forEach((toggle) => {
  toggle.addEventListener("click", (e) => {
    e.preventDefault();
    const currentBtn = e.currentTarget;
    const btnAttribute = currentBtn.getAttribute("data-expander-toggle");
    const targetElement = document.getElementById(btnAttribute);

    if (!currentBtn.classList.contains("active")) {
      currentBtn.classList.add("active");
      targetElement.classList.add("active");
    } else {
      currentBtn.classList.remove("active");
      targetElement.classList.remove("active");
    }
  });
});

const hidePageListerBtn = document.querySelector(".hidePageLister");

hidePageListerBtn.addEventListener("click", (e) => {
  document.querySelector(".page-list-container").classList.add("hide");
});
