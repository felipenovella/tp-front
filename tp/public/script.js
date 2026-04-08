document.addEventListener("DOMContentLoaded", () => {

    const search = document.getElementById("search");
    const planes = document.getElementById("planes");
  
    console.log("JS funcionando");
  
    search.addEventListener("input", async () => {
      console.log("escribiendo...");
  
      const value = search.value;
  
      const res = await fetch("https://restcountries.com/v3.1/all");
      const data = await res.json();
  
      const random = data[Math.floor(Math.random() * data.length)];
  
      planes.innerHTML = `
        <div class="card">
          <h2>${value || "Vuelo desconocido"}</h2>
          <p>Origen: ${random.name.common}</p>
          <p>Destino: ${data[0].name.common}</p>
          <p>Estado: En vuelo ✈️</p>
        </div>
      `;
    });
  
  });