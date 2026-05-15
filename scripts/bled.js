document.addEventListener("DOMContentLoaded", () => {

  const plane = document.querySelector(".plane");

  document.addEventListener("mousemove", (e) => {
    if (!plane) return;

    plane.style.left = e.clientX + "px";
    plane.style.top = e.clientY + "px";
  });

});

window.setInfo = function(type, btn){

  const info = document.getElementById("info");
  if (!info) return;

  document.querySelectorAll(".tab").forEach(t =>
    t.classList.remove("active")
  );

  if(btn) btn.classList.add("active");

  if(type === "epoca"){
    info.innerHTML = `
    Entre mayo y septiembre es la mejor época para visitar Lake Bled.<br><br>

    Clima templado (15°C–28°C), días largos y el lago en su máximo color turquesa.<br><br>

    En primavera y otoño hay menos turistas y la experiencia es más tranquila.
    `;
  }

  if(type === "ropa"){
    info.innerHTML = `
    Lake Bled está en zona alpina, por lo que el clima cambia rápido.<br><br>

    • Ropa por capas<br>
    • Chaqueta impermeable o cortavientos<br>
    • Suéter ligero<br>
    • Zapatos cómodos o de senderismo<br><br>

    Evita sandalias si vas a caminar alrededor del lago.
    `;
  }

  if(type === "imperdibles"){
    info.innerHTML = `
    Imperdibles en Lake Bled:<br><br>

    • Isla de Bled con su iglesia<br>
    • Castillo con vista panorámica<br>
    • Caminata alrededor del lago (6 km)<br>
    • Miradores al amanecer y atardecer<br><br>

    El atardecer es el momento más espectacular.
    `;
  }

  if(type === "precios"){
    info.innerHTML = `
    Precios aproximados:<br><br>

    • Alojamiento: 30–300 USD<br>
    • Paseo en bote: 15–25 USD<br>
    • Entrada al castillo: 10–15 USD<br>
    • Comida: 10–40 USD<br><br>

    En temporada alta los precios suben bastante.
    `;
  }

}