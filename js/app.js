import validaFormFooter from "/js/validaForm_footer.js";
import Produto from "/js/produto.js";

const barradepesquisa = document.getElementById("inputpesquisa");
barradepesquisa.addEventListener("input", () => {
    if (barradepesquisa.value != ""){
        console.log(barradepesquisa.value);
    }
})
validaFormFooter();