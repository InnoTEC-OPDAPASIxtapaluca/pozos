// DATOS
const lugares = [...]; // Aquí tu array completo de lugares (el que ya tenías)

// MAPA
const map = L.map("map").setView([19.312, -98.885], 13);
L.tileLayer("https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png", {
  attribution: "© OpenStreetMap"
}).addTo(map);

// ICONO
const iconopozos = L.icon({
  iconUrl: "./imagenes/iconopozos.png",
  iconSize: [40, 40],
  iconAnchor: [20, 40],
  popupAnchor: [0, -40]
});

// MARCADORES
lugares.forEach(l => {
  l._marker = L.marker([l.lat, l.lng], {icon: iconopozos})
    .addTo(map)
    .bindPopup(`<strong>${l.lista}</strong><br>${l.nombre}`);
});

// AJUSTAR VISTA
const group = L.featureGroup(lugares.map(l => l._marker));
map.fitBounds(group.getBounds());

// ELEMENTOS
const lista = document.getElementById("lista");
const infoBox = document.getElementById("info-box");

// RENDER LISTA
function renderLista(data) {
  lista.innerHTML = "";
  const esMovil = window.innerWidth <= 768;
  const dataMostrada = esMovil ? data.slice(0,5) : data;

  dataMostrada.forEach(l => {
    const li = document.createElement("li");
    li.textContent = l.lista;

    li.onclick = () => {
      infoBox.innerHTML = `
        <h3>${l.nombre}</h3>
        <div class="dato"><span>Gasto:</span> ${l.ficha.gasto}</div>
        <div class="dato"><span>Estatus:</span> ${l.ficha.estatus}</div>
        <div class="dato"><span>Estado:</span> ${l.ficha.estado}</div>
        <div class="dato"><span>Domicilio:</span> ${l.ficha.domicilio}</div>
      `;
      infoBox.classList.remove("hidden");
      map.flyTo([l.lat, l.lng], 16, {duration:0.8});
      l._marker.openPopup();

      if (esMovil) {
        document.getElementById("map").scrollIntoView({behavior:"smooth"});
      }
    };

    lista.appendChild(li);
  });

  if (esMovil && data.length > 5) {
    const aviso = document.createElement("li");
    aviso.textContent = "🔽 Usa el buscador para ver más puntos";
    aviso.style.fontStyle = "italic";
    aviso.style.color = "#666";
    aviso.style.cursor = "default";
    lista.appendChild(aviso);
  }
}

// MOSTRAR LISTA
renderLista(lugares);

// BOTÓN CENTRAR
document.getElementById("btn-centro").onclick = () => {
  map.fitBounds(group.getBounds());
};

// POLÍGONO
fetch('./data/poligono_ixtapaluca.json')
  .then(res => res.json())
  .then(geojson => {
    const poligonoIxtapaluca = L.geoJSON(geojson, {
      style: {
        color: '#9D2449',
        weight: 3,
        fillColor: '#9D2449',
        fillOpacity: 0.18
      }
    }).addTo(map);
    poligonoIxtapaluca.bringToBack();
    map.fitBounds(poligonoIxtapaluca.getBounds());
  })
  .catch(err => console.error('Error cargando polígono:', err));

// CORRECCIÓN LEAFLET MÓVIL
window.addEventListener("load", () => {
  setTimeout(() => map.invalidateSize(), 300);
});
