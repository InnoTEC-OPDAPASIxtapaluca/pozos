// DATOS (ya tus 52 lugares)
const lugares = [ /* aquí van tus 52 objetos tal como los tienes */ ];

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

// MARCADORES y guardarlos en cada objeto
lugares.forEach(lugar => {
  const marker = L.marker([lugar.lat, lugar.lng], { icon: iconopozos })
    .addTo(map)
    .bindPopup(`<strong>${lugar.lista}</strong><br>${lugar.nombre}`);
  lugar._marker = marker;
});

// AJUSTE INICIAL de vista
const group = L.featureGroup(lugares.map(l => l._marker));
map.fitBounds(group.getBounds());

// ELEMENTOS HTML
const lista = document.getElementById("lista");
const infoBox = document.getElementById("info-box");

// RENDER LISTA
function renderLista(data) {
  lista.innerHTML = "";
  const esMovil = window.innerWidth <= 768;
  const dataMostrada = esMovil ? data.slice(0, 5) : data;

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

      map.flyTo([l.lat, l.lng], 16, { duration: 0.8 });
      l._marker.openPopup();

      if (esMovil) {
        document.getElementById("map").scrollIntoView({ behavior: "smooth" });
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

renderLista(lugares);

// BOTÓN CENTRAR
document.getElementById("btn-centro").onclick = () => {
  map.fitBounds(group.getBounds());
};

// POLÍGONO
fetch('./data/poligono_ixtapaluca.json')
  .then(res => res.json())
  .then(geojson => {
    const poligono = L.geoJSON(geojson, {
      style: { color:'#9D2449', weight:3, fillColor:'#9D2449', fillOpacity:0.18 }
    }).addTo(map);
    poligono.bringToBack();
    map.fitBounds(poligono.getBounds());
  })
  .catch(err => console.error('Error cargando poligono_ixtapaluca.geojson:', err));

// LEAFLET MOBILE FIX
window.addEventListener("load", () => {
  setTimeout(() => { map.invalidateSize(); }, 300);
});
