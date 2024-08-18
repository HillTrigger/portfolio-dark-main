let search = document.querySelector(".search");
let input = document.querySelector(".search__inp");

search.addEventListener("click", (e) => {
  input.classList.toggle("show");
  search.classList.toggle("hide");
  input.focus();
});

input.addEventListener("blur", (e) => {
  search.classList.toggle("hide");
  input.classList.toggle("show");
});
