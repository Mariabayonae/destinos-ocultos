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

  if(btn) btn.classList.add("active");

  /* EXPERIENCIA */

  if(type === "experiencia"){

    info.innerHTML = `
    • Caminar por Lençóis Maranhenses se siente irreal:
    dunas enormes, silencio absoluto y lagunas naturales entre la arena.<br><br>

    • El paisaje cambia constantemente dependiendo de la lluvia y el viento,
    por eso nunca luce exactamente igual dos veces.<br><br>

    • Es uno de los lugares más diferentes y surrealistas de Brasil.
    `;

  }

  /* AVENTURA */

  if(type === "aventura"){

    info.innerHTML = `

    • Recorridos en 4x4 por las dunas<br><br>

    • Nadar en lagunas naturales cristalinas<br><br>

    • Caminatas al amanecer o atardecer<br><br>

    • Sobrevuelos panorámicos sobre el parque nacional
    `;

  }

  /* FOTOGRAFÍA */

  if(type === "fotografia"){

    info.innerHTML = `
    • El mejor momento para fotografías es al atardecer,
    cuando la arena toma tonos dorados y el agua refleja el cielo.<br><br>

    • Después de la temporada de lluvias las lagunas alcanzan
    sus colores más intensos.<br><br>

    • Los contrastes entre arena, agua y cielo hacen que
    casi cualquier foto parezca editada.
    `;

  }

}