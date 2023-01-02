import validaFormFooter from "/js/validaForm_footer.js";
import Produto from "/js/produto.js";

const barradepesquisa = document.getElementById("inputpesquisa");
const caixaresultadopesquisa = document.getElementById("resultadopesquisa");
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
validaFormFooter();