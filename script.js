const botao = document.getElementById("surpresa");
const carta = document.getElementById("carta");
const musica = document.getElementById("musica");

// ----------------------
// ABRIR SURPRESA
// ----------------------

botao.addEventListener("click", async () => {

    // Mostrar carta
    carta.classList.remove("hidden");

    // Esconder botão
    botao.style.display = "none";

    // Tocar música
    try{
        musica.currentTime = 0;
        musica.volume = 1;
        await musica.play();
        console.log("Música iniciada!");
    }catch(erro){
        console.error("Erro ao tocar música:", erro);
        alert("Não foi possível reproduzir a música.");
    }

    // Confetes
    confetti({
        particleCount:250,
        spread:180,
        origin:{y:0.6}
    });

    let vezes = 0;

    const festa = setInterval(()=>{

        confetti({
            particleCount:40,
            spread:100,
            origin:{
                x:Math.random(),
                y:Math.random()*0.6
            }
        });

        vezes++;

        if(vezes>=12){
            clearInterval(festa);
        }

    },500);

});

// ----------------------
// CORAÇÕES
// ----------------------

function criarCoracao(){

    const heart = document.createElement("div");

    heart.className = "heart";
    heart.innerHTML = "❤️";

    heart.style.left = Math.random()*window.innerWidth+"px";
    heart.style.fontSize = (20+Math.random()*25)+"px";
    heart.style.animationDuration = (5+Math.random()*4)+"s";

    document.querySelector(".hearts").appendChild(heart);

    setTimeout(()=>{
        heart.remove();
    },9000);

}

setInterval(criarCoracao,300);

// ----------------------
// BALÕES
// ----------------------

const cores=[
"#ff4f87",
"#ff6fa8",
"#ff8fb1",
"#ffd166",
"#7bdff2",
"#c77dff",
"#90ee90"
];

function criarBalao(){

    const b=document.createElement("div");

    b.className="balloon";

    b.style.left=Math.random()*window.innerWidth+"px";

    b.style.background=cores[Math.floor(Math.random()*cores.length)];

    b.style.animationDuration=(8+Math.random()*6)+"s";

    document.body.appendChild(b);

    setTimeout(()=>{
        b.remove();
    },15000);

}

setInterval(criarBalao,900);