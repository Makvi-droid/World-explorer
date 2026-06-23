const searchBtn = document.getElementById("search-btn");
const input = document.getElementById("search-bar");
const span = document.querySelector("span");

searchBtn.addEventListener("click", () => {
  const value = input.value;
  span.innerHTML = `${value}`;
});
