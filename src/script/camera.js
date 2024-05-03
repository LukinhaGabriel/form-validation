const $botaoIniciarCamera = document.querySelector("[data-video-botao]");
const $botaoTirarFoto = document.querySelector("[data-tirar-foto]");
const $botaoEnviar = document.querySelector("[data-enviar]");

const $campoCamera = document.querySelector("[data-camera]");
const $video = document.querySelector("[data-video]");
const $canvas = document.querySelector("[data-video-canvas]");
const $mensagem = document.querySelector("[data-mensagem]")

let imagemUrl = "";


async function iniciarCamera() {
    const iniciarVideo = await navigator.mediaDevices.getUserMedia({ video: true, audio: false });
    
    $botaoIniciarCamera.style.display = "none";
    $campoCamera.style.display = "flex";
    
    $video.srcObject = iniciarVideo;
}

function capturarFoto(){
    $canvas.getContext("2d").drawImage($video, 0, 0, $canvas.width, $canvas.height);

    imagemUrl = $canvas.toDataURL("image/jpeg");
   
    $campoCamera.style.display = "none";
    $mensagem.style.display = "flex";
}

function salvarFotoEnviar(){
    const receberDadosExistentes = localStorage.getItem("cadastro")
    const converteRetorno = JSON.parse(receberDadosExistentes);
    
    converteRetorno.imagem = imagemUrl;
   
    localStorage.setItem("cadastro", JSON.stringify(converteRetorno));
    window.location.href = "../pages/signup-3.html";
}   

$botaoIniciarCamera.addEventListener("click", iniciarCamera);
$botaoTirarFoto.addEventListener("click", capturarFoto);
$botaoEnviar.addEventListener("click", salvarFotoEnviar);

