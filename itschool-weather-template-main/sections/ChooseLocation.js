const bucharest = document.querySelector(".bucharest");
const timisoara = document.querySelector(".timisoara");
const oradea = document.querySelector(".oradea");

function updateCity(city) {
  const currentCity = document.getElementById("current-city");
  currentCity.innerHTML = city;

  displayCurrentWeather(city);
}

bucharest.addEventListener("click", function () {
  updateCity("București");
});
timisoara.addEventListener("click", function () {
  updateCity("Timișoara");
});
oradea.addEventListener("click", function () {
  updateCity("Oradea");
});
