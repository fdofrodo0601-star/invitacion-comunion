document.addEventListener("DOMContentLoaded", function () {


  /* =========================
     ELEMENTOS
  ========================= */

  const portada =
    document.getElementById("portada");

  const abrir =
    document.getElementById("abrir");

  const musica =
    document.getElementById("musica");

  const botonMusica =
    document.getElementById("botonMusica");


  /* =========================
     ABRIR INVITACIÓN
  ========================= */

  if (abrir && portada) {

    abrir.addEventListener("click", function () {

      portada.classList.add("oculta");


      if (musica) {

        musica.play().catch(function () {

          console.log(
            "No se pudo reproducir la música."
          );

        });

      }

    });

  }


  /* =========================
     BOTÓN DE MÚSICA
  ========================= */

  if (botonMusica && musica) {

    botonMusica.addEventListener(
      "click",
      function () {

        if (musica.paused) {

          musica.play();

          botonMusica.innerHTML = "♫";

        } else {

          musica.pause();

          botonMusica.innerHTML = "🔇";

        }

      }
    );

  }


  /* =========================
     CUENTA REGRESIVA
  ========================= */

  const fechaEvento =
    new Date(
      "OCTOBER 03, 2026 12:00:00"
    ).getTime();


  function actualizarContador() {

    const dias =
      document.getElementById("dias");

    const horas =
      document.getElementById("horas");

    const minutos =
      document.getElementById("minutos");

    const segundos =
      document.getElementById("segundos");


    if (
      !dias ||
      !horas ||
      !minutos ||
      !segundos
    ) {

      return;

    }


    const ahora =
      new Date().getTime();


    const diferencia =
      fechaEvento - ahora;


    if (diferencia <= 0) {

      dias.innerHTML = "00";

      horas.innerHTML = "00";

      minutos.innerHTML = "00";

      segundos.innerHTML = "00";

      return;

    }


    const d =
      Math.floor(
        diferencia /
        (1000 * 60 * 60 * 24)
      );


    const h =
      Math.floor(
        (diferencia %
          (1000 * 60 * 60 * 24))
        /
        (1000 * 60 * 60)
      );


    const m =
      Math.floor(
        (diferencia %
          (1000 * 60 * 60))
        /
        (1000 * 60)
      );


    const s =
      Math.floor(
        (diferencia %
          (1000 * 60))
        /
        1000
      );


    dias.innerHTML =
      String(d).padStart(2, "0");


    horas.innerHTML =
      String(h).padStart(2, "0");


    minutos.innerHTML =
      String(m).padStart(2, "0");


    segundos.innerHTML =
      String(s).padStart(2, "0");

  }


  actualizarContador();


  setInterval(
    actualizarContador,
    1000
  );
const botonConfirmar =
  document.getElementById("confirmarWhatsapp");

botonConfirmar.addEventListener("click", function () {

  const nombre =
    document.getElementById("nombreInvitado").value.trim();

  if (nombre === "") {

    alert("Por favor escribe tu nombre.");

    return;
  }

  // CAMBIA ESTE NÚMERO POR EL TUYO
  const telefono = "2481502980";

  const mensaje =
    `Hola, soy ${nombre}. 😊%0A%0A` +
    `Confirmo mi asistencia a la comunion de alexis y viviana. 🎉%0A` +
    `¡Muchas gracias por la invitación! 💕`;

  const enlace =
    `https://wa.me/${telefono}?text=${mensaje}`;

  window.open(enlace, "_blank");

});

});
