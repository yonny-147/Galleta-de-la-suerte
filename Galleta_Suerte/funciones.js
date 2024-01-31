let textoGalleta = document.querySelector('.galleta-top');

  let images = [
    "galleta_1.png",
    "galleta_2.png",
    "galleta_3.png",
    "galleta_4.png",
    "galleta_5.png"
  ]

  let cont = 0
  let timeOut = 1000

  function happyCookies() {
    document.getElementById("galleta").src = images[cont]
    cont++
      if(cont < images.length) {
        setTimeout(happyCookies, timeOut)
      } else{
        textoGalleta.style.visibility = 'visible';
        clearTimeout(timer)
      }
    }

