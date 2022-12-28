export default function validaFormFooter(){
    const nome = document.getElementById("nome_form__footer");
    const erroNome = document.getElementById("erro_nome");
    const erroMsg = document.getElementById("erro_msg");
    const mensagem = document.getElementById("msg_form__footer");
    const btn = document.getElementById("rodape_superior__direita___btn");

    //Variavel de controle para o botão de envio
    let nomeValidado = false;
    let msgValidada = false;

    //Desabilita o botão de envio
    btn.disabled = true;
    btn.style["background-color"] = "gray";

    //Detecta modificação no input nome
    nome.addEventListener("input", () => {   
        //Se estiver vazio deixa o botão desativado e muda os estilos e mostra mensagem de erro     
        if (nome.value.length === 0){
            erroNome.textContent = "O nome não pode ser vazio.";
            nome.style["border"] = "1px solid red";
            erroNome.style["color"] = "red";
            nomeValidado = false;
            btn.disabled = true;
            btn.style["background-color"] = "gray";
        //Se estiver com mais de 40 caracteres deixa o botão desativado e muda os estilos e mostra mensagem de erro
        }else if (nome.value.length > 40){
            erroNome.textContent = "O nome não pode ter mais que 40 caracteres.";
            nome.style["border"] = "1px solid red";
            erroNome.style["color"] = "red";
            nomeValidado = false;
            btn.disabled = true;
            btn.style["background-color"] = "gray";
        }else{
            //Se estiver tudo certo, arruma os estilos e habilita o botão caso o outro campo esteja valido também
            erroNome.textContent = "";
            nome.style["border"] = "none";
            nomeValidado = true;
            if (msgValidada){
                btn.disabled = false;
                btn.style["background-color"] = "#2A7AE4";
            }            
        }
    });
    //Detecta modificação no input mensagem
    mensagem.addEventListener("input", () => {
        //Se estiver vazio deixa o botão desativado e muda os estilos e mostra mensagem de erro
        if (mensagem.value.length === 0){
            erroMsg.textContent = "A mensagem não pode ser vazia.";
            mensagem.style["border"] = "1px solid red";
            erroMsg.style["color"] = "red";
            btn.disabled = true;
            btn.style["background-color"] = "gray";        
        //Se estiver com mais de 120 caracteres deixa o botão desativado e muda os estilos e mostra mensagem de erro    
        }else if (mensagem.value.length > 120){
            erroMsg.textContent = "O nome não pode ter mais que 120 caracteres.";
            mensagem.style["border"] = "1px solid red";
            erroMsg.style["color"] = "red";
            btn.disabled = true;
            btn.style["background-color"] = "gray";            
        }else{
            //Se estiver tudo certo, arruma os estilos e habilita o botão caso o outro campo esteja valido também
            erroMsg.textContent = "";
            mensagem.style["border"] = "none";
            msgValidada = true;
            if (nomeValidado){
                btn.disabled = false;
                btn.style["background-color"] = "#2A7AE4";
            }
        }
    });
}
