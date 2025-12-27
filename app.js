// 📍 DATOS DE EJEMPLO
const lugares = [
  {nombre:"JORGE JIMÉNEZ CANTÚ",lat:19.317364,lng:-98.848323,lista:"POZO 1",ficha:{estatus:"ACTIVO",gasto:"38",estado:"BUENO",domicilio:"CALLE CAÑADA S/N"},popup:"POZO 1"},
  {nombre:"SAN FRANCISCO",lat:19.338547,lng:-98.866603,lista:"POZO 2",ficha:{estatus:"ACTIVO",gasto:"21",estado:"Regular",domicilio:"CALLE SAN FRANCISCO"},popup:"POZO 2"},
  {nombre:"SAN JOSÉ LA PALMA",lat:19.321736,lng:-98.881706,lista:"POZO 3",ficha:{estatus:"ACTIVO",gasto:"20",estado:"Regular",domicilio:"CARRIL 7 S/N"},popup:"POZO 3"},
  {nombre:"NUEVO MÉXICO",lat:19.321361,lng:-98.8853,lista:"POZO 4",ficha:{estatus:"ACTIVO",gasto:"21",estado:"BUENO",domicilio:"CALLE NUEVO MEXICO"},popup:"POZO 4"},
  {nombre:"ACUEDUCTO",lat:19.322508,lng:-98.889406,lista:"POZO 5",ficha:{estatus:"ACTIVO",gasto:"42",estado:"BUENO",domicilio:"CALLE ACUEDUCTO"},popup:"POZO 5"}
];

// 🌍 MAPA
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
lugares.forEach(lugar => {
  lugar._marker = L.marker([lugar.lat, lugar.lng], {icon: iconopozos})
    .addTo(map)
    .bindPopup(`<strong>${lugar.popup}</strong><br>${lugar.nombre}`);
});

// AJUSTAR VISTA INICIAL
const group = L.featureGroup(lugares.map(l => l._marker));
map.fitBounds(group.getBounds());

// LISTA
const lista = document.getElementById("lista");
const infoBox = document.getElementById("info-box");

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
        document.getElementById("map").scrollIntoView({behavior: "smooth"});
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

// POLÍGONO DE EJEMPLO (si no tienes JSON)
const poligonoIxtapaluca = L.polygon([
  [19.31, -98.87],
  [19.32, -98.95],
  [19.34, -98.94],
  [19.33, -98.87]
], {
  color: '#9D2449',
  weight: 3,
  fillColor: '#9D2449',
  fillOpacity: 0.18
}).addTo(map);

poligonoIxtapaluca.bringToBack();
map.fitBounds(poligonoIxtapaluca.getBounds());

// REVALIDACIÓN LEAFLET MÓVIL
window.addEventListener("load", () => {
  setTimeout(() => map.invalidateSize(), 300);
});
