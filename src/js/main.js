let modal__close = document.querySelector(".modal__close"),
      header__open = document.querySelector(".header__open"),
      modal = document.querySelector(".modal");

header__open.addEventListener("click", (e) => {
    e.preventDefault();
    modal.style.display = "flex";
});
modal__close.addEventListener("click", (e) => {
    e.preventDefault();
    modal.style.display = "none";
});