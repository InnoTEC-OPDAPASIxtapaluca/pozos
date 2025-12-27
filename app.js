// DATOS (ya tus 52 lugares)
// 📍 DATOS MANUALES (EDITABLES)

const lugares = [
  {nombre:"JORGE JIMÉNEZ CANTÚ",lat:19.317364,lng:-98.848323,lista:"POZO 1",ficha:{estatus:"ACTIVO",gasto:"38",estado:"BUENO",domicilio:"CALLE CAÑADA S/N, ENTRE CAMINO A LA CAÑADA Y LOS GIRASOLES, COL. JORGE JIMENEZ CANTÚ, MUNICIPIO DE IXTAPALUCA, ESTADO DE MÉXICO"},popup:"POZO 1"},
  {nombre:"SAN FRANCISCO",lat:19.338547,lng:-98.866603,lista:"POZO 2",ficha:{estatus:"ACTIVO",gasto:"21",estado:"Regular",domicilio:"CALLE SAN FRANCISCO DE ASIS S/N CALLE 211 Y CALLE 212, COL. JESUS MARIA, IXTAPALUCA, EDOMEX"},popup:"POZO 2"},
  {nombre:"SAN JOSÉ LA PALMA",lat:19.321736,lng:-98.881706,lista:"POZO 3",ficha:{estatus:"ACTIVO",gasto:"20",estado:"Regular",domicilio:"CARRIL 7 S/N LOTE 14 Y 15, COL. LA ERA, IXTAPALUCA, EDOMEX"},popup:"POZO 3"},
  {nombre:"NUEVO MÉXICO",lat:19.321361,lng:-98.8853,lista:"POZO 4",ficha:{estatus:"ACTIVO",gasto:"21",estado:"BUENO",domicilio:"CALLE NUEVO MEXICO S/N, COL. LA ERA, IXTAPALUCA, EDOMEX"},popup:"POZO 4"},
  {nombre:"ACUEDUCTO",lat:19.322508,lng:-98.889406,lista:"POZO 5",ficha:{estatus:"ACTIVO",gasto:"42",estado:"BUENO",domicilio:"CALLE ACUEDUCTO S/N, COL. LA ERA, IXTAPALUCA, EDOMEX"},popup:"POZO 5"},
  {nombre:"CHOCOLINES",lat:19.325381,lng:-98.897678,lista:"POZO 6",ficha:{estatus:"ACTIVO",gasto:"22",estado:"BUENO",domicilio:"CALLE ENCINO S/N, COL. PLUTARCO ELIAS CALLES, IXTAPALUCA, EDOMEX"},popup:"POZO 6"},
  {nombre:"TEJOLOTE",lat:19.317868,lng:-98.913981,lista:"POZO 7",ficha:{estatus:"ACTIVO",gasto:"38",estado:"BUENO",domicilio:"CALLE UNION S/N, COL. CERRO DEL TEJOLOTE, IXTAPALUCA, EDOMEX"},popup:"POZO 7"},
  {nombre:"IZCALLI",lat:19.318911,lng:-98.935976,lista:"POZO 8",ficha:{estatus:"ACTIVO",gasto:"32",estado:"BUENO",domicilio:"CALLE SAUCES S/N, FRACC. IZCALLI, IXTAPALUCA, EDOMEX"},popup:"POZO 8"},
  {nombre:"RANCHO DEL CARMEN",lat:19.3211,lng:-98.9397,lista:"POZO 9",ficha:{estatus:"ACTIVO",gasto:"25",estado:"Malo",domicilio:"AV. CUAUHTÉMOC, RANCHO DEL CARMEN, IXTAPALUCA"},popup:"POZO 9"},
  {nombre:"JOSE DE LA MORA",lat:19.30767,lng:-98.91973,lista:"POZO 10",ficha:{estatus:"ACTIVO",gasto:"8",estado:"Regular",domicilio:"FRACC. JOSÉ DE LA MORA, IXTAPALUCA"},popup:"POZO 10"},
  {nombre:"SANTA CRUZ TLAPACOYA",lat:19.30784,lng:-98.90736,lista:"POZO 11",ficha:{estatus:"ACTIVO",gasto:"39",estado:"BUENO",domicilio:"COL. SANTA CRUZ TLAPACOYA, IXTAPALUCA"},popup:"POZO 11"},
  {nombre:"SANTA CRUZ TLAPACOYA",lat:19.30617,lng:-98.91134,lista:"POZO 11ª",ficha:{estatus:"INACTIVO",gasto:"0",estado:"Malo",domicilio:"AMPLIACION TLAPACOYA, IXTAPALUCA"},popup:"POZO 11ª"},
  {nombre:"ALFREDO DEL MAZO",lat:19.29326,lng:-98.90808,lista:"POZO 12",ficha:{estatus:"ACTIVO",gasto:"70",estado:"BUENO",domicilio:"COL. ALFREDO DEL MAZO, IXTAPALUCA"},popup:"POZO 12"},
  {nombre:"JARAL",lat:19.29502,lng:-98.88661,lista:"POZO 13",ficha:{estatus:"ACTIVO",gasto:"53",estado:"BUENO",domicilio:"COL. JARAL, IXTAPALUCA"},popup:"POZO 13"},
  {nombre:"SAN FRANCISCO ACUAUTLA",lat:19.35074,lng:-98.85267,lista:"POZO 14",ficha:{estatus:"ACTIVO",gasto:"18",estado:"BUENO",domicilio:"SAN FRANCISCO ACUAUTLA"},popup:"POZO 14"},
  {nombre:"SAN FRANCISCO ACUAUTLA",lat:19.33884,lng:-98.8564,lista:"POZO 15",ficha:{estatus:"ACTIVO",gasto:"20",estado:"Regular",domicilio:"SAN FRANCISCO ACUAUTLA"},popup:"POZO 15"},
  {nombre:"TLALPIZAHUAC",lat:19.33438,lng:-98.94466,lista:"POZO 16",ficha:{estatus:"ACTIVO",gasto:"42",estado:"BUENO",domicilio:"TLALPIZAHUAC"},popup:"POZO 16"},
  {nombre:"LOS HEROES",lat:19.32529,lng:-98.87156,lista:"POZO 17",ficha:{estatus:"ACTIVO",gasto:"13",estado:"Malo",domicilio:"U.H. LOS HEROES"},popup:"POZO 17"},
  {nombre:"LOS HEROES",lat:19.33213,lng:-98.87107,lista:"POZO 18",ficha:{estatus:"ACTIVO",gasto:"14",estado:"Malo",domicilio:"U.H. LOS HEROES"},popup:"POZO 18"},
  {nombre:"LOS HEROES",lat:19.32818,lng:-98.8675,lista:"POZO 19",ficha:{estatus:"ACTIVO",gasto:"6",estado:"Regular",domicilio:"U.H. LOS HEROES"},popup:"POZO 19"},
  {nombre:"LOS HEROES",lat:19.32858,lng:-98.87686,lista:"POZO 20",ficha:{estatus:"ACTIVO",gasto:"21",estado:"Regular",domicilio:"U.H. LOS HEROES"},popup:"POZO 20"},
  {nombre:"LOS HEROES",lat:19.32376,lng:-98.87996,lista:"POZO 21",ficha:{estatus:"ACTIVO",gasto:"48",estado:"BUENO",domicilio:"U.H. LOS HEROES"},popup:"POZO 21"},
  {nombre:"LOS HEROES",lat:19.33175,lng:-98.8838,lista:"POZO 22",ficha:{estatus:"ACTIVO",gasto:"35",estado:"BUENO",domicilio:"U.H. LOS HEROES"},popup:"POZO 22"},
  {nombre:"MELCHOR OCAMPO",lat:19.31931,lng:-98.90905,lista:"POZO 23",ficha:{estatus:"ACTIVO",gasto:"35",estado:"BUENO",domicilio:"COL. MELCHOR OCAMPO"},popup:"POZO 23"},
  {nombre:"ARBOLADA",lat:19.31368,lng:-98.89852,lista:"POZO 24",ficha:{estatus:"ACTIVO",gasto:"41",estado:"BUENO",domicilio:"ARBOLADAS, IXTAPALUCA"},popup:"POZO 24"},
  {nombre:"SAN JACINTO",lat:19.31115,lng:-98.8882,lista:"POZO 25",ficha:{estatus:"ACTIVO",gasto:"48",estado:"BUENO",domicilio:"U.H. SAN JACINTO"},popup:"POZO 25"},
  {nombre:"LA ROSA DE SAN FRANCISCO",lat:19.34185,lng:-98.86732,lista:"POZO 26",ficha:{estatus:"ACTIVO",gasto:"9",estado:"Malo",domicilio:"LA ROSA, IXTAPALUCA"},popup:"POZO 26"},
  {nombre:"4 VIENTOS",lat:19.29848,lng:-98.84687,lista:"POZO 27",ficha:{estatus:"ACTIVO",gasto:"24",estado:"BUENO",domicilio:"CUATRO VIENTOS"},popup:"POZO 27"},
  {nombre:"4 VIENTOS",lat:19.29601,lng:-98.83261,lista:"POZO 28",ficha:{estatus:"INACTIVO",gasto:"13",estado:"Malo",domicilio:"CUATRO VIENTOS"},popup:"POZO 28"},
  {nombre:"4 VIENTOS",lat:19.29141,lng:-98.83547,lista:"POZO 29",ficha:{estatus:"ACTIVO",gasto:"7.5",estado:"Regular",domicilio:"CUATRO VIENTOS"},popup:"POZO 29"},
  {nombre:"SAN BUENAVENTURA",lat:19.30525,lng:-98.86633,lista:"POZO 30",ficha:{estatus:"ACTIVO",gasto:"35",estado:"BUENO",domicilio:"SAN BUENAVENTURA"},popup:"POZO 30"},
  {nombre:"SAN BUENAVENTURA",lat:19.3132,lng:-98.85996,lista:"POZO 31",ficha:{estatus:"ACTIVO",gasto:"37",estado:"BUENO",domicilio:"SAN BUENAVENTURA"},popup:"POZO 31"},
  {nombre:"SAN BUENAVENTURA",lat:19.30603,lng:-98.85744,lista:"POZO 32",ficha:{estatus:"ACTIVO",gasto:"38",estado:"Regular",domicilio:"SAN BUENAVENTURA"},popup:"POZO 32"},
  {nombre:"SANTA BARBARA",lat:19.30986,lng:-98.90112,lista:"POZO 33",ficha:{estatus:"ACTIVO",gasto:"40",estado:"Regular",domicilio:"SANTA BARBARA"},popup:"POZO 33"},
  {nombre:"SANTA BARBARA",lat:19.3025,lng:-98.89816,lista:"POZO 34",ficha:{estatus:"ACTIVO",gasto:"40",estado:"BUENO",domicilio:"SANTA BARBARA"},popup:"POZO 34"},
  {nombre:"SANTA BARBARA",lat:19.29613,lng:-98.89149,lista:"POZO 35",ficha:{estatus:"ACTIVO",gasto:"45",estado:"BUENO",domicilio:"SANTA BARBARA"},popup:"POZO 35"},
  {nombre:"PALMAS 1",lat:19.30855,lng:-98.89407,lista:"POZO 36",ficha:{estatus:"ACTIVO",gasto:"40",estado:"BUENO",domicilio:"PALMAS"},popup:"POZO 36"},
  {nombre:"JESUS MARIA",lat:19.32726,lng:-98.8833,lista:"POZO 37",ficha:{estatus:"ACTIVO",gasto:"32",estado:"Regular",domicilio:"JESUS MARIA"},popup:"POZO 37"},
  {nombre:"LINDEROS",lat:19.33921,lng:-98.85984,lista:"POZO 38",ficha:{estatus:"ACTIVO",gasto:"8.5",estado:"Malo",domicilio:"LINDEROS"},popup:"POZO 38"},
  {nombre:"LOMAS DE IXTAPALUCA",lat:19.31493,lng:-98.91075,lista:"POZO 39",ficha:{estatus:"ACTIVO",gasto:"38",estado:"BUENO",domicilio:"LOMAS DE IXTAPALUCA"},popup:"POZO 39"},
  {nombre:"AMPLIACION SAN FRANCISCO",lat:19.35287,lng:-98.85072,lista:"POZO 40",ficha:{estatus:"ACTIVO",gasto:"21",estado:"BUENO",domicilio:"AMPLIACION SAN FRANCISCO"},popup:"POZO 40"},
  {nombre:"TLALPIZAHUAC",lat:19.32974,lng:-98.94719,lista:"POZO 41",ficha:{estatus:"ACTIVO",gasto:"45",estado:"Regular",domicilio:"TLALPIZAHUAC"},popup:"POZO 41"},
  {nombre:"HORNOS DE SANTA BARBARA",lat:19.3182,lng:-98.8992,lista:"POZO 42",ficha:{estatus:"ACTIVO",gasto:"39",estado:"BUENO",domicilio:"HORNOS DE SANTA BARBARA"},popup:"POZO 42"},
  {nombre:"LA VIRGEN",lat:19.3036,lng:-98.87512,lista:"POZO 43",ficha:{estatus:"ACTIVO",gasto:"30.9",estado:"BUENO",domicilio:"COL. LA VIRGEN"},popup:"POZO 43"},
  {nombre:"6 DE JUNIO",lat:19.32511,lng:-98.93195,lista:"POZO 44",ficha:{estatus:"ACTIVO",gasto:"49",estado:"BUENO",domicilio:"COL. 6 DE JUNIO"},popup:"POZO 44"},
  {nombre:"EL TEJOLOTE",lat:19.32292,lng:-98.91114,lista:"POZO 45",ficha:{estatus:"ACTIVO",gasto:"38",estado:"Regular",domicilio:"COL. EL TEJOLOTE"},popup:"POZO 45"},
  {nombre:"PALMAS 3",lat:19.30342,lng:-98.88889,lista:"POZO 46",ficha:{estatus:"ACTIVO",gasto:"32",estado:"BUENO",domicilio:"PALMAS 3"},popup:"POZO 46"},
  {nombre:"4 VIENTOS",lat:19.29473,lng:-98.84405,lista:"POZO 47",ficha:{estatus:"ACTIVO",gasto:"8.4",estado:"Malo",domicilio:"CUATRO VIENTOS"},popup:"POZO 47"},
  {nombre:"COATEPEC",lat:19.37079,lng:-98.85453,lista:"POZO 48",ficha:{estatus:"ACTIVO",gasto:"9.6",estado:"Malo",domicilio:"COATEPEC"},popup:"POZO 48"},
  {nombre:"LA ROSA DE SAN FRANCISCO",lat:19.33607,lng:-98.87227,lista:"POZO 49",ficha:{estatus:"ACTIVO",gasto:"24.6",estado:"BUENO",domicilio:"LA ROSA"},popup:"POZO 49"},
  {nombre:"4 VIENTOS",lat:19.28936,lng:-98.84619,lista:"POZO 50",ficha:{estatus:"ACTIVO",gasto:"30",estado:"BUENO",domicilio:"CUATRO VIENTOS"},popup:"POZO 50"},
  {nombre:"1 ULTRA",lat:19.32125,lng:-98.942056,lista:"POZO 51",ficha:{estatus:"ACTIVO",gasto:"55",estado:"SIN DATOS",domicilio:"SIN DATOS"},popup:"POZO 51"},
  {nombre:"3 ULTRA",lat:19.321583,lng:-98.943389,lista:"POZO 52",ficha:{estatus:"ACTIVO",gasto:"80",estado:"BUENO",domicilio:"SIN DATOS"},popup:"POZO 52"}
];



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
