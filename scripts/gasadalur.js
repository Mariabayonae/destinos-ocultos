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



  if(type === "clima"){

    info.innerHTML = `

    Gasadalur tiene un clima atlántico muy cambiante.<br><br>

    • Lluvias frecuentes durante todo el año.<br><br>

    • Viento fuerte debido a su ubicación en acantilados.<br><br>

    • Nieblas que aparecen y desaparecen en minutos.<br><br>

    • Temperaturas frescas incluso en verano.<br><br>

    `;
  }



  if(type === "como_llegar"){

    info.innerHTML = `

    Llegar a Gasadalur ya es parte de la experiencia.<br><br>

    • Se accede por un túnel desde la isla de Vágar.<br><br>

    • También se puede llegar caminando por rutas de montaña.<br><br>

    • El trayecto ofrece vistas de acantilados y océano Atlántico.<br><br>

    • Es un lugar remoto, por lo que el transporte es limitado.<br><br>

    `;
  }

 

  if(type === "experiencia"){

    info.innerHTML = `

    Gasadalur se siente como un lugar fuera del mundo.<br><br>

    • Una cascada cae directamente hacia el océano desde el acantilado.<br><br>

    • Es ideal para desconectarse completamente del ruido urbano.<br><br>

    • El silencio y el viento dominan el ambiente.<br><br>

    • Es uno de los pueblos más fotografiados de las Islas Feroe.<br><br>

    `;
  }

}