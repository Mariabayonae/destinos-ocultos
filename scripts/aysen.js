document.addEventListener("DOMContentLoaded", () => {

  document.body.style.cursor = "none";

  document.querySelectorAll("*").forEach(el => {
    el.style.cursor = "none";
  });

  const plane = document.querySelector(".plane");

  document.addEventListener("mousemove", (e) => {

    if(!plane) return;

    plane.style.left = e.clientX + "px";
    plane.style.top = e.clientY + "px";

  });

});

window.setInfo = function(type, btn){

  const info = document.getElementById("info");

  if(!info) return;

  document.querySelectorAll(".tab").forEach(t => {
    t.classList.remove("active");
  });

  if(btn){
    btn.classList.add("active");
  }

  /* =========================
     AVENTURA
  ========================= */

  if(type === "aventura"){

    info.innerHTML = `

    Explorar Aysén es sentirse diminuto frente a la naturaleza.<br><br>

    • Navegar por las Cuevas de Mármol en kayak o bote.<br><br>

    • Recorrer la Carretera Austral rodeada de montañas y glaciares.<br><br>

    • Hacer trekking entre bosques, ríos y lagos de color turquesa.<br><br>

    • Muchas zonas tienen poca señal y casi nada de contaminación visual o sonora.

    `;
  }

  /* =========================
     FOTOGRAFÍA
  ========================= */

  if(type === "fotografia"){

    info.innerHTML = `

    Aysén cambia completamente según la luz del día.<br><br>

    • En la mañana el agua suele verse azul cristalino.<br><br>

    • Los días nublados hacen que las cuevas se vean más dramáticas y cinematográficas.<br><br>

    • El reflejo del mármol sobre el agua crea efectos naturales increíbles para fotografía.<br><br>

    • Llevar batería extra es importante porque muchas rutas son largas.

    `;
  }

  /* =========================
     DATOS ÚTILES
  ========================= */

  if(type === "datos"){

    info.innerHTML = `

    • El clima puede cambiar en pocas horas.<br><br>

    • Lo mejor es llevar ropa impermeable y térmica incluso en verano.<br><br>

    • Algunas excursiones requieren reserva previa por clima o cupos limitados.<br><br>

    • La mejor época para visitar suele ser entre noviembre y marzo.<br><br>

    • Aysén es más una experiencia de exploración que un viaje urbano tradicional.

    `;
  }

}