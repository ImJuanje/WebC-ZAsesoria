document.addEventListener('DOMContentLoaded', function() {
    // Datos de ejemplo (reemplaza con tus artículos reales)
    const allArticles = [
        {
            id:1,
            title: "Novedades fiscales en la Comunidad Valenciana para 2025",
            date: "20 de marzo de 2025",
            author: "C&Z Asesoría",
            content: [
                "La Generalitat Valenciana ha aprobado el Proyecto de Ley de Medidas Fiscales, de Gestión Administrativa y Financiera y de Organización para 2025, que introduce varias novedades tributarias.",
                "Entre las principales medidas se incluyen deducciones fiscales por nacimiento, adopción o acogimiento, así como beneficios fiscales para los sectores pesquero y agrícola.",
                "Además, se prorroga el Plan Especial de Apoyo a la Inversión Productiva en Municipios y se congelan el canon del agua y otras tasas.",
                "Estas medidas buscan fomentar la inversión, apoyar a las familias y sectores clave de la economía valenciana."
            ],
            tags: "#NovedadesFiscales2025 #ComunidadValenciana #DeduccionesFiscales #Empresas #Autónomos #LegislaciónTributaria",
            featured:false
        },
        {
            id:2,
            title: "El Gobierno ampliará la baja por nacimiento a 20 semanas",
            date: "25 de febrero de 2025",
            author: "C&Z Asesoría",
            content: [
                "El Gobierno ha anunciado un proyecto de ley para ampliar el permiso por nacimiento y cuidado del menor de 16 a 20 semanas, equiparando los permisos de maternidad y paternidad.",
                "La medida busca fomentar la corresponsabilidad en el cuidado de los hijos y mejorar la conciliación familiar.",
                "Esta ampliación se implementará de forma progresiva y se espera que entre en vigor en 2026.",
                "Las empresas deberán adaptarse a esta nueva normativa, planificando adecuadamente las sustituciones y reorganización de tareas durante los periodos de ausencia."
            ],
            tags: "#PermisoDeNascimiento #ConciliaciónFamiliar #Corresponsabilidad #Empresas #Autónomos #LegislaciónLaboral",
            featured:false
        },
         {
            id:3,
        title: "Claves fiscales 2025: Lo que empresas y autónomos deben tener en cuenta",
        date: "27 de marzo de 2025",
        author: "C&Z Asesoría",
        content: [
            "2025 trae importantes reformas fiscales. En el Impuesto sobre Sociedades, sube al 30% la reducción por reserva de capitalización y se restringen las bases negativas según volumen de ingresos.",
            "En el IRPF, aumentan los tipos sobre rentas del ahorro altas y se prorrogan deducciones por eficiencia energética y compra de vehículos eléctricos.",
            "La factura electrónica será obligatoria en uno o dos años, según volumen de negocio, y el sistema VeriFactu comenzará en 2026.",
            "Las empresas deben comenzar a prepararse para estos cambios."
        ],
        tags: "#NovedadesFiscales2025 #IRPF #ISociedades #FacturaElectrónica #VeriFactu #Empresas #Autónomos",
        featured:false
    },
    {
        id:4,
        title: "El Gobierno aprueba el Proyecto de Ley para reducir la jornada laboral a 37,5 horas semanales",
        date: "30 de abril de 2025",
        author: "C&Z Asesoría",
        content: [
            "El Consejo de Ministros ha aprobado el Proyecto de Ley de Reducción de Jornada, que rebaja progresivamente la jornada laboral de 40 a 37,5 horas semanales sin reducción salarial.",
            "La reducción será paulatina: a 38,5 horas desde enero de 2025 y a 37,5 horas en enero de 2026.",
            "El objetivo es mejorar la conciliación laboral y avanzar hacia estándares europeos.",
            "Las empresas y autónomos deberán adaptarse progresivamente a este nuevo marco, que aún debe superar el trámite parlamentario."
        ],
        tags: "#ReducciónDeJornada #ReformaLaboral #Conciliación #Empresas #Autónomos #LeyLaboral",
        featured:false
    },
    {
        id:5,
        title: "CEAV y Valorian retoman negociaciones clave para el nuevo convenio laboral de agencias de viajes",
        date: "6 de mayo de 2025",
        author: "C&Z Asesoría",
        content: [
            "El próximo lunes 12 de mayo, la Confederación Española de Agencias de Viajes (CEAV) y el sindicato Valorian se reunirán nuevamente para avanzar en la negociación del nuevo convenio laboral del sector.",
            "La última propuesta de Valorian incluye una subida salarial del 3% para 2025, restricciones a la cláusula de compensación y absorción, y un bonus del 1,5% sobre ventas si no se aplica la reducción de jornada.",
            "La medida que más tensión genera es precisamente la reducción a 37,5 horas semanales, aún pendiente de aprobación en el Congreso. CEAV apuesta por centrarse en el aspecto salarial de forma inmediata.",
            "Ambas partes muestran voluntad de acuerdo en un sector que sigue en crecimiento."
        ],
        tags: "#ConvenioLaboral #CEAV #Valorian #AgenciasDeViajes #ReducciónDeJornada #NegociaciónColectiva #EmpresasTurismo",
        featured:false
    },
    {
        id:6,
        title: "Nuevo sistema de registro horario digital obligatorio para empresas en 2025",
        date: "12 de diciembre de 2024",
        author: "C&Z Asesoría",
        content: [
            "A partir de 2025, todas las empresas en España estarán obligadas a implementar un sistema de registro horario digital para sus empleados, eliminando los métodos manuales como hojas en papel o archivos Excel.",
            "El nuevo sistema debe ser accesible para los trabajadores, representantes sindicales y la Inspección de Trabajo, permitiendo una supervisión más eficiente y evitando manipulaciones en los registros.",
            "Las empresas que no cumplan con esta normativa se enfrentarán a sanciones que pueden oscilar entre 750 y 10.000 euros por trabajador afectado.",
            "Es fundamental que las empresas se preparen para esta transición, adoptando soluciones digitales que garanticen el cumplimiento de la ley y la protección de los datos personales de los empleados."
        ],
        tags: "#RegistroHorarioDigital #ControlLaboral #Empresas #Autónomos #LegislaciónLaboral #TransformaciónDigital",
        featured:false
    },
    {
            id: 101,
            title: "Claves fiscales 2025: Lo que empresas y autónomos deben tener en cuenta",
            date: "27 de marzo de 2025",
            author: "C&Z Asesoría",
            excerpt: "2025 trae importantes reformas fiscales que afectan a empresas y autónomos...",
            featured: true
        },
        {
            id: 102,
            title: "Nuevo sistema de registro horario digital obligatorio",
            date: "12 de diciembre de 2024",
            author: "C&Z Asesoría",
            excerpt: "A partir de 2025, todas las empresas deberán implementar registro horario digital...",
            featured: true
        },
        {
            id: 103,
            title: "Reducción de jornada laboral a 37.5 horas semanales",
            date: "30 de abril de 2025",
            author: "C&Z Asesoría",
            excerpt: "El Gobierno aprueba proyecto para reducir jornada laboral progresivamente...",
            featured: true
        }

        // Añade más artículos según necesites (mínimo 5 para probar la paginación)
    ];


    const articlesPerPage = 2;
    let currentPage = 1;
    const mainArticles = allArticles.filter(article => !article.featured);
    const totalPages = Math.ceil(mainArticles.length / articlesPerPage);

    // Elementos del DOM
    const articlesContainer = document.getElementById('articles-container');
    const featuredContainer = document.getElementById('featured-articles');
    const prevBtn = document.getElementById('prev-btn');
    const nextBtn = document.getElementById('next-btn');
    const pageIndicator = document.getElementById('page-indicator');

    // Función para renderizar artículos principales
    function renderMainArticles() {
        articlesContainer.innerHTML = '';
        
        const startIndex = (currentPage - 1) * articlesPerPage;
        const endIndex = startIndex + articlesPerPage;
        const articlesToShow = mainArticles.slice(startIndex, endIndex);

        articlesToShow.forEach(article => {
            const articleEl = document.createElement('article');
            articleEl.className = 'blog-post';
            articleEl.innerHTML = `
                <h2 class="display-5 link-body-emphasis mb-1">${article.title}</h2>
                <p class="blog-post-meta">${article.date} <a href="#">${article.author}</a></p>
                ${article.content.map(p => `<p style="text-align: justify;">${p}</p>`).join('')}
                <p style="font-style: italic;">${article.tags}</p>
                <hr>
            `;
            articlesContainer.appendChild(articleEl);
        });

        updatePaginationControls();
    }

    // Función para renderizar artículos destacados
    function renderFeaturedArticles() {
        featuredContainer.innerHTML = '';
        
        const featuredArticles = allArticles.filter(article => article.featured);
        
        featuredArticles.forEach(article => {
            const li = document.createElement('li');
            li.innerHTML = `
             
                    <div class="col-lg-8">
                        <h6 class="mb-0">${article.title}</h6>
                        <small class="text-body-secondary">${article.date}</small>
                        <p class="mt-1 small">${article.excerpt}</p>
                    </div>
                
            `;
            featuredContainer.appendChild(li);
        });
    }

    function updatePaginationControls() {
        pageIndicator.textContent = `Página ${currentPage} de ${totalPages}`;
        prevBtn.disabled = currentPage === 1;
        nextBtn.disabled = currentPage === totalPages;
    }

    // Event listeners
    prevBtn.addEventListener('click', () => {
        if (currentPage > 1) {
            currentPage--;
            renderMainArticles();
        }
    });

    nextBtn.addEventListener('click', () => {
        if (currentPage < totalPages) {
            currentPage++;
            renderMainArticles();
        }
    });

    // Inicialización
    renderMainArticles();
    renderFeaturedArticles();
});