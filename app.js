

document.addEventListener("DOMContentLoaded", function () {
  var state = {
    currentDoc: "UF1441",
    currentUnit: "UD1",
    answers: {}
  };

  var menuToggle = document.getElementById("menuToggle");
  var mainNav = document.getElementById("mainNav");
  var summaryView = document.getElementById("summaryView");
  var evalView = document.getElementById("evalView");
  var breadcrumb = document.getElementById("breadcrumb");
  var summaryContainer = document.getElementById("summaryContainer");
  var openEvalBtn = document.getElementById("openEvalBtn");
  var filterUfSelect = document.getElementById("filterUf");
  var questionsContainer = document.getElementById("questionsContainer");
  var resetQuizBtn = document.getElementById("resetQuizBtn");
  var downloadPdfBtn = document.getElementById("downloadPdfBtn");

  menuToggle.addEventListener("click", function () {
    var expanded = mainNav.classList.toggle("open");
    menuToggle.setAttribute("aria-expanded", expanded);
  });

  document.querySelectorAll(".dropdown-toggle").forEach(function (btn) {
    btn.addEventListener("click", function (e) {
      e.stopPropagation();
      var parent = btn.closest(".dropdown");
      var wasOpen = parent.classList.contains("open");
      document.querySelectorAll(".dropdown").forEach(function (d) {
        d.classList.remove("open");
      });
      if (!wasOpen) parent.classList.add("open");
    });
  });

  document.addEventListener("click", function () {
    document.querySelectorAll(".dropdown").forEach(function (d) {
      d.classList.remove("open");
    });
  });

  document.querySelectorAll(".dropdown-menu a").forEach(function (link) {
    link.addEventListener("click", function (e) {
      e.preventDefault();
      state.currentDoc = link.dataset.doc;
      state.currentUnit = link.dataset.unit;
      showSummary(state.currentDoc, state.currentUnit);
      mainNav.classList.remove("open");
      document.querySelectorAll(".dropdown").forEach(function (d) {
        d.classList.remove("open");
      });
    });
  });

  openEvalBtn.addEventListener("click", function () {
    summaryView.hidden = true;
    evalView.hidden = false;
    document.querySelectorAll(".nav-btn").forEach(function (b) {
      b.classList.remove("active");
    });
    openEvalBtn.classList.add("active");
    mainNav.classList.remove("open");
    renderQuestions();
  });

  function showSummary(docKey, unitKey) {
    evalView.hidden = true;
    summaryView.hidden = false;
    document.querySelectorAll(".nav-btn").forEach(function (b) {
      b.classList.remove("active");
    });
    var activeDropdownBtn = document.querySelector('.dropdown-toggle[data-uf="' + docKey + '"]');
    if (activeDropdownBtn) activeDropdownBtn.classList.add("active");

    document.querySelectorAll(".dropdown-menu a").forEach(function (a) {
      a.classList.toggle("active-link", a.dataset.doc === docKey && a.dataset.unit === unitKey);
    });

    var unitData = typeof COURSE_DATA !== "undefined" && COURSE_DATA.summaries && COURSE_DATA.summaries[docKey]
      ? COURSE_DATA.summaries[docKey][unitKey]
      : null;

    breadcrumb.innerHTML = docKey + " &rsaquo; " + unitKey;

    if (!unitData) {
      summaryContainer.innerHTML =
        "<h2>" + docKey + " - " + unitKey + "</h2>" +
        '<span class="summary-meta">Contenido pendiente de carga</span>' +
        "<p>Este apartado está preparado para incorporar el resumen del tercer documento (UF1443).</p>";
      return;
    }

    var sectionsHtml = unitData.sections
      .map(function (sec) {
        var pointsHtml = sec.points.map(function (pt) {
          return "<li>" + pt + "</li>";
        }).join("");
        return '<div class="summary-block"><h3>' + sec.heading + "</h3><ul>" + pointsHtml + "</ul></div>";
      })
      .join("");

    summaryContainer.innerHTML =
      "<h2>" + unitData.title + "</h2>" +
      '<span class="summary-meta">' + unitData.badge + "</span>" +
      sectionsHtml;
  }

  function getFilteredQuestions() {
    var filter = filterUfSelect.value;
    if (filter === "ALL") return COURSE_DATA.questions;
    return COURSE_DATA.questions.filter(function (q) {
      return q.uf === filter;
    });
  }

  function renderQuestions() {
    var list = getFilteredQuestions();
    questionsContainer.innerHTML = "";

    if (list.length === 0) {
      questionsContainer.innerHTML = '<div class="question-card"><p>No hay preguntas cargadas aún para esta Unidad Formativa.</p></div>';
      updateScoreboard();
      return;
    }

    list.forEach(function (q, idx) {
      var selected = state.answers[q.id];
      var isAnswered = selected !== undefined;

      var card = document.createElement("div");
      card.className = "question-card";

      var optionsHtml = q.options
        .map(function (optText, optIdx) {
          var cls = "option-btn";
          if (isAnswered) {
            if (optIdx === q.correctIndex) cls += " correct";
            else if (optIdx === selected) cls += " incorrect";
          }
          var disabledAttr = isAnswered ? "disabled" : "";
          var letter = String.fromCharCode(65 + optIdx);
          return '<button type="button" class="' + cls + '" data-qid="' + q.id + '" data-opt="' + optIdx + '" ' + disabledAttr + ">" + letter + ") " + optText + "</button>";
        })
        .join("");

      var feedbackHtml = "";
      if (isAnswered) {
        if (selected === q.correctIndex) {
          feedbackHtml = '<p class="q-feedback ok">✔ ¡Respuesta correcta!</p>';
        } else {
          var correctLetter = String.fromCharCode(65 + q.correctIndex);
          feedbackHtml = '<p class="q-feedback ko">✘ Incorrecta. La respuesta correcta es la ' + correctLetter + ".</p>";
        }
      }

      card.innerHTML =
        '<span class="q-meta">' + q.uf + " · " + q.unit + " — Pregunta " + (idx + 1) + "</span>" +
        '<p class="q-title">' + q.question + "</p>" +
        '<div class="options-group">' + optionsHtml + "</div>" +
        feedbackHtml;

      questionsContainer.appendChild(card);
    });

    questionsContainer.querySelectorAll(".option-btn").forEach(function (btn) {
      btn.addEventListener("click", function () {
        var qid = btn.dataset.qid;
        var opt = Number(btn.dataset.opt);
        if (state.answers[qid] === undefined) {
          state.answers[qid] = opt;
          renderQuestions();
        }
      });
    });

    updateScoreboard();
  }

  function calculateStats() {
    var all = COURSE_DATA.questions;
    var answered = 0;
    var correct = 0;
    var wrong = 0;
    var errorsByUnit = {};

    all.forEach(function (q) {
      var ans = state.answers[q.id];
      if (ans !== undefined) {
        answered++;
        if (ans === q.correctIndex) {
          correct++;
        } else {
          wrong++;
          var key = q.uf + " - " + q.unit + ": " + q.unitTitle;
          errorsByUnit[key] = (errorsByUnit[key] || 0) + 1;
        }
      }
    });

    var total = all.length;
    var grade = total > 0 ? ((correct / total) * 10).toFixed(2) : "0.00";
    return {
      total: total,
      answered: answered,
      correct: correct,
      wrong: wrong,
      grade: grade,
      errorsByUnit: errorsByUnit
    };
  }

  function updateScoreboard() {
    var stats = calculateStats();
    document.getElementById("statTotal").textContent = stats.total;
    document.getElementById("statAnswered").textContent = stats.answered;
    document.getElementById("statCorrect").textContent = stats.correct;
    document.getElementById("statWrong").textContent = stats.wrong;
    document.getElementById("statGrade").textContent = stats.grade;

    var finalBox = document.getElementById("finalSummaryContent");
    if (stats.answered === 0) {
      finalBox.innerHTML = '<p class="muted">Responde las preguntas para visualizar tu calificación detallada y las unidades recomendadas para repasar.</p>';
      return;
    }

    var sortedWeakUnits = Object.entries(stats.errorsByUnit).sort(function (a, b) {
      return b[1] - a[1];
    });
    var reinforceHtml = "";

    if (sortedWeakUnits.length === 0) {
      reinforceHtml = '<p style="color:#14532d;font-weight:600;">¡Excelente trabajo! No has cometido fallos en las preguntas respondidas.</p>';
    } else {
      var items = sortedWeakUnits
        .map(function (entry) {
          var unitLabel = entry[0];
          var count = entry[1];
          return "<li><strong>" + unitLabel + "</strong> (" + count + " fallo" + (count > 1 ? "s" : "") + ")</li>";
        })
        .join("");
      reinforceHtml = '<p><strong>Unidades didácticas recomendadas para reforzar (ordenadas por número de fallos):</strong></p><ul class="reinforce-list">' + items + "</ul>";
    }

    finalBox.innerHTML =
      "<p><strong>Progreso:</strong> " + stats.answered + " de " + stats.total + " preguntas respondidas | " +
      "<strong>Aciertos:</strong> " + stats.correct + " | " +
      "<strong>Fallos:</strong> " + stats.wrong + " | " +
      "<strong>Calificación global:</strong> " + stats.grade + " / 10</p>" +
      reinforceHtml;
  }

  filterUfSelect.addEventListener("change", renderQuestions);

  resetQuizBtn.addEventListener("click", function () {
    state.answers = {};
    renderQuestions();
  });

  downloadPdfBtn.addEventListener("click", function () {
    if (!window.jspdf || !window.jspdf.jsPDF) {
      alert("No se ha podido cargar la librería PDF. Comprueba tu conexión a internet.");
      return;
    }
    var jsPDF = window.jspdf.jsPDF;
    var doc = new jsPDF({ unit: "mm", format: "a4" });
    var stats = calculateStats();
    var student = document.getElementById("studentName").value.trim() || "Alumno/a";
    var dateStr = new Date().toLocaleDateString("es-ES");

    var y = 18;
    var pageHeight = 280;

    function checkPage(needed) {
      if (y + (needed || 14) > pageHeight) {
        doc.addPage();
        y = 18;
      }
    }

    doc.setFont("helvetica", "bold");
    doc.setFontSize(15);

doc.setTextColor(15, 61, 104);
doc.text("INFORME DE AUTOEVALUACION - INSTALACIONES ELECTRICAS", 14, y);
y += 8;
doc.setFont("helvetica", "normal");
doc.setFontSize(10);
doc.setTextColor(40, 40, 40);
doc.text("Alumno/a: " + student + "   |   Fecha: " + dateStr, 14, y);
y += 6;
doc.setFont("helvetica", "bold");
doc.text(
"Respondidas: " + stats.answered + "/" + stats.total +
"   |   Correctas: " + stats.correct +
"   |   Incorrectas: " + stats.wrong +
"   |   Nota: " + stats.grade + " / 10",
14,
y
);
y += 8;
doc.setFont("helvetica", "bold");
doc.setTextColor(15, 61, 104);
doc.text("UNIDADES RECOMENDADAS PARA REFORZAR:", 14, y);
y += 6;
doc.setFont("helvetica", "normal");
doc.setTextColor(30, 30, 30);
var weakUnits = Object.entries(stats.errorsByUnit).sort(function (a, b) {
return b[1] - a[1];
});
if (weakUnits.length === 0) {
doc.text("- Ninguna unidad pendiente de refuerzo segun las respuestas registradas.", 16, y);
y += 8;
} else {
weakUnits.forEach(function (entry) {
checkPage(7);
doc.text("- " + entry[0] + " (" + entry[1] + " fallo" + (entry[1] > 1 ? "s" : "") + ")", 16, y);
y += 6;
});
y += 4;
}
doc.setFont("helvetica", "bold");
doc.setTextColor(15, 61, 104);
doc.text("DESGLOSE DE PREGUNTAS Y RESULTADOS:", 14, y);
y += 7;
COURSE_DATA.questions.forEach(function (q, i) {
var userAns = state.answers[q.id];
var isAnswered = userAns !== undefined;
var isOk = isAnswered && userAns === q.correctIndex;
var qTitle = (i + 1) + ". [" + q.uf + " - " + q.unit + "] " + q.question;
var qLines = doc.splitTextToSize(qTitle, 180);
checkPage(qLines.length * 5 + 14);
doc.setFont("helvetica", "bold");
doc.setTextColor(20, 20, 20);
doc.text(qLines, 14, y);
y += qLines.length * 5;
doc.setFont("helvetica", "normal");
var correctOptText = String.fromCharCode(65 + q.correctIndex) + ") " + q.options[q.correctIndex];
if (!isAnswered) {
doc.setTextColor(110, 110, 110);
doc.text("   Tu respuesta: Sin responder", 14, y);
y += 5;
doc.setTextColor(22, 101, 52);
var corrLines = doc.splitTextToSize("   Respuesta correcta: " + correctOptText, 178);
doc.text(corrLines, 14, y);
y += corrLines.length * 5 + 3;
} else if (isOk) {
doc.setTextColor(22, 101, 52);
var okText = "   [CORRECTA] " + String.fromCharCode(65 + userAns) + ") " + q.options[userAns];
var okLines = doc.splitTextToSize(okText, 178);
doc.text(okLines, 14, y);
y += okLines.length * 5 + 3;
} else {
doc.setTextColor(185, 28, 28);
var badText = "   [INCORRECTA] Tu respuesta: " + String.fromCharCode(65 + userAns) + ") " + q.options[userAns];
var badLines = doc.splitTextToSize(badText, 178);
doc.text(badLines, 14, y);
y += badLines.length * 5;
doc.setTextColor(22, 101, 52);
var corrLines2 = doc.splitTextToSize("   Respuesta correcta: " + correctOptText, 178);
doc.text(corrLines2, 14, y);
y += corrLines2.length * 5 + 3;
}
});
doc.save("Evaluacion_Instalaciones_Electricas_" + student.replace(/\s+/g, "_") + ".pdf");
});
showSummary("UF1441", "UD1");
});
