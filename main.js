function tocaSom(seletorAudio){
    const elemento = document.querySelector(seletorAudio);
    if(elemento != null){
        console.log(elemento.localname);
        elemento.play();
    }else{
        alert("Elemento não encontrado!");
    }
}

const listaDeTeclas = document.querySelectorAll('.tecla');

for(let contador = 0; contador < listaDeTeclas.length; contador++){

    const tecla = listaDeTeclas[contador];
    const som = tecla.classList[1];
    const audio = `#som_${som}`;

    tecla.onclick = function() {
        tocaSom(audio);
    }
    
    tecla.onkeydown = function(evento){
        if(evento.code === 'Space' || evento.code === 'Enter')
        tecla.classList.add("ativa")
    }     
    tecla.onkeyup = function() {
        tecla.classList.remove("ativa")  
    } 
}
