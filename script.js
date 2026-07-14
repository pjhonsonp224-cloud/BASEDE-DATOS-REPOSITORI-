document.addEventListener("DOMContentLoaded", function () {
  const GITHUB_REPO_URL = "https://github.com/pjhonsonp224-cloud";
  const iconos = ["💎", "🚀", "⚡", "🔮", "🛠️", "📡", "🛡️", "🔋", "💡", "🧠", "🎯", "🔌", "🛰️", "🧪", "⚙️"];

  const semanas = [
    { label: "Semana 1", descripcion: "Manuales e informe técnico.", archivos: [{ nombre: "ARQUITECTURA DE BASES DE DATOS", enlace: "archivos/Arquitectura de Sistemas de Bases de Datos.pdf" }, { nombre: "INFORME BASE DE DATOS II", enlace: "archivos/repositoros comparacion.pdf" }] },
    { label: "Semana 2", descripcion: "Instalación y modelamiento.", archivos: [{ nombre: "Manual SQL Server", enlace: "archivos/2semana_manualSQL.pdf" }, { nombre: "Modelamiento de datos", enlace: "archivos/SEMANA 2 Pregunta 01 Y 02.pdf" }] },
    { label: "Semana 3", descripcion: "Niveles de abstracción.", archivos: [{ nombre: "Resumen Arquitectura", enlace: "archivos/semana 3 resumen de arquitectura de datos y niveles de abstraccion.pdf" }, { nombre: "Modelo Relación", enlace: "archivos/3 semana modelado de datos preguntas.pdf" }] },
    { label: "Semana 4", descripcion: "Arquitectura de datos S4.", archivos: [{ nombre: "RESUMEN DE ARQUITECTURA", enlace: "archivos/SEMANA 4.pdf" }] },
    
    { label: "Semana 5", descripcion: "INTRODUCCION A MIRCROSOFT SQL SERVER.", archivos: [{ nombre: "INTRODUCCION A MIRCROSOFT SQL SERVER", enlace: "archivos/semana 5-1.pdf" }, { nombre: "NORMALIZACION DE BASE DE DATOS", enlace: "archivos/semana 5-2.pdf" }] },
    { label: "Semana 6", descripcion: "Resumen de Base de datos de microsoft SQL server.", archivos: [{ nombre: "Resumen Semana 6", enlace: "archivos/Presentation 1 semana 6.pdf"}] },
    { label: "Semana 7", descripcion: "TABLAS DE MICROSOFT SQL SERVER.", archivos: [{ nombre: "TABLAS DE MICROSOFT SQL SERVER 2022", enlace: "archivos/SEMANA 7-1.pdf" }] },
    { label: "Semana 8", descripcion: "Consultas SQL avanzadas.", archivos: [{ nombre: "CONSULTAS AVAZADAS", enlace: "archivos/semana 8-1.pdf" },{ nombre: "GUIA DE CONSULTAS", enlace: "archivos/semana 8-2.pdf" },{ nombre: "BASE DE DATOS", enlace: "archivos/semana 8-1.pdf" }] },
   
    { label: "Semana 9", descripcion: "Reglamento General de Grados y Títulos de Pregrado de la UPLA.", archivos: [{ nombre: "grados y titulos ", enlace: "archivos/semana 9-1.pdf" },{ nombre: "guia de objetos y programacion ", enlace: "archivos/semana9-2.pdf" }] },
    { label: "Semana 10", descripcion: "ADMINISTRACION ESENCIAL.", archivos: [{ nombre: "MANUAL DE REGISTRO DE MICROSOFT AZURE", enlace: "archivos/semana 10-2.pdf" },{ nombre: "ADMINISTRACION DE ESENCIAS ", enlace: "archivos/semana 10-1.pdf" }] },
    { label: "Semana 11", descripcion: "SEGURIDAD Y CONTROL DE ACCESO .", archivos: [{ nombre: "PRACTICA SEMANA 11", enlace: "archivos/semana11_PRACTICA.pdf" },{ nombre: "PRACTICA SEMANA 11 SEGUIRDAD Y CONTROL DE ACCESO", enlace: "archivos/semana 11-1.pdf" }] },
    { label: "Semana 12", descripcion: "RESPALADOS Y RECUPERACION.", archivos: [{ nombre: "PRACTICA SEMANA 12", enlace: "archivos/semana 12-1.pdf" }] },
    
    { label: "Semana 13", descripcion: "MONITOREO Y RENDIMIENTO.", archivos: [{ nombre: "PRACTICA-SEMANA 13", enlace: "archivos/semana 13-1.pdf" }] },
    { label: "Semana 14", descripcion: "AUTOMATIZACION Y MANTENIMIENTO.", archivos: [{ nombre: "Practica - Semana 14", enlace: "archivos/semana 14 -1.pdf" },{ nombre: "Practica - Semana 14", enlace: "archivos/semana 14-2.pdf" }] },
    { label: "Semana 15", descripcion: "Microsoft SQL Azure - Administracion y desarrollo en la nube.", archivos: [{ nombre: "Resumen General", enlace: "archivos/semana 15 -1.pdf" },] }
     { label: "Semana 15", descripcion: "Microsoft SQL Azure - Administracion y desarrollo en la nube II .", archivos: [{ nombre: "Resumen General II", enlace: "archivos/semana 16 - 1.pdf" }] }
  ];

  const contenedor = document.getElementById("contenedor-semanas");
  const modal = document.getElementById("modal-tarea");

  function dibujarSemanas() {
    contenedor.innerHTML = "";
    let gridSemanas = null;

    semanas.forEach((sem, idx) => {
      if (idx % 4 === 0) {
        const unidadWrap = document.createElement("section");
        unidadWrap.className = "unidad-container";
        unidadWrap.innerHTML = `<h3 class="unidad-header">Unidad ${Math.floor(idx/4) + 1}</h3>`;
        gridSemanas = document.createElement("div");
        gridSemanas.className = "unidad-grid";
        unidadWrap.appendChild(gridSemanas);
        contenedor.appendChild(unidadWrap);
      }
      const card = document.createElement("div");
      card.className = "tarjeta-semana";
      card.innerHTML = `<span class="icon-semana">${iconos[idx % iconos.length]}</span><h4>${sem.label}</h4><p style="font-size:0.85rem; color:#94a3b8;">${sem.descripcion}</p>`;
      card.onclick = () => abrirModal(idx);
      gridSemanas.appendChild(card);
    });
  }

  function abrirModal(idx) {
    const sem = semanas[idx];
    modal.innerHTML = `
      <div class="modal-content">
        <div style="padding:20px; background:#0f172a; border-bottom:1px solid #334155; display:flex; justify-content:space-between; align-items:center;">
          <h2 style="color:#38bdf8; margin:0;">${sem.label}</h2>
          <button id="cerrar-modal" style="background:#ef4444; border:none; color:white; padding:8px 15px; border-radius:8px; cursor:pointer; font-weight:bold;">✕</button>
        </div>
        <div class="modal-body">
          <div class="modal-files">
            <h4 style="margin-bottom:15px; color:#94a3b8;">Documentos</h4>
            ${sem.archivos.map((a, i) => `<button class="file-item ${i===0?'activo':''}" data-enlace="${a.enlace}">${a.nombre}</button>`).join('')}
          </div>
          <div class="modal-viewer" id="visor-pdf">
            <embed src="${sem.archivos[0].enlace}" type="application/pdf" width="100%" height="100%">
          </div>
        </div>
        <div class="modal-actions">
           <a href="${sem.archivos[0].enlace}" id="btn-abrir-externo" target="_blank" class="btn-open">🔗 Abrir en nueva pestaña</a>
           <a href="${GITHUB_REPO_URL}" target="_blank" class="btn-github">Ver en GitHub</a>
        </div>
      </div>`;

    modal.classList.add("mostrar");
    document.getElementById("cerrar-modal").onclick = () => modal.classList.remove("mostrar");

    const btnsArchivos = modal.querySelectorAll(".file-item");
    btnsArchivos.forEach(btn => {
      btn.onclick = function() {
        btnsArchivos.forEach(b => b.classList.remove("activo"));
        this.classList.add("activo");
        const url = this.getAttribute("data-enlace");
        document.getElementById("visor-pdf").innerHTML = `<embed src="${url}" type="application/pdf" width="100%" height="100%">`;
        document.getElementById("btn-abrir-externo").href = url; // ACTUALIZA EL BOTÓN AL CAMBIAR PDF
      };
    });
  }

  dibujarSemanas();
});


