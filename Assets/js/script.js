var youtube = document.getElementById("youtube");
var blog = document.getElementById("blog");
var frog = document.getElementById("frog");
var weather = document.getElementById("weather");
var password = document.getElementById("password");
var syncro = document.getElementById("Syncro");
var intune = document.getElementById("intune");
var auth = document.getElementById("auth");
var exchange = document.getElementById("exchange");
var youtubeModal = document.getElementById("youtube-modal");
var blogModal = document.getElementById("blog-modal");
var frogModal = document.getElementById("frog-modal");
var weatherModal = document.getElementById("weather-modal");
var passwordModal = document.getElementById("password-modal");
var syncroModal = document.getElementById("Syncro-modal");
var intuneModal = document.getElementById("intune-modal");
var authModal = document.getElementById("auth-modal");
var exchangeModal = document.getElementById("exchange-modal");
var closeModal = document.querySelector(".work");

function getModal(modal) {
  modal.setAttribute("class", "modal is-active");
}

youtube.addEventListener("click", function () {
  getModal(youtubeModal);
});
blog.addEventListener("click", function () {
  getModal(blogModal);
});
frog.addEventListener("click", function () {
  getModal(frogModal);
});
weather.addEventListener("click", function () {
  getModal(weatherModal);
});
password.addEventListener("click", function () {
  getModal(passwordModal);
});
syncro.addEventListener("click", function () {
  getModal(syncroModal);
});
intune.addEventListener("click", function () {
  getModal(intuneModal);
});
auth.addEventListener("click", function () {
  getModal(authModal);
});
exchange.addEventListener("click", function () {
  getModal(exchangeModal);
});

closeModal.addEventListener("click", function (event) {
  if (event.target.className === "modal-close is-large") {
    event.target.parentElement.setAttribute("class", "modal");
  }
});
