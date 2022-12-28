const form = document.getElementById("form_login");

function validaForm_login(){
    const email = document.getElementById("form_login__email");
    const senha = document.getElementById("form_login__senha");
    const erroEmail = document.getElementById("erro_email");
    const erroSenha = document.getElementById("erro_senha");
    const btn = document.getElementById("form_login__btn");

    //Variavel de controle para o botão de envio
    let emailValidado = false;
    let senhaValidada = false;

    //Desabilita o botão de envio
    btn.disabled = true;
    btn.style["background-color"] = "gray";

    //Detecta modificação no input email
    email.addEventListener("input", () => {   
        //Se estiver vazio deixa o botão desativado e muda os estilos e mostra senha de erro     
        if (email.value.length === 0){
            erroEmail.textContent = "O email não pode ser vazio.";
            email.style["border"] = "1px solid red";
            erroEmail.style["color"] = "red";
            emailValidado = false;
            btn.disabled = true;
            btn.style["background-color"] = "gray";
        //Se estiver com mais de 40 caracteres deixa o botão desativado e muda os estilos e mostra senha de erro
        }else if (!emailValido(email.value)){
            erroEmail.textContent = "Digite um formato de email válido.";
            email.style["border"] = "1px solid red";
            erroEmail.style["color"] = "red";
            emailValidado = false;
            btn.disabled = true;
            btn.style["background-color"] = "gray";
        }else if (emailValido(email.value) && email.value.length >= 6){
            //Se estiver tudo certo, arruma os estilos e habilita o botão caso o outro campo esteja valido também
            erroEmail.textContent = "";
            email.style["border"] = "none";
            emailValidado = true;
            if (senhaValidada){
                btn.disabled = false;
                btn.style["background-color"] = "#2A7AE4";
            }            
        }
    });
    //Detecta modificação no input senha
    senha.addEventListener("input", () => {
        //Se estiver vazio deixa o botão desativado e muda os estilos e mostra senha de erro
        if (senha.value.length === 0){
            erroSenha.textContent = "A senha não pode ser vazia.";
            senha.style["border"] = "1px solid red";
            erroSenha.style["color"] = "red";
            btn.disabled = true;
            btn.style["background-color"] = "gray";        
        //Se estiver com mais de 120 caracteres deixa o botão desativado e muda os estilos e mostra senha de erro    
        }else if (senhaValida(senha.value)){
            erroSenha.textContent = "O email não pode ter mais que 120 caracteres.";
            senha.style["border"] = "1px solid red";
            erroSenha.style["color"] = "red";
            btn.disabled = true;
            btn.style["background-color"] = "gray";            
        }else{
            //Se estiver tudo certo, arruma os estilos e habilita o botão caso o outro campo esteja valido também
            erroSenha.textContent = "";
            senha.style["border"] = "none";
            senhaValidada = true;
            if (emailValidado){
                btn.disabled = false;
                btn.style["background-color"] = "#2A7AE4";
            }
        }
    });
    btn.onclick =  () => { login(email.value, senha.value); };
}

const login = (email, senha) => {
    if (email === "admin@admin.com"){
        senhaEncriptada = CryptoJS.SHA512(senha).toString();
        if (senhaEncriptada == "e5caa147a02565898779b25ca0c5030fcb5b5d21eca0c7ae9d7e9c494b305f17976a683ae9b703aa8313a592dd901e84638ce104b71a769d14195f985813ee4d"){
            localStorage.setItem("hash", JSON.stringify(senha))
        }else{
            erroSenha.textContent = "O email não pode ter mais que 120 caracteres.";
            senha.style["border"] = "1px solid red";
            erroSenha.style["color"] = "red";
            btn.disabled = true;
            btn.style["background-color"] = "gray";   
        }
    }else{
        console.log("Email incorreto");
    }
}
const emailValido = (email) => {
    return String(email)
      .toLowerCase()
      .match(
        /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
      );
  };
const senhaValida = (senha) => {
    return String(senha)
    .match(
        "^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{8,}$"
    );
};
validaForm_login();