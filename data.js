var COURSE_DATA = {
  summaries: {
    UF1441: {
      UD1: {
        title: "UD1. Organización de proyectos de obra o montaje de electrificación",
        badge: "UF1441 · Unidad Didáctica 1",
        sections: [
          {
            heading: "1. Instalaciones eléctricas tipo y reglamentación (REBT)",
            points: [
              "<strong>Acometida (ITC-BT-11):</strong> Parte de la red de distribución que alimenta la Caja General de Protección (CGP). Puede ser aérea, subterránea o mixta.",
              "<strong>Instalaciones de enlace (ITC-BT-12 a ITC-BT-16):</strong> Unen la CGP con las instalaciones interiores. Comprenden CGP, Línea General de Alimentación (LGA), elementos para la ubicación de contadores, Derivación Individual (DI), caja para ICP y dispositivos generales de mando y protección.",
              "<strong>Instalaciones interiores (ITC-BT-19 a ITC-BT-27):</strong> Electrificación básica (mínimo 5.750 W a 230 V, circuitos C1 a C5) y elevada (> 9.200 W o > 160 m², circuitos C6 a C12).",
              "<strong>Locales de pública concurrencia y especiales (ITC-BT-28 a ITC-BT-30):</strong> Requieren alumbrado de emergencia (mínimo 1 lux en evacuación durante 1 hora), suministro complementario según aforo y protección contra humedad, corrosión o incendio."
            ]
          },
          {
            heading: "2. Documentación técnica y administrativa (ITC-BT-04)",
            points: [
              "<strong>Memoria Técnica de Diseño (MTD):</strong> Obligatoria para instalaciones pequeñas (ej. viviendas hasta 50 kW, locales de pública concurrencia sin proyecto específico).",
              "<strong>Proyecto Técnico:</strong> Redactado y firmado por técnico titulado competente cuando se superan los límites de la MTD (ej. edificios de viviendas con potencia > 100 kW por CGP, industrias > 20 kW, locales húmedos > 10 kW, alumbrado exterior > 5 kW).",
              "<strong>Certificado de Instalación Eléctrica (CIE):</strong> Documento emitido por el instalador autorizado tras superar las verificaciones previas a la puesta en servicio."
            ]
          },
          {
            heading: "3. Replanteo, rendimientos y calidad en el montaje",
            points: [
              "<strong>Replanteo en obra:</strong> Traslado de las cotas de planos al terreno respetando recorridos rectilíneos, ángulos de giro menores de 45°, alturas reglamentarias de mecanismos y distancias de seguridad respecto a conducciones de agua y gas.",
              "<strong>Gestión de tiempos y recursos:</strong> Cálculo de rendimientos de mano de obra, acopio ordenado de materiales con marcado CE y aplicación de planes de aseguramiento de la calidad."
            ]
          }
        ]
      },
      UD2: {
        title: "UD2. Planificación del montaje de instalaciones eléctricas en edificios",
        badge: "UF1441 · Unidad Didáctica 2",
        sections: [
          {
            heading: "1. Emplazamiento y montaje de las instalaciones de enlace",
            points: [
              "<strong>CGP (ITC-BT-13):</strong> En fachada o límite de propiedad, libre y permanente acceso. En subterránea, dentro de nicho con puerta metálica IK 10 a ≥ 30 cm del suelo (máximo 2 CGP por nicho).",
              "<strong>LGA (ITC-BT-14):</strong> Trazado por zonas comunes lo más corto y rectilíneo posible. Intensidad máxima de 250 A (150 kW a 400 V) por línea y canalización sobredimensionada para ampliar sección un 100 %.",
              "<strong>Centralización de contadores (ITC-BT-16):</strong> Obligatorio en local exclusivo si hay > 16 contadores (hasta 12 plantas). Altura entre 0,25 m y 1,80 m, pasillo frontal mínimo de 1,10 m, puerta con apertura exterior, alumbrado de emergencia (5 lux) y extintor 21B.",
              "<strong>Derivación Individual (ITC-BT-15):</strong> Tubo de diámetro exterior ≥ 32 mm (ampliación 100 %), 1 tubo de reserva por cada 10 DI o fracción, cortafuegos y registros precintables cada 3 plantas y cajas cada 15 m. Sección mínima: 6 mm² (fases, neutro, tierra) y 1,5 mm² (hilo de mando)."
            ]
          },
          {
            heading: "2. Herramientas de planificación: Gantt y PERT",
            points: [
              "<strong>Diagrama de Gantt:</strong> Representación gráfica en barras horizontales que muestra el inicio, duración y solapamiento temporal de cada fase de obra.",
              "<strong>Diagrama PERT:</strong> Red de sucesos y actividades orientada a identificar el <em>camino crítico</em> (secuencia de tareas sin holgura que determina la duración mínima total del proyecto)."
            ]
          },
          {
            heading: "3. Canalizaciones, equipos auxiliares y prevención",
            points: [
              "<strong>Canalizaciones:</strong> Tubos empotrados, en superficie, enterrados, canales protectoras y bandejas perforadas o de rejilla.",
              "<strong>Medios auxiliares y seguridad:</strong> Uso seguro de andamios tubulares, escaleras de tijera aislantes y plataformas elevadoras, manteniendo distancias a partes en tensión y bloqueando circuitos."
            ]
          }
        ]
      },
      UD3: {
        title: "UD3. Medidas, verificaciones y seguridad en las instalaciones",
        badge: "UF1441 · Unidad Didáctica 3",
        sections: [
          {
            heading: "1. Parámetros reglamentarios e instrumentación (ITC-BT-18 y 19)",
            points: [
              "<strong>Resistencia de puesta a tierra:</strong> Debe garantizar que las tensiones de contacto no superen 24 V en locales conductores ni 50 V en el resto. Se mide con <strong>telurómetro</strong> desconectando el borne principal y clavando dos electrodos auxiliares en línea recta.",
              "<strong>Resistencia de aislamiento:</strong> Mínimo <strong>0,5 MΩ</strong> aplicando una tensión de ensayo de <strong>500 V CC</strong> durante 1 minuto con <strong>megóhmetro (Megger)</strong> en tramos de hasta 100 m (sin tensión y con receptores desconectados).",
              "<strong>Otros instrumentos:</strong> Multímetro (tensión, intensidad, continuidad), pinza amperimétrica de fugas, comprobador de diferenciales y analizador de redes."
            ]
          },
          {
            heading: "2. Normativa y Prevención de Riesgos Laborales (PRL)",
            points: [
              "<strong>Marco normativo:</strong> REBT (RD 842/2002), normas UNE/EN/CENELEC y RD 614/2001 sobre riesgo eléctrico (5 reglas de oro para trabajos sin tensión).",
              "<strong>Equipos de Protección:</strong> Protecciones colectivas (barandillas, redes, señalización, bloqueos) y EPI homologados (casco dieléctrico, guantes aislantes, calzado de seguridad, gafas y arnés)."
            ]
          }
        ]
      }
    },

    UF1442: {
      UD1: {
        title: "UD1. Representación y simbología de las instalaciones eléctricas",
        badge: "UF1442 · Unidad Didáctica 1",
        sections: [
          {
            heading: "1. Emplazamiento y replanteo de instalaciones",
            points: [
              "<strong>Fases de montaje:</strong> Replanteo sobre paramentos, apertura de rozas o fijación de canalizaciones, tendido de conductores con guía pasacables sin cruzamientos, conexionado y verificación.",
              "<strong>Prescripciones de trazado:</strong> Recorridos horizontales y verticales paralelos a aristas de paredes, cajas de derivación registrables y respeto de volúmenes de protección en cuartos de baño (ITC-BT-27)."
            ]
          },
          {
            heading: "2. Normalización y simbología eléctrica (UNE-EN 60617)",
            points: [
              "<strong>Organismos de normalización:</strong> UNE (España), CENELEC (Europa) e IEC (Internacional).",
              "<strong>Tipos de esquemas:</strong> Esquema unifilar (representa varios conductores con un único trazo y marcas oblicuas indicando su número), esquema multifilar (representa cada conductor individualmente), plano de emplazamiento y esquema topográfico."
            ]
          }
        ]
      },
      UD2: {
        title: "UD2. Montaje de instalaciones eléctricas en edificios de viviendas",
        badge: "UF1442 · Unidad Didáctica 2",
        sections: [
          {
            heading: "1. Cálculos eléctricos y caídas de tensión máximas",
            points: [
              "<strong>Caídas de tensión reglamentarias:</strong> LGA con centralización total: <strong>0,5 %</strong> (1 % con centralización parcial); Derivación Individual con contadores totalmente concentrados: <strong>1 %</strong> (0,5 % si es centralización parcial y 1,5 % para un único usuario); Instalación interior de vivienda: <strong>3 %</strong> (5 % en industrias para fuerza y 3 % para alumbrado).",
              "<strong>Criterios de cálculo de sección:</strong> Se selecciona la sección mayor resultante de comprobar la intensidad máxima admisible (calentamiento), la caída de tensión máxima y la intensidad de cortocircuito."
            ]
          },
          {
            heading: "2. Puesta a tierra, iluminación y verificaciones (UNE 20460-6-61)",
            points: [
              "<strong>Código de colores:</strong> Fases en negro, marrón y gris; neutro en azul claro; conductor de protección (PE) en verde-amarillo.",
              "<strong>Verificación inicial:</strong> Inspección visual seguida de ensayos de continuidad de conductores de protección, resistencia de aislamiento, protección por separación de circuitos, resistencia de tierra y disparo de interruptores diferenciales."
            ]
          }
        ]
      },
      UD3: {
        title: "UD3. Montaje de instalaciones de edificios comerciales e industrias",
        badge: "UF1442 · Unidad Didáctica 3",
        sections: [
          {
            heading: "1. Suministros, compensación de reactiva e iluminación",
            points: [
"Compensación del factor de potencia: Instalación de baterías de condensadores automáticas o fijas para reducir la energía reactiva inductiva, evitar penalizaciones tarifarias y liberar capacidad en transformadores y líneas.",
"Iluminación comercial e industrial: Selección de luminarias según flujo luminoso (lúmenes), iluminancia (lux), índice de reproducción cromática (IRC/Ra) y grado de protección IP/IK."
]
},
{
heading: "2. Canalizaciones industriales, pruebas EN 61557 y diagnóstico",
points: [
"Canalizaciones: Bandejas metálicas (con continuidad equipotencial puesta a tierra), tubos de acero o PVC rígido y canalizaciones eléctricas prefabricadas.",
"Equipos de ensayo (EN 61557): Comprobación de impedancia de bucle de defecto, tiempo e intensidad de disparo de diferenciales, secuencia de fases y elaboración del protocolo de control de calidad."
]
}
]
}
},
UF1443: {
UD1: {
title: "UD1. Planificación del montaje de instalaciones eléctricas tipo",
badge: "UF1443 · Unidad Didáctica 1",
sections: [
{
heading: "1. Planning, rendimientos y replanteo de obra",
points: [
"Parámetros básicos: Coste, tiempo y satisfacción del cliente, clasificando los proyectos según la matriz Riesgo/Valor.",
"Unidades de obra y rendimientos: Definición mediante epígrafe, medición, cubicación, precio unitario y desglose de tiempos de mano de obra (ejecución, acopio, transporte y espera).",
"Replanteo: Traslado al terreno de planos y esquemas (UNE-EN 60617-2), verificando interferencias con fontanería, solar térmica, PCI, telecomunicaciones, ascensores y fotovoltaica mediante medidor láser, nivelador y detector de metales."
]
},
{
heading: "2. Recursos, herramientas de programación e informes",
points: [
"Diagramas Gantt y PERT: Control de fechas, asignación y nivelación de recursos (fija, variable o combinada) y determinación del camino crítico (tiempos optimista, pesimista y más probable).",
"Informes y certificaciones: Visitas de obra, Libro de Órdenes, precios contradictorios, certificaciones de obra e informes de contingencias (encabezado, objeto, antecedentes, desarrollo, conclusiones y anexos)."
]
},
{
heading: "3. Plan de Calidad y Norma UNE 66916",
points: [
"Ciclo PDCA y costes: Planificar, Ejecutar, Comprobar y Actualizar. Diferenciación entre costes de calidad (evaluación/inspección y prevención — regla 1-10-100) y costes de no calidad (internos y externos).",
"Documentación ISO 9000: Política de calidad, Manual de calidad, Procedimientos obligatorios, Procesos, Instrucciones de trabajo y Registros."
]
}
]
},
UD2: {
title: "UD2. Supervisión del montaje de instalaciones eléctricas de interior en edificio de viviendas",
badge: "UF1443 · Unidad Didáctica 2",
sections: [
{
heading: "1. Supervisión de instalaciones de enlace y protecciones (REBT)",
points: [
"Acometidas y CGP (ITC-BT-11 y 13): Tipos de esquemas (CGP-7, 9, 10, 11), CGPM para unifamiliares (IP43, IK09) y BTV para potencias > 320 kW.",
"LGA, DI y Contadores (ITC-BT-14 a 16): Coeficientes de simultaneidad en edificios, cables RZ1-K (AS) 0,6/1 kV, canaladuras de DI, contadores tipos A, B y BCAR y requisitos del local de contadores.",
"ICP, DGMP y circuitos interiores (ITC-BT-17 a 27): Electrificación básica (5.750 W, C1-C5) y elevada (9.200 W, C6-C12), limitadores de sobretensión (categorías I-IV) y volúmenes de protección 0, 1, 2 y 3 en baños."
]
},
{
heading: "2. Puntos de control, parámetros y diagnóstico de averías",
points: [
"Verificaciones e inspecciones (ITC-BT-05): Verificación inicial por instalador autorizado e inspección por OCA (resultado favorable, condicionada o negativa). Clasificación de defectos en muy graves, graves y leves.",
"Técnicas de diagnóstico: Examen visual, continuidad de conductores de protección, resistencia de tierra (telurómetro), aislamiento (megóhmetro a 500 V CC), comprobación de diferenciales y termografía infrarroja (emisividad, reflexión y conductividad térmica)."
]
}
]
},
UD3: {
title: "UD3. Medidas de prevención de riesgos en las operaciones de montaje",
badge: "UF1443 · Unidad Didáctica 3",
sections: [
{
heading: "1. Evaluación de riesgos y riesgos específicos (LPRL y RD 614/2001)",
points: [
"Matriz de priorización: Combinación de Probabilidad (Baja, Media, Alta) y Consecuencias (Ligeramente dañino, Dañino, Extremadamente dañino) obteniendo riesgos Trivial, Tolerable, Moderado, Importante e Intolerable.",
"Efectos de la corriente en el cuerpo humano: Percepción (1-3 mA), tetanización muscular (10 mA), paro respiratorio (25-30 mA) y fibrilación ventricular (60-75 mA)."
]
},
{
heading: "2. Protecciones colectivas, EPI y trabajos sin/con tensión",
points: [
"Las 5 Reglas de Oro: 1) Desconectar, 2) Prevenir realimentación, 3) Verificar ausencia de tensión, 4) Poner a tierra y en cortocircuito, 5) Proteger frente a elementos próximos en tensión y señalizar.",
"Protección colectiva y EPI: Prioridad de protección colectiva (redes S, T, V, U; andamios; señalización rojo/amarillo/azul/verde; extintores según clase de fuego A, B, C, D) y EPI dieléctricos (casco, guantes clase 00/0, banqueta aislante, calzado aislante y arnés)."
]
},
{
heading: "3. Investigación de accidentes",
points: [
"Procedimiento: Toma inmediata de datos in situ (evidencias físicas, testigos, entrevistas individuales y documentación previa) y análisis causal mediante Árbol de Causas y Árbol de Fallos y Errores para implantar medidas preventivas."
]
}
]
}
}
},
questions: [
// UF1441 - UD1 (10 preguntas)
{ id: "UF1441_UD1_1", uf: "UF1441", unit: "UD1", unitTitle: "Organización de proyectos de obra o montaje", question: "¿Cuál es la parte de la instalación de la red de distribución que alimenta la caja o cajas generales de protección?", options: ["Línea General de Alimentación (LGA).", "Acometida.", "Derivación Individual (DI).", "Instalación de enlace."], correctIndex: 1 },
{ id: "UF1441_UD1_2", uf: "UF1441", unit: "UD1", unitTitle: "Organización de proyectos de obra o montaje", question: "¿Qué grado de electrificación corresponde a una vivienda cuya superficie útil es superior a 160 m² o cuya previsión de potencia supera los 9.200 W?", options: ["Electrificación básica.", "Electrificación mínima.", "Electrificación elevada.", "Electrificación especial."], correctIndex: 2 },
{ id: "UF1441_UD1_3", uf: "UF1441", unit: "UD1", unitTitle: "Organización de proyectos de obra o montaje", question: "En locales de pública concurrencia, ¿cuál es la iluminancia horizontal mínima que debe proporcionar el alumbrado de evacuación en el eje de los pasos principales?", options: ["0,5 lux.", "1 lux.", "5 lux.", "15 lux."], correctIndex: 1 },
{ id: "UF1441_UD1_4", uf: "UF1441", unit: "UD1", unitTitle: "Organización de proyectos de obra o montaje", question: "Según la ITC-BT-04, ¿qué documento técnico requiere una instalación eléctrica en un local húmedo con una potencia prevista de 12 kW?", options: ["Únicamente Memoria Técnica de Diseño (MTD).", "Proyecto técnico redactado y firmado por técnico titulado competente.", "Solo el Certificado de Instalación Eléctrica.", "No requiere documentación previa."], correctIndex: 1 },
{ id: "UF1441_UD1_5", uf: "UF1441", unit: "UD1", unitTitle: "Organización de proyectos de obra o montaje", question: "Durante el replanteo de una instalación de enlace, ¿qué ángulo de giro máximo se recomienda no superar en los cambios de dirección de las canalizaciones?", options: ["90°.", "60°.", "45°.", "30°."], correctIndex: 2 },
{ id: "UF1441_UD1_6", uf: "UF1441", unit: "UD1", unitTitle: "Organización de proyectos de obra o montaje", question: "¿Qué diferencia principal existe entre un presupuesto de ejecución material (PEM) y el presupuesto de contrata?", options: ["El PEM incluye el IVA y el beneficio industrial.", "El presupuesto de contrata suma al PEM los gastos generales, el beneficio industrial y los impuestos aplicables.", "Son exactamente iguales en todos los proyectos.", "El PEM solo incluye la mano de obra."], correctIndex: 1 },
{ id: "UF1441_UD1_7", uf: "UF1441", unit: "UD1", unitTitle: "Organización de proyectos de obra o montaje", question: "¿Qué indica el marcado CE en los materiales y equipos eléctricos utilizados en el montaje?", options: ["Que han sido fabricados exclusivamente en España.", "Que cumplen los requisitos esenciales de seguridad establecidos en las directivas comunitarias aplicables.", "Que tienen una garantía comercial de 10 años.", "Que solo pueden instalarse en alta tensión."], correctIndex: 1 },
{ id: "UF1441_UD1_8", uf: "UF1441", unit: "UD1", unitTitle: "Organización de proyectos de obra o montaje", question: "¿Qué elemento de la instalación interior de una vivienda tiene por misión proteger contra contactos indirectos y derivaciones a tierra?", options: ["Interruptor de Control de Potencia (ICP).", "Interruptor General Automático (IGA).", "Interruptor Diferencial (ID).", "Pequeño Interruptor Automático (PIA)."], correctIndex: 2 },
{ id: "UF1441_UD1_9", uf: "UF1441", unit: "UD1", unitTitle: "Organización de proyectos de obra o montaje", question: "En un edificio de viviendas, ¿cuál es la previsión de carga mínima que debe considerarse para cada vivienda con grado de electrificación básica?", options: ["3.450 W.", "5.750 W.", "7.360 W.", "9.200 W."], correctIndex: 1 },
{ id: "UF1441_UD1_10", uf: "UF1441", unit: "UD1", unitTitle: "Organización de proyectos de obra o montaje", question: "¿Qué documento contiene las condiciones técnicas, administrativas y económicas que regulan la ejecución de una obra eléctrica?", options: ["Pliego de Condiciones.", "Estado de Mediciones.", "Esquema Unifilar.", "Certificado de Dirección de Obra."], correctIndex: 0 },
// UF1441 - UD2 (10 preguntas)
{ id: "UF1441_UD2_1", uf: "UF1441", unit: "UD2", unitTitle: "Planificación del montaje en edificios de viviendas", question: "Cuando la acometida es subterránea, ¿a qué altura mínima respecto al suelo debe quedar la parte inferior de la puerta de la Caja General de Protección (CGP)?", options: ["10 cm.", "30 cm.", "100 cm.", "300 cm."], correctIndex: 1 },
{ id: "UF1441_UD2_2", uf: "UF1441", unit: "UD2", unitTitle: "Planificación del montaje en edificios de viviendas", question: "¿Cuál es la intensidad máxima admisible por cada Línea General de Alimentación (LGA) que alimenta una centralización de contadores?", options: ["160 A.", "200 A.", "250 A.", "400 A."], correctIndex: 2 },
{ id: "UF1441_UD2_3", uf: "UF1441", unit: "UD2", unitTitle: "Planificación del montaje en edificios de viviendas", question: "En un edificio de hasta 12 plantas, ¿a partir de qué número de contadores es obligatorio instalar la concentración en un local dedicado exclusivamente a este fin?", options: ["Más de 8 contadores.", "Más de 12 contadores.", "Más de 16 contadores.", "Más de 24 contadores."], correctIndex: 2 },
{ id: "UF1441_UD2_4", uf: "UF1441", unit: "UD2", unitTitle: "Planificación del montaje en edificios de viviendas", question: "¿Qué altura máxima respecto al suelo puede alcanzar el cuadrante de lectura del contador situado más alto en una centralización?", options: ["1,50 m.", "1,80 m.", "2,00 m.", "2,30 m."], correctIndex: 1 },
{ id: "UF1441_UD2_5", uf: "UF1441", unit: "UD2", unitTitle: "Planificación del montaje en edificios de viviendas", question: "¿Cuántos tubos de reserva deben preverse en la canalización de Derivaciones Individuales de un edificio con 25 viviendas?", options: ["1 tubo de reserva.", "2 tubos de reserva.", "3 tubos de reserva.", "5 tubos de reserva."], correctIndex: 2 },
{ id: "UF1441_UD2_6", uf: "UF1441", unit: "UD2", unitTitle: "Planificación del montaje en edificios de viviendas", question: "En tramos verticales de edificios de más de 3 plantas, ¿cada cuántas plantas deben instalarse elementos cortafuegos y tapas de registro precintables en la canaladura de las DI?", options: ["Cada planta.", "Cada 2 plantas.", "Cada 3 plantas.", "Cada 5 plantas."], correctIndex: 2 },
{ id: "UF1441_UD2_7", uf: "UF1441", unit: "UD2", unitTitle: "Planificación del montaje en edificios de viviendas", question: "¿Cuál es la sección mínima reglamentaria de los conductores de fase, neutro y protección de una Derivación Individual?", options: ["2,5 mm².", "4 mm².", "6 mm².", "10 mm²."], correctIndex: 2 },
{ id: "UF1441_UD2_8", uf: "UF1441", unit: "UD2", unitTitle: "Planificación del montaje en edificios de viviendas", question: "En la planificación mediante diagrama PERT, ¿cómo se denomina la secuencia de actividades cuya holgura total es nula?", options: ["Ruta alternativa.", "Camino crítico.", "Actividad ficticia.", "Suceso inicial."], correctIndex: 1 },
{ id: "UF1441_UD2_9", uf: "UF1441", unit: "UD2", unitTitle: "Planificación del montaje en edificios de viviendas", question: "¿Qué anchura mínima de pasillo libre debe dejarse frente a la parte más saliente de una concentración de contadores?", options: ["0,70 m.", "0,90 m.", "1,10 m.", "1,50 m."], correctIndex: 2 },
{ id: "UF1441_UD2_10", uf: "UF1441", unit: "UD2", unitTitle: "Planificación del montaje en edificios de viviendas", question: "¿Qué porcentaje de ampliación futura de sección deben permitir las canalizaciones de la LGA y de las Derivaciones Individuales?", options: ["25 %.", "50 %.", "75 %.", "100 %."], correctIndex: 3 },
// UF1441 - UD3 (10 preguntas)
{ id: "UF1441_UD3_1", uf: "UF1441", unit: "UD3", unitTitle: "Medidas, verificaciones y seguridad", question: "¿Qué instrumento de medida se utiliza específicamente para determinar el valor de la resistencia de puesta a tierra de un edificio?", options: ["Megóhmetro.", "Telurómetro.", "Vatímetro.", "Frecuencímetro."], correctIndex: 1 },
{ id: "UF1441_UD3_2", uf: "UF1441", unit: "UD3", unitTitle: "Medidas, verificaciones y seguridad", question: "Según la ITC-BT-19, ¿cuál es el valor mínimo admisible de resistencia de aislamiento en una instalación de 230/400 V (tensión nominal ≤ 500 V)?", options: ["0,25 MΩ a 250 V CC.", "0,5 MΩ a 500 V CC.", "1,0 MΩ a 1.000 V CC.", "2,0 MΩ a 500 V CA."], correctIndex: 1 },
{ id: "UF1441_UD3_3", uf: "UF1441", unit: "UD3", unitTitle: "Medidas, verificaciones y seguridad", question: "Antes de medir la resistencia de aislamiento de una instalación interior, ¿qué operación debe realizarse obligatoriamente?", options: ["Conectar todas las cargas a máxima potencia.", "Dejar la instalación sin tensión, desconectar receptores y cerrar todos los interruptores de mando y protección.", "Puentear el interruptor diferencial con tensión aplicada.", "Desconectar el conductor de tierra del cuadro."], correctIndex: 1 },
{ id: "UF1441_UD3_4", uf: "UF1441", unit: "UD3", unitTitle: "Medidas, verificaciones y seguridad", question: "¿Cuál es la tensión de contacto límite convencional que no debe superarse en emplazamientos conductores (húmedos)?", options: ["12 V.", "24 V.", "50 V.", "230 V."], correctIndex: 1 },
{ id: "UF1441_UD3_5", uf: "UF1441", unit: "UD3", unitTitle: "Medidas, verificaciones y seguridad", question: "¿Cómo se conectan las pinzas de un megóhmetro para medir el aislamiento respecto a tierra de un circuito?", options: ["Con la instalación en carga y entre fase y neutro.", "Uniendo todos los conductores activos entre sí (polo negativo) y midiendo respecto al conductor de protección (polo positivo).", "En serie con el interruptor general automático.", "Directamente sobre las picas auxiliares clavadas en el terreno."], correctIndex: 1 },
{ id: "UF1441_UD3_6", uf: "UF1441", unit: "UD3", unitTitle: "Medidas, verificaciones y seguridad", question: "¿Cuál es la primera de las cinco reglas de oro para realizar trabajos eléctricos sin tensión (RD 614/2001)?", options: ["Verificar la ausencia de tensión.", "Poner a tierra y en cortocircuito.", "Desconectar con corte visible o efectivo todas las fuentes de tensión.", "Señalizar la zona de trabajo."], correctIndex: 2 },
{ id: "UF1441_UD3_7", uf: "UF1441", unit: "UD3", unitTitle: "Medidas, verificaciones y seguridad", question: "¿Qué longitud máxima de canalización se establece como referencia antes de fraccionar una instalación para medir su resistencia de aislamiento?", options: ["25 metros.", "50 metros.", "100 metros.", "250 metros."], correctIndex: 2 },
{ id: "UF1441_UD3_8", uf: "UF1441", unit: "UD3", unitTitle: "Medidas, verificaciones y seguridad", question: "En la medición de puesta a tierra con telurómetro de tres terminales, ¿cómo deben disponerse los dos electrodos auxiliares respecto a la toma de tierra principal?", options: ["Formando un triángulo equilátero de 1 m de lado.", "En línea recta, situando el electrodo de tensión en posición intermedia entre la toma de tierra y el electrodo de corriente.", "Clavados juntos a menos de 10 cm de la arqueta.", "En paralelo y sumergidos en agua."], correctIndex: 1 },
{ id: "UF1441_UD3_9", uf: "UF1441", unit: "UD3", unitTitle: "Medidas, verificaciones y seguridad", question: "¿Qué tipo de protección tiene prioridad legal frente a los Equipos de Protección Individual (EPI)?", options: ["La protección colectiva.", "La vigilancia de la salud.", "El seguro de responsabilidad civil.", "La señalización acústica."], correctIndex: 0 },
{ id: "UF1441_UD3_10", uf: "UF1441", unit: "UD3", unitTitle: "Medidas, verificaciones y seguridad", question: "¿Qué instrumento permite detectar pequeñas corrientes de fuga a tierra sin necesidad de interrumpir el suministro ni abrir el circuito?", options: ["Luxómetro.", "Pinza amperimétrica de fugas.", "Tacómetro.", "Ohmetro de baja resistencia."], correctIndex: 1 },
// UF1442 - UD1 (10 preguntas)
{ id: "UF1442_UD1_1", uf: "UF1442", unit: "UD1", unitTitle: "Representación y simbología eléctrica", question: "¿Qué norma internacional y europea establece los símbolos gráficos normalizados para esquemas eléctricos?", options: ["UNE-EN 60617.", "UNE-EN 60439.", "ISO 9001.", "ITC-BT-01."], correctIndex: 0 },
{ id: "UF1442_UD1_2", uf: "UF1442", unit: "UD1", unitTitle: "Representación y simbología eléctrica", question: "¿Qué tipo de esquema eléctrico representa mediante un solo trazo varios conductores que siguen un mismo recorrido, indicando su número con trazos oblicuos?", options: ["Esquema multifilar.", "Esquema unifilar.", "Esquema desarrollado.", "Plano de situación."], correctIndex: 1 },
{ id: "UF1442_UD1_3", uf: "UF1442", unit: "UD1", unitTitle: "Representación y simbología eléctrica", question: "Según la ITC-BT-27, en un cuarto de baño, ¿qué volumen comprende el interior de la bañera o plato de ducha?", options: ["Volumen 0.", "Volumen 1.", "Volumen 2.", "Volumen 3."], correctIndex: 0 },
{ id: "UF1442_UD1_4", uf: "UF1442", unit: "UD1", unitTitle: "Representación y simbología eléctrica", question: "¿Qué organismo es el encargado de elaborar y aprobar las normas técnicas en España?", options: ["CENELEC.", "IEC.", "UNE (Asociación Española de Normalización).", "IEEE."], correctIndex: 2 },
{ id: "UF1442_UD1_5", uf: "UF1442", unit: "UD1", unitTitle: "Representación y simbología eléctrica", question: "En la ejecución de canalizaciones empotradas en paredes, ¿cómo deben realizarse las rozas?", options: ["En diagonal para ahorrar longitud de cable.", "Siguiendo recorridos horizontales y verticales paralelos a las aristas de las paredes.", "A menos de 5 cm del suelo en cualquier estancia.", "Atravesando pilares estructurales sin tubo."], correctIndex: 1 },
{ id: "UF1442_UD1_6", uf: "UF1442", unit: "UD1", unitTitle: "Representación y simbología eléctrica", question: "¿Qué plano muestra la ubicación exacta de los mecanismos, luminarias y trazado de tubos sobre la planta arquitectónica de una vivienda?", options: ["Esquema funcional.", "Plano topográfico o de instalación en planta.", "Diagrama de bloques.", "Curva de disparo magnético."], correctIndex: 1 },
{ id: "UF1442_UD1_7", uf: "UF1442", unit: "UD1", unitTitle: "Representación y simbología eléctrica", question: "¿Para qué se utiliza la guía pasacables durante el tendido de conductores en tubos?", options: ["Para medir la resistencia de aislamiento.", "Para introducir los conductores en el interior de los tubos sin dañar su cubierta aislante ni provocar cruzamientos.", "Para pelar los extremos de los cables.", "Para fijar los tubos a la pared."], correctIndex: 1 },
{ id: "UF1442_UD1_8", uf: "UF1442", unit: "UD1", unitTitle: "Representación y simbología eléctrica", question: "¿Qué indican tres trazos oblicuos sobre la línea de un esquema unifilar?", options: ["Que el circuito es de corriente continua.", "Que por esa canalización discurren tres conductores.", "Que la línea tiene tres empalmes.", "Que el tubo es de 32 mm."], correctIndex: 1 },
{ id: "UF1442_UD1_9", uf: "UF1442", unit: "UD1", unitTitle: "Representación y simbología eléctrica", question: "¿Qué herramienta debe emplearse para realizar conexiones en el interior de cuadros eléctricos con riesgo de contacto accidental?", options: ["Destornilladores y alicates con aislamiento homologado hasta 1.000 V.", "Herramientas metálicas sin recubrimiento.", "Llave inglesa convencional.", "Cúter metálico."], correctIndex: 0 },
{ id: "UF1442_UD1_10", uf: "UF1442", unit: "UD1", unitTitle: "Representación y simbología eléctrica", question: "En los esquemas eléctricos normalizados, ¿con qué letras se identifica habitualmente un interruptor automático magnetotérmico o dispositivo de protección?", options: ["M.", "Q o F.", "H.", "G."], correctIndex: 1 },
// UF1442 - UD2 (10 preguntas)
{ id: "UF1442_UD2_1", uf: "UF1442", unit: "UD2", unitTitle: "Montaje en edificios de viviendas", question: "¿Cuál es la caída de tensión máxima admisible en una Línea General de Alimentación (LGA) destinada a contadores totalmente centralizados?", options: ["0,5 %.", "1 %.", "1,5 %.", "3 %."], correctIndex: 0 },
{ id: "UF1442_UD2_2", uf: "UF1442", unit: "UD2", unitTitle: "Montaje en edificios de viviendas", question: "¿Cuál es la caída de tensión máxima admisible en una Derivación Individual (DI) cuando los contadores están totalmente concentrados?", options: ["0,5 %.", "1 %.", "1,5 %.", "3 %."], correctIndex: 1 },
{ id: "UF1442_UD2_3", uf: "UF1442", unit: "UD2", unitTitle: "Montaje en edificios de viviendas", question: "Según el código de colores normalizado del REBT, ¿qué colores identifican respectivamente al conductor neutro y al conductor de protección?", options: ["Negro y marrón.", "Azul claro y verde-amarillo.", "Gris y rojo.", "Azul claro y negro."], correctIndex: 1 },
{ id: "UF1442_UD2_4", uf: "UF1442", unit: "UD2", unitTitle: "Montaje en edificios de viviendas", question: "¿Cuál es la sección mínima de los conductores de cobre de una Línea General de Alimentación (LGA)?", options: ["6 mm².", "10 mm².", "16 mm².", "25 mm²."], correctIndex: 1 },
{ id: "UF1442_UD2_5", uf: "UF1442", unit: "UD2", unitTitle: "Montaje en edificios de viviendas", question: "En una centralización de contadores, ¿dónde se sitúa el Interruptor General de Maniobra?", options: ["En el interior de cada vivienda.", "Entre la Línea General de Alimentación y el embarrado general de la concentración.", "A la salida de cada contador.", "En la arqueta de acometida."], correctIndex: 1 },
{ id: "UF1442_UD2_6", uf: "UF1442", unit: "UD2", unitTitle: "Montaje en edificios de viviendas", question: "¿Qué calibre mínimo debe tener el Interruptor General de Maniobra de una centralización de contadores cuya potencia prevista sea de 120 kW?", options: ["100 A.", "160 A.", "250 A.", "400 A."], correctIndex: 2 },
{ id: "UF1442_UD2_7", uf: "UF1442", unit: "UD2", unitTitle: "Montaje en edificios de viviendas", question: "¿Qué tres criterios técnicos deben comprobarse para calcular la sección reglamentaria de un conductor eléctrico?", options: ["Color, marca y precio.", "Intensidad máxima admisible (calentamiento), caída de tensión máxima e intensidad de cortocircuito.", "Longitud, peso y rigidez dieléctrica.", "Frecuencia, factor de potencia y temperatura ambiente exclusivamente."], correctIndex: 1 },
{ id: "UF1442_UD2_8", uf: "UF1442", unit: "UD2", unitTitle: "Montaje en edificios de viviendas", question: "En la instalación interior de una vivienda, ¿cuál es la caída de tensión máxima permitida desde el origen de la instalación interior hasta cualquier punto de utilización?", options: ["1 %.", "1,5 %.", "3 %.", "5 %."], correctIndex: 2 },
{ id: "UF1442_UD2_9", uf: "UF1442", unit: "UD2", unitTitle: "Montaje en edificios de viviendas", question: "¿Cuál es la sección mínima reglamentaria para el hilo de mando de color rojo instalado en cada Derivación Individual?", options: ["1 mm².", "1,5 mm².", "2,5 mm².", "6 mm²."], correctIndex: 1 },
{ id: "UF1442_UD2_10", uf: "UF1442", unit: "UD2", unitTitle: "Montaje en edificios de viviendas", question: "Según la norma UNE 20460-6-61, ¿qué operación debe realizarse siempre antes de los ensayos eléctricos en la verificación inicial de una instalación?", options: ["La puesta en servicio definitiva.", "La inspección visual de toda la instalación.", "El precintado de los contadores por la compañía.", "La medición de armónicos en carga."], correctIndex: 1 },
// UF1442 - UD3 (10 preguntas)
{ id: "UF1442_UD3_1", uf: "UF1442", unit: "UD3", unitTitle: "Montaje en edificios comerciales e industrias", question: "¿Qué equipo se instala en instalaciones comerciales e industriales para compensar la energía reactiva inductiva y mejorar el factor de potencia?", options: ["Un autotransformador de arranque.", "Una batería de condensadores.", "Un relé térmico diferencial.", "Un limitador de sobretensiones transitorias."], correctIndex: 1 },
{ id: "UF1442_UD3_2", uf: "UF1442", unit: "UD3", unitTitle: "Montaje en edificios comerciales e industrias", question: "En instalaciones industriales alimentadas directamente desde un centro de transformación propio, ¿cuál es la caída de tensión máxima admisible para circuitos de fuerza?", options: ["1,5 %.", "3 %.", "4,5 %.", "5 %."], correctIndex: 3 },
{ id: "UF1442_UD3_3", uf: "UF1442", unit: "UD3", unitTitle: "Montaje en edificios comerciales e industrias", question: "¿Qué requisito de seguridad es obligatorio al instalar bandejas metálicas portacables en una nave industrial?", options: ["Pintarlas siempre de color rojo.", "Asegurar la continuidad eléctrica entre tramos y conectarlas a la red de puesta a tierra.", "Instalarlas exclusivamente a ras de suelo.", "Utilizar únicamente conductores desnudos en su interior."], correctIndex: 1 },
{ id: "UF1442_UD3_4", uf: "UF1442", unit: "UD3", unitTitle: "Montaje en edificios comerciales e industrias", question: "¿Qué magnitud luminotécnica mide el nivel de iluminación que incide sobre una superficie de trabajo y se expresa en lux?", options: ["Flujo luminoso.", "Intensidad luminosa.", "Iluminancia.", "Luminancia."], correctIndex: 2 },
{ id: "UF1442_UD3_5", uf: "UF1442", unit: "UD3", unitTitle: "Montaje en edificios comerciales e industrias", question: "¿Qué norma europea establece los requisitos que deben cumplir los equipos de ensayo y medida utilizados para verificar la seguridad eléctrica en baja tensión?", options: ["EN 61557.", "EN 50110.", "ISO 14001.", "ITC-BT-02."], correctIndex: 0 },
{ id: "UF1442_UD3_6", uf: "UF1442", unit: "UD3", unitTitle: "Montaje en edificios comerciales e industrias", question: "En la medición de la resistencia de puesta a tierra sin tensión mediante el método de caída de tensión con picas en línea recta, ¿a qué porcentaje de la distancia total respecto al electrodo principal suele colocarse la sonda intermedia de tensión?", options: ["Al 10 %.", "Al 25 %.", "Al 62 %.", "Al 95 %."], correctIndex: 2 },
{ id: "UF1442_UD3_7", uf: "UF1442", unit: "UD3", unitTitle: "Montaje en edificios comerciales e industrias", question: "¿Para qué sirve la medición de la impedancia del bucle de defecto en una instalación con esquema TN o TT?", options: ["Para comprobar el consumo mensual en kWh.", "Para verificar que la corriente de defecto es suficiente para provocar el disparo de los dispositivos de protección en el tiempo reglamentario.", "Para medir el nivel de ruido de los contactores.", "Para ajustar el reloj horario del alumbrado."], correctIndex: 1 },
{ id: "UF1442_UD3_8", uf: "UF1442", unit: "UD3", unitTitle: "Montaje en edificios comerciales e industrias", question: "¿Qué indica la primera cifra del código IP (por ejemplo, el 6 en IP65) de una envolvente o luminaria industrial?", options: ["Protección contra impactos mecánicos.", "Protección contra la penetración de cuerpos sólidos y polvo.", "Protección contra el fuego.", "Resistencia a la corrosión química."], correctIndex: 1 },
{ id: "UF1442_UD3_9", uf: "UF1442", unit: "UD3", unitTitle: "Montaje en edificios comerciales e industrias", question: "En un local comercial o industrial con receptores trifásicos equilibrados y monofásicos, ¿por qué es fundamental realizar un correcto equilibrado de cargas entre las tres fases?", options: ["Para reducir la corriente que circula por el conductor neutro y evitar caídas de tensión desiguales y sobrecargas en una fase.", "Para aumentar el consumo de energía reactiva.", "Para eliminar la necesidad de interruptor diferencial.", "Para poder reducir la sección del conductor de tierra a 1,5 mm²."], correctIndex: 0 },
{ id: "UF1442_UD3_10", uf: "UF1442", unit: "UD3", unitTitle: "Montaje en edificios comerciales e industrias", question: "¿Qué debe comprobarse en el ensayo de funcionamiento de un interruptor diferencial de sensibilidad 30 mA?", options: ["Que no dispare nunca por debajo de 100 mA.", "Que dispare a una intensidad igual o inferior a su sensibilidad nominal (30 mA) y dentro del tiempo límite establecido por la norma.", "Que soporte una tensión continua de 1.000 V sin abrir el circuito.", "Que desconecte únicamente el conductor de protección."], correctIndex: 1 },
// UF1443 - UD1 (10 preguntas)
{ id: "UF1443_UD1_1", uf: "UF1443", unit: "UD1", unitTitle: "Planificación del montaje de instalaciones eléctricas tipo", question: "¿Qué requisitos tiene que tener una planificación de un proyecto de instalación?", options: ["Que sea concreto.", "Que no esté definido en el tiempo.", "Que sea una secuencia de metas ideales.", "Que sólo se describa el objetivo final."], correctIndex: 0 },
{ id: "UF1443_UD1_2", uf: "UF1443", unit: "UD1", unitTitle: "Planificación del montaje de instalaciones eléctricas tipo", question: "¿Cuál de estos actores no puede ser un cliente externo?", options: ["Propietario del inmueble.", "Inversor económico.", "Entidad financiera.", "Director de obra de la propia empresa."], correctIndex: 3 },
{ id: "UF1443_UD1_3", uf: "UF1443", unit: "UD1", unitTitle: "Planificación del montaje de instalaciones eléctricas tipo", question: "¿Qué herramientas son necesarias para realizar el replanteo?", options: ["Medidor electrónico y nivelador.", "Equipos de Protección Individual.", "Equipos de Protección Colectiva.", "Máquinas y herramientas."], correctIndex: 0 },
{ id: "UF1443_UD1_4", uf: "UF1443", unit: "UD1", unitTitle: "Planificación del montaje de instalaciones eléctricas tipo", question: "Se puede clasificar los mecanismos y tomas de corriente en función de…", options: ["Su número de fases y por cómo van instalados.", "Su intensidad nominal de pico.", "Su tensión de paso uniforme.", "La escala de medición que usen."], correctIndex: 0 },
{ id: "UF1443_UD1_5", uf: "UF1443", unit: "UD1", unitTitle: "Planificación del montaje de instalaciones eléctricas tipo", question: "El pulsador…", options: ["Es un mecanismo eléctrico que cierra o abre un circuito.", "Es un aparato de protección frente a contactos indirectos.", "Es un aparato de medida de voltaje.", "Es un aparato de protección frente a contactos directos."], correctIndex: 0 },
{ id: "UF1443_UD1_6", uf: "UF1443", unit: "UD1", unitTitle: "Planificación del montaje de instalaciones eléctricas tipo", question: "¿Qué se tiene que hacer para reducir el tiempo necesario para realizar una instalación?", options: ["Asignar mayores recursos de maquinaria.", "Dejar de ejecutar ciertas partes de la instalación.", "Reducir la calidad de los subprocesos de la instalación.", "Reducir la mano de obra."], correctIndex: 0 },
{ id: "UF1443_UD1_7", uf: "UF1443", unit: "UD1", unitTitle: "Planificación del montaje de instalaciones eléctricas tipo", question: "Las certificaciones de obra…", options: ["Miden los trabajos ejecutados en instalaciones de cierta envergadura.", "Certifican por parte de un organismo externo la correcta ejecución de una instalación.", "Son necesarias en todas las instalaciones.", "Forman parte de un sistema de Gestión de Calidad."], correctIndex: 0 },
{ id: "UF1443_UD1_8", uf: "UF1443", unit: "UD1", unitTitle: "Planificación del montaje de instalaciones eléctricas tipo", question: "Según un plan de calidad, ¿qué necesidades son las que son formuladas por el cliente?", options: ["Explícitas.", "Implícitas.", "Explícitas e implícitas.", "Funcionales y básicas."], correctIndex: 0 },
{ id: "UF1443_UD1_9", uf: "UF1443", unit: "UD1", unitTitle: "Planificación del montaje de instalaciones eléctricas tipo", question: "¿Cómo se clasifican los costes de la calidad?", options: ["Costes de evaluación y costes de inspección.", "Costes directos y costes alternativos.", "Costes de ejecución y costes de planificación.", "Costes específicos y costes comunes."], correctIndex: 0 },
{ id: "UF1443_UD1_10", uf: "UF1443", unit: "UD1", unitTitle: "Planificación del montaje de instalaciones eléctricas tipo", question: "En un sistema de calidad, ¿cuáles de los siguientes costes no se consideran como externos?", options: ["Mantenimiento del sistema de calidad.", "Gastos de garantía.", "Liquidación de reclamaciones.", "Materiales devueltos."], correctIndex: 0 },
// UF1443 - UD2 (10 preguntas)
{ id: "UF1443_UD2_1", uf: "UF1443", unit: "UD2", unitTitle: "Supervisión del montaje en edificio de viviendas", question: "Las normas que describen cada una de las partes de una instalación en el Reglamento Electrotécnico para la Baja Tensión se llaman:", options: ["Instrucciones Técnicas Complementarias.", "Instrucciones Complementarias de Instalación.", "Normas Complementarias de Interpretación.", "Normas Comunes de Uso."], correctIndex: 0 },
{ id: "UF1443_UD2_2", uf: "UF1443", unit: "UD2", unitTitle: "Supervisión del montaje en edificio de viviendas", question: "¿Qué tipos de acometidas existen básicamente?", options: ["Aérea y subterránea.", "Bipolar y tripolar.", "De polos invertidos y de polos directos.", "En fachada y subterránea."], correctIndex: 0 },
{ id: "UF1443_UD2_3", uf: "UF1443", unit: "UD2", unitTitle: "Supervisión del montaje en edificio de viviendas", question: "Para el esquema de un único usuario, ¿cuál es la caída de tensión máxima autorizada para la Derivación Individual?", options: ["1,5 %.", "2,5 %.", "3,5 %.", "4,5 %."], correctIndex: 0 },
{ id: "UF1443_UD2_4", uf: "UF1443", unit: "UD2", unitTitle: "Supervisión del montaje en edificio de viviendas", question: "¿Desde dónde parte la Línea General de Alimentación?", options: ["Desde la Caja General de Protección.", "Desde el contador general.", "Desde la acometida.", "Desde el Interruptor de Control de Potencia."], correctIndex: 0 },
{ id: "UF1443_UD2_5", uf: "UF1443", unit: "UD2", unitTitle: "Supervisión del montaje en edificio de viviendas", question: "¿Qué dispositivos no comprende la Derivación Individual?", options: ["El Interruptor de Control de Potencia.", "Los fusibles de seguridad.", "El conjunto de medida.", "Los dispositivos generales de mando y protección."], correctIndex: 0 },
{ id: "UF1443_UD2_6", uf: "UF1443", unit: "UD2", unitTitle: "Supervisión del montaje en edificio de viviendas", question: "Para el control de los puntos clave en una instalación eléctrica, ¿qué métodos pueden ser realizados por un Instalador Autorizado?", options: ["Verificaciones.", "Verificaciones e Inspecciones.", "Inspecciones.", "Ninguna de las anteriores."], correctIndex: 0 },
{ id: "UF1443_UD2_7", uf: "UF1443", unit: "UD2", unitTitle: "Supervisión del montaje en edificio de viviendas", question: "¿Cuáles de los siguientes parámetros caracterizan a un fusible?", options: ["Intensidad nominal.", "Frecuencia de pico.", "Estabilidad ante la tensión.", "Rizado de la corriente de paso."], correctIndex: 0 },
{ id: "UF1443_UD2_8", uf: "UF1443", unit: "UD2", unitTitle: "Supervisión del montaje en edificio de viviendas", question: "Entre las causas más comunes de averías, ¿cuál es la que se produce por un ataque químico del entorno?", options: ["Corrosión.", "Sobrecalentamiento.", "Desgaste.", "Defectos asociados al diseño."], correctIndex: 0 },
{ id: "UF1443_UD2_9", uf: "UF1443", unit: "UD2", unitTitle: "Supervisión del montaje en edificio de viviendas", question: "¿Qué técnica de diagnóstico se debe emplear como primera medida?", options: ["El análisis visual.", "Termografía.", "Comprobación de medidas eléctricas.", "Análisis de frecuencias."], correctIndex: 0 },
{ id: "UF1443_UD2_10", uf: "UF1443", unit: "UD2", unitTitle: "Supervisión del montaje en edificio de viviendas", question: "¿Qué tipos de averías se encuentran entre las más comunes en instalaciones eléctricas?", options: ["Falsos contactos.", "Ataques de animales molestos.", "Corte del suministro externo.", "Tensiones por encima de la tensión máxima permitida."], correctIndex: 0 },
// UF1443 - UD3 (10 preguntas)
{ id: "UF1443_UD3_1", uf: "UF1443", unit: "UD3", unitTitle: "Prevención de riesgos en el montaje", question: "¿Qué documentación debe llevar la maquinaria?", options: ["Declaración de conformidad CE.", "Listado de conexiones rápidas.", "Listado de normas internacionales.", "Libro de instrucciones en un país europeo."], correctIndex: 0 },
{ id: "UF1443_UD3_2", uf: "UF1443", unit: "UD3", unitTitle: "Prevención de riesgos en el montaje", question: "La ley fundamental que regula la Prevención de Riesgos Laborales es:", options: ["Ley 31/1995, de 8 de noviembre, de Prevención de Riesgos Laborales.", "Ley 31/1995, de 8 de noviembre, de Prevención de Riesgos Industriales.", "Ley 31/1995, de 8 de noviembre, de Prevención de Accidentes Laborales.", "Ley 31/1995, de 8 de noviembre, de Peligros de Riesgos Laborales."], correctIndex: 0 },
{ id: "UF1443_UD3_3", uf: "UF1443", unit: "UD3", unitTitle: "Prevención de riesgos en el montaje", question: "Los riesgos asociados a los trabajos en altura son:", options: ["Caídas a distinto nivel.", "Quemaduras.", "Choque eléctrico.", "Sobreesfuerzo."], correctIndex: 0 },
{ id: "UF1443_UD3_4", uf: "UF1443", unit: "UD3", unitTitle: "Prevención de riesgos en el montaje", question: "Una medida de protección colectiva consiste en:", options: ["Formación e información a los trabajadores.", "Cascos.", "Herramientas de trabajo.", "Control eficiente de las compras eléctricas."], correctIndex: 0 },
{ id: "UF1443_UD3_5", uf: "UF1443", unit: "UD3", unitTitle: "Prevención de riesgos en el montaje", question: "¿Qué esquema es válido en un sistema de conexión a tierra?", options: ["TT.", "TC.", "HT.", "GH."], correctIndex: 0 },
{ id: "UF1443_UD3_6", uf: "UF1443", unit: "UD3", unitTitle: "Prevención de riesgos en el montaje", question: "La banqueta aislante para maniobras de Baja Tensión:", options: ["Es más alta cuanto mayor es la tensión que aísla.", "Tiene diferentes medidas en función de las dimensiones del operario eléctrico.", "Se puede hacer con base metálica siempre que se aíslen las patas de sujeción.", "Es un dispositivo de protección para las manos."], correctIndex: 0 },
{ id: "UF1443_UD3_7", uf: "UF1443", unit: "UD3", unitTitle: "Prevención de riesgos en el montaje", question: "En los equipos de trabajo para elevación de cargas…", options: ["Deberán llevar bien visibles su carga nominal.", "No será necesario que lleven el marcado CE.", "Existen varias tipologías que por su tamaño no es necesario indicar la carga nominal.", "La velocidad de los mismos viene marcada por su marcado CE."], correctIndex: 0 },
{ id: "UF1443_UD3_8", uf: "UF1443", unit: "UD3", unitTitle: "Prevención de riesgos en el montaje", question: "Para los trabajos en proximidad de instalaciones en tensión, ¿qué operación se debe realizar en primer lugar?", options: ["Un trabajador cualificado determinará la viabilidad del trabajo.", "Se desconectará la instalación en tensión.", "Se aislarán las partes activas por medio de dieléctricos.", "Se señalizará la zona de actuación para prevenir accidentes."], correctIndex: 0 },
{ id: "UF1443_UD3_9", uf: "UF1443", unit: "UD3", unitTitle: "Prevención de riesgos en el montaje", question: "Con respecto a la prevención de accidentes, los sucesos en una empresa se pueden clasificar como:", options: ["Accidentes e incidentes.", "Trabajos manuales y trabajos mecánicos.", "Trabajos en tensión y sin tensión.", "Se clasifican en función del nivel de accesibilidad que tengan los trabajadores."], correctIndex: 0 },
{ id: "UF1443_UD3_10", uf: "UF1443", unit: "UD3", unitTitle: "Prevención de riesgos en el montaje", question: "El fin último de una investigación de un accidente tiene que ser:", options: ["La valoración de las causas para evitar que se vuelvan a producir.", "El cumplir con la normativa legal.", "El tener que realizar comprobaciones periódicas.", "La valoración del trabajo bien hecho."], correctIndex: 0 }
]
};