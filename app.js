const btnCriptografar = document.querySelector(".btn-criptografar");
const txtCriptografar = document.querySelector(".criptografar");
const aviso = document.querySelector(".texto-aviso");
const resposta = document.querySelector(".avaliar");
const conteudo = document.querySelector(".card-box");
const btnCopiar = document.querySelector(".btn-copiar");
const btnDescriptografar = document.querySelector(".btn-decriptografar");


btnCriptografar.addEventListener("click", e=>{
    e.preventDefault();
    let texto = txtCriptografar.value;
    let txt = texto.normalize("NFD").replace(/[$\.¿\?~!\¡@#%^&*()_|}\{[\]>\<:"`;,\u0300-\u036f']/g, "");
    
    if(texto == ""){
        aviso.style.background = "#0A3871";
        aviso.style.color = "#FFFF";
        aviso.style.fontWeight = "800";
        aviso.textContent = "O campo de texto não deve estar vazio!";
        
        setTimeout(()=>{
            aviso.removeAttribute("style");
        },1500);
    }

    else if(texto !== txt){
        aviso.style.background = "#0A3871";
        aviso.style.color = "#FFFF";
        aviso.style.fontWeight = "800";
        aviso.textContent = "Não deve ter acentos e caracteres especiais!";
        
        setTimeout(()=>{
            aviso.removeAttribute("style");
        },1500);
    }

    else if(texto !== texto.toLowerCase()){
        aviso.style.background = "#0A3871";
        aviso.style.color = "#FFFF";
        aviso.style.fontWeight = "800";
        aviso.textContent = "O texto deve estar todo em letras minúsculas!";
        
        setTimeout(()=>{
            aviso.removeAttribute("style");
        },1500);
    }

    else{
        texto = texto.replace(/e/mg, "enter");
        texto = texto.replace(/i/mg, "imes");
        texto = texto.replace(/a/mg, "ai");
        texto = texto.replace(/o/mg, "ober");
        texto = texto.replace(/u/mg, "ufat");

        resposta.innerHTML = texto;
        btnCopiar.style.visibility = "inherit";
        conteudo.remove(); 
    }
});

btnDescriptografar.addEventListener("click", e=>{
    e.preventDefault();
    let texto = txtCriptografar.value;
    let txt = texto.normalize("NFD").replace(/[$\.¿\?~!\¡@#%^&*()_|}\{[\]>\<:"`;,\u0300-\u036f']/g, "");
    
    if(texto == ""){
        aviso.style.background = "#0A3871";
        aviso.style.color = "#FFFF";
        aviso.style.fontWeight = "800";
        aviso.textContent = "O campo de texto não deve ser vazio!";
        
        setTimeout(()=>{
            aviso.removeAttribute("style");
        },1500);
    }

    else if(texto !== txt){
        aviso.style.background = "#0A3871";
        aviso.style.color = "#FFFF";
        aviso.style.fontWeight = "800";
        aviso.textContent = "Não deve ter acentos e caracteres especiais!";
        
        setTimeout(()=>{
            aviso.removeAttribute("style");
        },1500);
    }

    else if(texto !== texto.toLowerCase()){
        aviso.style.background = "#0A3871";
        aviso.style.color = "#FFFF";
        aviso.style.fontWeight = "800";
        aviso.textContent = "O texto deve estar todo em letras minúsculas!";
        
        setTimeout(()=>{
            aviso.removeAttribute("style");
        },1500);
    }

    else{
        texto = texto.replace(/enter/mg, "e");
        texto = texto.replace(/imes/mg, "i");
        texto = texto.replace(/ai/mg, "a");
        texto = texto.replace(/ober/mg, "o");
        texto = texto.replace(/ufat/mg, "u");

        resposta.innerHTML = texto;
        btnCopiar.style.visibility = "inherit";
        conteudo.remove(); 
    }
});

btnCopiar.addEventListener("click", e=>{
    e.preventDefault();
    let copiar = resposta;
    copiar.select();
    document.execCommand("copy");
    alert ("Seu texto foi copiado com sucesso 👍");
});