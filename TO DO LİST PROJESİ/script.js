const ekleBtn = document.getElementById("ekleBtn");
const gorevInput = document.getElementById("gorevInput");
const gorevListesi = document.getElementById("gorevListesi");


ekleBtn.addEventListener("click", () => {
    
  const gorevText = gorevInput.value.trim();

  if (gorevText === "") {
    alert("Lütfen bir görev giriniz!");
    return;
  }

  const li = document.createElement("li");
  li.textContent = gorevText;

  
  const silBtn = document.createElement("button");
  silBtn.textContent = "Sil";
  silBtn.classList.add("silBtn");

  silBtn.addEventListener("click", () => {
    li.remove();
  });

  li.appendChild(silBtn);
  gorevListesi.appendChild(li);

  gorevInput.value = "";
});
