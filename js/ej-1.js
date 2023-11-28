const numeroMagico = Math.floor(Math.random() * 100) + 1;
    let intentos = 0;
    console.log(numeroMagico)

    function checkGuess() {
      const usuarioNumero = parseInt(document.getElementById('guessInput').value);
      intentos++;

      if (usuarioNumero === numeroMagico) {
        alert(`¡Felicidades! Adivinaste el número en ${intentos} intentos.`);
      } else {
        const mensaje = usuarioNumero < numeroMagico ? 'El número es mayor.' : 'El número es menor.';
        alert(`Incorrecto. ${mensaje} Intento ${intentos}.`);
      }
    }