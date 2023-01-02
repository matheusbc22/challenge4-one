import Produto from "./js/Produto.js";

const form = document.getElementById("form_addproduto");
const url = document.getElementById("form_add_produto_urlimg");
const erroUrl = document.getElementById("errourl");
const nome = document.getElementById("form_addproduto__nome");
const erroNome = document.getElementById("erronome");
const preco = document.getElementById("form_addproduto__preco");
const erroPreco = document.getElementById("erropreco");
const descricao = document.getElementById("form_addproduto__descricao");
const erroDescricao = document.getElementById("errodescricao");
const categoria = document.getElementById("form_addproduto__categoria");
const erroCategoria = document.getElementById("errocategoria");
const btn = document.getElementById("form_addproduto__btn");

function containsNumbers(str) {
    return /\d/.test(str);
}

preco.addEventListener("input", () => {
    if (containsNumbers(preco.value)){
        erroPreco.textContent = "";
        preco.style["border"] = "none";
    }else{
        erroPreco.textContent = "Digite somente números";
        erroPreco.style["color"] = "red";
        preco.style["border"] = "1px solid red";
    }
});
categoria.addEventListener("change", () => {
    if (categoria.value != ""){
        erroCategoria.textContent = "";
        categoria.style["border"] = "none";
    }else{
        erroCategoria.textContent = "Selecione uma categoria para o produto";
        erroCategoria.style["color"] = "red";
        categoria.style["border"] = "1px solid red";
    }
});
categoria.addEventListener("select", () => {
    if (categoria.value != ""){
        erroCategoria.textContent = "";
        categoria.style["border"] = "none";
    }else{
        erroCategoria.textContent = "Selecione uma categoria para o produto";
        erroCategoria.style["color"] = "red";
        categoria.style["border"] = "1px solid red";
    }
});
descricao.addEventListener("input", () => {
    if (descricao.value.length >= 20 && descricao.value.length <= 150){
        erroDescricao.textContent = "";
        descricao.style["border"] = "none";
    }else{
        erroDescricao.textContent = "Digite pelo menos 20 caracteres e no máximo 150.";
        erroDescricao.style["color"] = "red";
        descricao.style["border"] = "1px solid red";
    }
});
nome.addEventListener("input", () => {
    if (nome.value.length >= 3 && nome.value.length <= 20){
        erroNome.textContent = "";
        nome.style["border"] = "none";
    }else{
        erroNome.textContent = "Digite pelo menos 3 caracteres e no máximo 20.";
        erroNome.style["color"] = "red";
        nome.style["border"] = "1px solid red";
    }
});
url.addEventListener("input", () => {
    if (url.value.startsWith("https://") || url.value.startsWith("http://")){
        erroUrl.textContent = "";
        url.style["border"] = "none";
    }else{
        erroUrl.textContent = "Digita uma URL válida, ex: https://google.com ou https://www.google.com";
        erroUrl.style["color"] = "red";
        url.style["border"] = "1px solid red";
    }
});

btn.addEventListener("click", function() {
    if (form.reportValidity()) {
        const produto = new Produto(url.value, nome.value, preco.value, descricao.value, categoria.value);
        Produto.addProduto(produto);
    }
});
