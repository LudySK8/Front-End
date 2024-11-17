let botaoSom = document.querySelector(".botao-som")
let video = document.querySelector(".video")
let botao = document.querySelector(".link-info")
let modal = document.querySelector(".modal")
let audio = document.querySelector(".audio")

botaoSom.addEventListener("click", ligaSom)

function ligaSom() {
   video.muted = false
}

botao.addEventListener("click", mostraModal)
modal.addEventListener("click", escondeModal)

function mostraModal() {
    modal.style.display = "block"
}

function escondeModal() {
    modal.style.display = "none"
}

window.addEventListener("load", tocarAudio)

function tocarAudio() {
    audio.play()
}