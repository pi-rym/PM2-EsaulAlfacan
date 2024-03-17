const renderCard = (data) =>
  data.map((data) => {
    // Crear la tarjeta
    const CARD = document.createElement("div");
    // Generar el contenido de la card
    let { title, year, director, duration, genre, rate, poster } = data;
    let [g1, g2, g3] = genre;

    CARD.innerHTML = `  <a class="cardA card card_clone movie col4">
  <div class="subCardA card-body"> <img
  src="${poster}"
  class="imgA card-img-top"
  alt="Película del catálogo"
  >
  </div>
  <div class="infoA container-fluid">
  <div class="container">
                <h4 class="titleA h4">${title}</h4>
                <p>Se estrenó en <span>${year}</span>, dirigida por: <span>${director}</span>.</p>
                <p>${duration}</p><p id="genre">Género:<span class="genre-tag">${g1}</span>, <span class="genre-tag">${g2}</span>,<span
                        class="genre-tag"
                    >${g3}</span></p>
                <p>Valoración: ${rate}</p>
            </div>
        </div>
    </a>`;
    // Obtener el contenedor de las card
    const CONTAIONER_CARDS = document.getElementById("tempData");
    // Asignar el conteido
    CONTAIONER_CARDS.append(CARD);
  });
module.exports = renderCard;
