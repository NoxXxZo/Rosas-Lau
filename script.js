onload = () => {
  document.body.classList.remove("container");

  // Fecha de inicio (cámbiala a la tuya)
  const startDate = new Date("2023-09-07T00:00:00");

  function updateCounter() {
    const now = new Date();
    const diff = now - startDate;

    // cálculos
    const days = Math.floor(diff / (1000 * 60 * 60 * 24));
    const hours = Math.floor((diff / (1000 * 60 * 60)) % 24);
    const minutes = Math.floor((diff / (1000 * 60)) % 60);
    const seconds = Math.floor((diff / 1000) % 60);

    document.getElementById(
      "daysTogether"
    ).textContent = `${days} días ${hours}h ${minutes}m ${seconds}s`;
  }

  // actualizar cada segundo
  setInterval(updateCounter, 1000);
  updateCounter(); // ejecutar al cargar
};
