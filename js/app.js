/* Lógica de la guía: navegación, mazo, repaso, tests y plan. */

function load(k, d){
  try{ const v = JSON.parse(localStorage.getItem('uf.' + k)); return v === null ? d : v; }
  catch(_){ return d; }
}
function save(k, v){ localStorage.setItem('uf.' + k, JSON.stringify(v)); }

/* ---------- navegación ---------- */
const views = document.querySelectorAll('.view');
const navBtns = document.querySelectorAll('#nav button');

function go(v){
  views.forEach(s => s.classList.toggle('on', s.id === 'v-' + v));
  navBtns.forEach(b => b.classList.toggle('on', b.dataset.v === v));
  window.scrollTo(0, 0);
}
navBtns.forEach(b => b.onclick = () => go(b.dataset.v));
document.addEventListener('click', e => {
  const g = e.target.closest('[data-go]');
  if(g){ e.preventDefault(); go(g.dataset.go); }
});

/* ---------- progreso de unidades ---------- */
let done = load('done', {});
['ud1','ud2','ud3'].forEach(u => {
  const p = document.getElementById('p-' + u);
  const paint = () => {
    p.textContent = done[u] ? 'Estudiada' : 'Sin marcar';
    p.classList.toggle('done', !!done[u]);
  };
  paint();
  document.getElementById('mark-' + u).onclick = () => {
    done[u] = !done[u]; save('done', done); paint();
  };
});

/* ---------- mazo de cifras ---------- */
const DIAS = {1:0, 2:1, 3:3, 4:7, 5:21};
const hoy = () => Math.floor(Date.now() / 864e5);

let cards = load('cards', null);
if(!cards || cards.length !== CIFRAS.length){
  cards = CIFRAS.map((_, i) => ({i, box:1, due:0}));
  save('cards', cards);
}

function guardarCards(){ save('cards', cards); pintarMeta(); }

function pintarMeta(){
  const due = cards.filter(c => c.due <= hoy()).length;
  const dom = cards.filter(c => c.box >= 4).length;
  const m = document.getElementById('cifras-meta');
  if(m) m.textContent = due + ' pendientes de repaso · ' + dom + ' dominadas de ' + cards.length;
  const dn = document.getElementById('due-n'); if(dn) dn.textContent = due;
  const mn = document.getElementById('master-n'); if(mn) mn.textContent = dom;
}

let cola = [], actual = null;

function nuevaCola(filtro){
  cola = cards.filter(filtro).map(c => c.i);
  for(let i = cola.length - 1; i > 0; i--){
    const j = Math.floor(Math.random() * (i + 1));
    [cola[i], cola[j]] = [cola[j], cola[i]];
  }
}

function htmlCarta(){
  return '<div class="flash" id="fl"><div class="tag">Caja ' + actual.box + '</div>' +
    '<div class="q">' + CIFRAS[actual.i][0] + '</div>' +
    '<div class="a">' + CIFRAS[actual.i][1] + '</div></div>' +
    '<div class="row" id="fl-btns" style="display:none">' +
    '<button class="btn ghost sm" data-fb="0">Otra vez</button>' +
    '<button class="btn ghost sm" data-fb="1">Casi</button>' +
    '<button class="btn sm" data-fb="2">Bien</button></div>' +
    '<div class="row" style="margin-top:1em"><button class="btn ghost sm" id="fl-show">Ver respuesta</button></div>';
}

function engancharCarta(cont, alAcabar){
  document.getElementById('fl-show').onclick = e => {
    document.getElementById('fl').classList.add('on');
    document.getElementById('fl-btns').style.display = 'flex';
    e.target.remove();
  };
  document.querySelectorAll('[data-fb]').forEach(b => b.onclick = () => {
    const v = +b.dataset.fb;
    if(v === 0){ actual.box = 1; actual.due = hoy(); }
    else if(v === 1){ actual.due = hoy() + 1; }
    else { actual.box = Math.min(5, actual.box + 1); actual.due = hoy() + DIAS[actual.box]; }
    guardarCards();
    cola.shift();
    alAcabar();
  });
}

function pintarCarta(){
  const cont = document.getElementById('cifras-box');
  if(!cola.length){
    cont.innerHTML = '<p class="meta">No queda nada pendiente aquí. Vuelve mañana o reinicia el mazo.</p>';
    return;
  }
  actual = cards.find(c => c.i === cola[0]);
  cont.innerHTML = htmlCarta();
  engancharCarta(cont, pintarCarta);
}

function pintarCartaEn(cont){
  if(!cola.length){
    cont.innerHTML = '<p class="meta">Sesión terminada. Vuelve mañana.</p>';
    pintarMeta();
    return;
  }
  actual = cards.find(c => c.i === cola[0]);
  cont.innerHTML = htmlCarta();
  engancharCarta(cont, () => pintarCartaEn(cont));
}

document.getElementById('cifras-reset').onclick = () => {
  cards = CIFRAS.map((_, i) => ({i, box:1, due:0}));
  guardarCards(); nuevaCola(() => true); pintarCarta();
};

document.getElementById('repaso-start').onclick = () => {
  go('repaso');
  nuevaCola(c => c.due <= hoy());
  const box = document.getElementById('repaso-box');
  if(!cola.length){
    box.innerHTML = '<p class="meta">Nada pendiente ahora mismo. Usa el interrogatorio mientras.</p>';
    return;
  }
  pintarCartaEn(box);
};

nuevaCola(c => c.due <= hoy());
pintarCarta();
pintarMeta();

/* ---------- tests ---------- */
function montarQuiz(id, data){
  const cont = document.getElementById(id);
  let orden = [], pos = 0, aciertos = 0, fallos = [];

  function inicio(){
    cont.innerHTML = '<p class="meta">' + data.length + ' preguntas · sin límite de tiempo · puedes repetirlo</p>' +
      '<button class="btn" id="' + id + '-go">Empezar</button>';
    document.getElementById(id + '-go').onclick = empezar;
  }

  function empezar(){
    orden = data.map((_, i) => i);
    for(let i = orden.length - 1; i > 0; i--){
      const j = Math.floor(Math.random() * (i + 1));
      [orden[i], orden[j]] = [orden[j], orden[i]];
    }
    pos = 0; aciertos = 0; fallos = [];
    pintar();
  }

  function pintar(){
    if(pos >= orden.length) return fin();
    const q = data[orden[pos]];
    cont.innerHTML = '<div class="bar"><i></i></div><div class="qcard">' +
      '<div class="qnum">Pregunta ' + (pos + 1) + ' de ' + orden.length + '</div>' +
      '<div class="qtext">' + q[0] + '</div>' +
      q[1].map((o, i) => '<button class="opt" data-i="' + i + '">' + o + '</button>').join('') +
      '<div class="fb" id="' + id + '-fb"></div></div>';
    cont.querySelector('.bar i').style.width = (pos / orden.length * 100) + '%';
    cont.querySelectorAll('.opt').forEach(b => b.onclick = () => responder(+b.dataset.i, q));
  }

  function responder(i, q){
    const ok = i === q[2];
    cont.querySelectorAll('.opt').forEach((b, j) => {
      b.disabled = true;
      if(j === q[2]) b.classList.add('ok');
      else if(j === i) b.classList.add('bad');
    });
    const fb = document.getElementById(id + '-fb');
    fb.className = 'fb on ' + (ok ? 'ok' : 'bad');
    fb.innerHTML = '<strong>' + (ok ? 'Correcto.' : 'Incorrecto.') + '</strong> ' + q[3] +
      '<div style="margin-top:14px"><button class="btn sm" id="' + id + '-next">Siguiente</button></div>';
    if(ok) aciertos++; else fallos.push(orden[pos]);
    document.getElementById(id + '-next').onclick = () => { pos++; pintar(); };
  }

  function fin(){
    const nota = aciertos;
    const nivel = nota >= 26 ? 'Listo para el examen'
                : nota >= 18 ? 'Vas bien, repasa los fallos'
                : 'Toca volver al temario';
    cont.innerHTML = '<div class="qcard"><div class="qnum">Resultado</div>' +
      '<div class="qtext">' + nota + ' de ' + orden.length + ' · ' + nivel + '</div>' +
      (fallos.length ? '<p class="meta">Fallos: ' + fallos.map(i => data[i][0]).join(' · ') + '</p>' : '') +
      '<div class="row"><button class="btn" id="' + id + '-again">Repetir</button>' +
      '<button class="btn ghost" id="' + id + '-rep">Ir al repaso</button></div></div>';
    document.getElementById(id + '-again').onclick = empezar;
    document.getElementById(id + '-rep').onclick = () => go('repaso');
  }

  inicio();
}

montarQuiz('quiz-ud1', Q1);
montarQuiz('quiz-ud2', Q2);
montarQuiz('quiz-ud3', Q3);

/* ---------- interrogatorio aleatorio ---------- */
document.getElementById('interro-start').onclick = () => {
  const pool = Q1.concat(Q2, Q3);
  const q = pool[Math.floor(Math.random() * pool.length)];
  const box = document.getElementById('repaso-box');
  box.innerHTML = '<div class="qcard"><div class="qnum">Interrogatorio</div>' +
    '<div class="qtext">' + q[0] + '</div><div id="ir-fb"></div>' +
    '<button class="btn ghost sm" id="ir-show">Ver respuesta</button></div>';
  document.getElementById('ir-show').onclick = () => {
    document.getElementById('ir-fb').innerHTML =
      '<div class="fb on ok" style="margin-top:14px"><strong>' + q[1][q[2]] + '</strong> — ' + q[3] + '</div>' +
      '<div class="row" style="margin-top:14px"><button class="btn sm" id="ir-more">Otra</button></div>';
    document.getElementById('ir-show').remove();
    document.getElementById('ir-more').onclick = () => document.getElementById('interro-start').click();
  };
};

/* ---------- plan ---------- */
const planHecho = load('plan', {});
document.getElementById('plan').innerHTML = PLAN.map((d, i) =>
  '<li><input type="checkbox" data-i="' + i + '"' + (planHecho[i] ? ' checked' : '') +
  '><span class="d">' + d[0] + '</span><span class="t">' + d[1] + '</span></li>'
).join('');
document.querySelectorAll('#plan input').forEach(c => c.onchange = () => {
  planHecho[c.dataset.i] = c.checked;
  save('plan', planHecho);
});