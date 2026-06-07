// Modo escuro / claro

const modoLuz = localStorage.getItem('modo-luz');
if (modoLuz !== null) {
    if (modoLuz == 'light') {
        setarModoLuz('light');
    }
}

document.getElementById('switchModo').addEventListener('click', function() {
    const $body = document.getElementsByTagName('body')[0];
    const modoAtual = $body.getAttribute('data-modo');

    setarModoLuz((modoAtual == 'dark') ? 'light' : 'dark');
})

function setarModoLuz(modo) {
    const $body = document.getElementsByTagName('body')[0];
    const $iconeBotao = document.getElementById('switchModo').getElementsByTagName('img')[0];

    switch (modo) {
        case 'dark':
            $body.setAttribute('data-modo', 'dark');
            localStorage.setItem('modo-luz', 'dark');
            $iconeBotao.setAttribute('src', "https://img.icons8.com/3d-fluency/94/partly-cloudy-night.png")
            break;
            
        case 'light':
            $body.setAttribute('data-modo', 'light');
            localStorage.setItem('modo-luz', 'light');
            $iconeBotao.setAttribute('src', "https://img.icons8.com/3d-fluency/94/partly-cloudy-day.png")
            break;
            
        default:
            $body.setAttribute('data-modo', 'dark');
            localStorage.setItem('modo-luz', 'dark');
            $iconeBotao.setAttribute('src', "https://img.icons8.com/3d-fluency/94/partly-cloudy-night.png")
            break;
    }
}

// Easter egg

const foguete = document.getElementById("foca-foguete");
let focaVoando = false;

document.getElementById('foca-easter-btn').addEventListener('click', function () {
    if (!focaVoando) {
        focaVoando = true;
        foguete.classList.remove("voando");
        
        void foguete.offsetWidth;
        
        foguete.classList.add("voando");
        
        setTimeout(() => {
            foguete.classList.remove("voando");
            focaVoando = false;
        }, 8000);
    }
})