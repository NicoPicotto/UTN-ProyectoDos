const $tabButtons = document.querySelectorAll(".tab-button");
const $tabSolapas = document.querySelectorAll(".tab-solapa");

$tabButtons.forEach((button) => {
   button.addEventListener("click", function () {
      const tab = button.getAttribute("data-tab");

      $tabButtons.forEach((button) => button.classList.remove("active"));
      $tabSolapas.forEach((solapa) => solapa.classList.remove("active"));

      button.classList.add("active");
      document.getElementById(tab).classList.add("active");
   });
});
