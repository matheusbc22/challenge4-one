import validaFormFooter from "/js/validaForm_footer.js";
import Produto from "/js/produto.js";

//Barra de pesquisa
const barradepesquisa = document.getElementById("inputpesquisa");
const caixaresultadopesquisa = document.getElementById("resultadopesquisa");
if (barradepesquisa != null && barradepesquisa != undefined){
    barradepesquisa.addEventListener("input", () => {
        if (barradepesquisa.value != ""){
            caixaresultadopesquisa.innerHTML = 
            `
            <div class="box_conteudo__topo">
                <h1>Resultado da pesquisa</h1>
            </div>
            <div class="box_conteudo__produtos">
    
            </div>
            `;
            caixaresultadopesquisa.style["display"] = "flex";
            let resultadoPesquisa = Produto.searchProduto(barradepesquisa.value);
            if (resultadoPesquisa != "" && resultadoPesquisa != undefined){
                    caixaresultadopesquisa.innerHTML += 
                    `
                    <div class="box_conteudo__produtos__produto" id="${resultadoPesquisa.nome}">
                        <div class="box_conteudo__produtos__produto___imagens">
                            <img src="${resultadoPesquisa.url}" alt="">
                        </div>
                        ${resultadoPesquisa.nome}<br>
                        <strong>R$ ${resultadoPesquisa.preco}</strong><br>
                        <strong><a href="">Ver produto</a></strong>
                    </div>
                    `;
                    resultadoPesquisa = undefined;
            }
        }else{
            caixaresultadopesquisa.style["display"] = "none";
            caixaresultadopesquisa.innerHTML = 
            `
            <div class="box_conteudo__topo">
                <h1>Resultado da pesquisa</h1>
            </div>
            <div class="box_conteudo__produtos">
    
            </div>
            `;
        }
    })
}

//Deletando produto
const botaoParaDeletar = document.getElementsByClassName("delete");

for (let i = 0; i < botaoParaDeletar.length; i++) {
  botaoParaDeletar[i].addEventListener("click", () => {
    let confirmaDeletar = confirm("Você tem certeza que quer deletar o produto " + botaoParaDeletar[i].id + "?");
    if (confirmaDeletar){
        Produto.deletar(botaoParaDeletar[i].id);
        location.reload();
    }
  });
}

validaFormFooter();