(()=>{var e={742:e=>{e.exports=e=>e.map((e=>{const t=document.createElement("div");t.classList.add("movie__card");const n=document.createElement("div");n.classList.add="movie__data";const o=document.createElement("h4");o.classList.add("movie__title");const s=document.createElement("p");s.classList.add("movie__info");const a=document.createElement("p");a.classList.add("movie__info");const c=document.createElement("p");c.classList.add("movie__info");const d=document.createElement("p");d.classList.add("movie__info");const i=document.createElement("p");i.classList.add("movie__info");const m=document.createElement("img");m.classList.add("movie__img"),m.alt="Imagen de referencia",o.textContent=e.title,s.innerHTML=e.year,a.textContent=e.director,c.textContent=e.duration,d.textContent=e.genre,i.textContent=e.rate,m.src=e.poster,n.append(o,s,a,c,d,i),t.append(n,m),document.getElementById("movieOthers").appendChild(t)}))}},t={};function n(o){var s=t[o];if(void 0!==s)return s.exports;var a=t[o]={exports:{}};return e[o](a,a.exports,n),a.exports}(()=>{const e=n(742);$.get("https://students-api.2.us-1.fl0.io/movies",((t,n)=>{e(t)}))})()})();