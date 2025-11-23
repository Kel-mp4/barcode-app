const generatorTab = document.querySelector(".nav-gene");
const scannerTab = document.querySelector(".nav-scan");
const inventoryTab = document.querySelector(".nav-inv");

generatorTab.addEventListener("click", () => {
  generatorTab.classList.add("active");
  scannerTab.classList.remove("active");
  inventoryTab.classList.remove("active");

  document.querySelector(".inventory").style.display = "none";
  document.querySelector(".scanner").style.display = "none";
  document.querySelector(".generator").style.display = "block";
})

scannerTab.addEventListener("click", () => {
  scannerTab.classList.add("active");
  generatorTab.classList.remove("active");
   inventoryTab.classList.remove("active");

   document.querySelector(".inventory").style.display = "none";
  document.querySelector(".scanner").style.display = "block";
  document.querySelector(".generator").style.display = "none";
})

inventoryTab.addEventListener("click", () => {
  scannerTab.classList.remove("active");
  generatorTab.classList.remove("active");
   inventoryTab.classList.add("active");

   document.querySelector(".inventory").style.display = "block";
  document.querySelector(".scanner").style.display = "none";
  document.querySelector(".generator").style.display = "none";
})
