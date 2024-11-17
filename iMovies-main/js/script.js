let selectedMovie = ""

function setSelectedMovie(movie) {
  selectedMovie = movie;
}

function selectVideoSrc() {
  switch(selectedMovie) {
    case "pequenaSereia":
      return "./assets/A Pequena Sereia _ Trailer Oficial Legendado.mp4"
      break
    case "blackDemon":
      return "./assets/THE BLACK DEMON  Trailer.mp4"
      break
    case "65Trailer":
      return "./assets/65 - Ameaça Pré-Histórica  Trailer Legendado  Em breve nos cinemas.mp4"
      break
    case "theTank":
      return "./assets/The Tank 2023 Trailer Legendado.mp4"
      break
    case "theCovenant":
        return "./assets/THE COVENANT Trailer 2 (2023) Jake Gyllenhaal.mp4"
        break
    default:
      return "./assets/teste.mp4"
      break
  }
}

function toggleVideo() {
  const trailer = document.querySelector('.trailer');
  const video = document.querySelector('video');
  video.src = selectVideoSrc()
  video.pause()
  trailer.classList.toggle('active');
}

function changeBg(bg, title) {
     const banner = document.querySelector('.banner');
     const contents = document.querySelectorAll('.content');
     banner.style.background = `url("./images/movies/${bg}")`;
     banner.style.backgroundSize = 'cover';
     banner.style.backgroundPosition = 'center';
 
     contents.forEach(content => {
         content.classList.remove('active');
         if (content.classList.contains(title)) {
           content.classList.add('active');
         }
     });
} 