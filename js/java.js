
const partidos = [
  {
    local: "Brasil - Producción de Azúcar",
    visitante: "Argentina - Mantenimiento Industrial",
    fecha: "Jueves 29 de octubre de 2026",
    hora: "4:00 p. m.",
    cancha: "Cancha 1",
    estado: "Programado"
  },
  {
    local: "Francia - Recursos Humanos",
    visitante: "Alemania - Seguridad Industrial",
    fecha: "Jueves 29 de octubre de 2026",
    hora: "4:00 p. m.",
    cancha: "Cancha 2",
    estado: "Programado"
  },
  {
    local: "España - Fábrica",
    visitante: "Portugal - Contabilidad",
    fecha: "Viernes 30 de octubre de 2026",
    hora: "4:00 p. m.",
    cancha: "Cancha 1",
    estado: "Programado"
  },
  {
    local: "Países Bajos - Compras",
    visitante: "Inglaterra - Bodega y Almacén",
    fecha: "Viernes 30 de octubre de 2026",
    hora: "4:00 p. m.",
    cancha: "Cancha 2",
    estado: "Programado"
  },
  {
    local: "Uruguay - Logística y Transporte",
    visitante: "México - Administración",
    fecha: "Sábado 31 de octubre de 2026",
    hora: "9:00 a. m.",
    cancha: "Cancha 1",
    estado: "Programado"
  },
  {
    local: "Japón - Sistemas y Tecnología",
    visitante: "Italia - Gestión de Calidad",
    fecha: "Sábado 31 de octubre de 2026",
    hora: "9:00 a. m.",
    cancha: "Cancha 2",
    estado: "Programado"
  }
];



const equipos = [
  { nombre: "Brasil - Producción de Azúcar", pj: 8, pg: 6, pe: 1, pp: 1, gf: 18, gc: 7 },
  { nombre: "Argentina - Mantenimiento Industrial", pj: 8, pg: 6, pe: 1, pp: 1, gf: 16, gc: 6 },
  { nombre: "Francia - Recursos Humanos", pj: 8, pg: 5, pe: 2, pp: 1, gf: 15, gc: 8 },
  { nombre: "Alemania - Seguridad Industrial", pj: 8, pg: 5, pe: 1, pp: 2, gf: 17, gc: 10 },
  { nombre: "España - Fábrica", pj: 8, pg: 4, pe: 3, pp: 1, gf: 14, gc: 8 },
  { nombre: "Italia - Gestión de Calidad", pj: 8, pg: 4, pe: 2, pp: 2, gf: 13, gc: 9 },
  { nombre: "Portugal - Contabilidad", pj: 8, pg: 4, pe: 1, pp: 3, gf: 12, gc: 10 },
  { nombre: "Países Bajos - Compras", pj: 8, pg: 3, pe: 3, pp: 2, gf: 11, gc: 9 },
  { nombre: "Inglaterra - Bodega y Almacén", pj: 8, pg: 3, pe: 2, pp: 3, gf: 10, gc: 10 },
  { nombre: "Uruguay - Logística y Transporte", pj: 8, pg: 2, pe: 3, pp: 3, gf: 9, gc: 12 },
  { nombre: "México - Administración", pj: 8, pg: 2, pe: 2, pp: 4, gf: 8, gc: 13 },
  { nombre: "Japón - Sistemas y Tecnología", pj: 8, pg: 1, pe: 1, pp: 6, gf: 6, gc: 17 }
];


// Mostrar próximos partidos
const lista = document.getElementById("lista-partidos");


if (lista) {
  lista.innerHTML = partidos.map(partido => `
    <article class="match-card">
      <span class="tag">${partido.cancha}</span>
      <h3>${partido.local}</h3>
      <p>vs.</p>
      <h3>${partido.visitante}</h3>
      <p>${partido.fecha}</p>
      <p>${partido.hora}</p>
      <p>${partido.estado}</p>
    </article>
  `).join("");
}


// Calcular y mostrar posiciones
const tabla = document.getElementById("tabla-posiciones");

if (tabla) {
  const posiciones = equipos
    .map(equipo => ({
      ...equipo,
      puntos: equipo.pg * 3 + equipo.pe,
      diferencia: equipo.gf - equipo.gc
    }))
    .sort((a, b) =>
      b.puntos - a.puntos ||
      b.diferencia - a.diferencia ||
      b.gf - a.gf
    );

  tabla.innerHTML = posiciones.map((equipo, indice) => `
    <tr>
      <td>${indice + 1}</td>
      <td>${equipo.nombre}</td>
      <td>${equipo.pj}</td>
      <td>${equipo.pg}</td>
      <td>${equipo.pe}</td>
      <td>${equipo.pp}</td>
      <td>${equipo.gf}</td>
      <td>${equipo.gc}</td>
      <td>${equipo.diferencia > 0 ? "+" : ""}${equipo.diferencia}</td>
      <td><strong>${equipo.puntos}</strong></td>
    </tr>
  `).join("");
}
