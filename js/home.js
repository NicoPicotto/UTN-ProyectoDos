const $tabButtons = document.querySelectorAll(".tab-button");
const $tabSolapas = document.querySelectorAll(".tab-solapa");

$tabButtons.forEach((button) => {
   button.addEventListener("click", function () {
      const tab = this.getAttribute("data-tab");

      $tabButtons.forEach((button) => button.classList.remove("active"));
      $tabSolapas.forEach((solapa) => solapa.classList.remove("active"));

      this.classList.add("active");
      document.getElementById(tab).classList.add("active");
   });
});
