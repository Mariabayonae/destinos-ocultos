document.addEventListener("DOMContentLoaded", () => {

  const plane = document.querySelector(".plane");

  document.addEventListener("mousemove", (e) => {
    if (!plane) return;

    plane.style.left = e.clientX + "px";
    plane.style.top = e.clientY + "px";
  });

});