export default class Produto {
    constructor(url, nome, preco, descricao, categoria){
        this.url = url;
        this.nome = nome;
        this.preco = preco;
        this.descricao = descricao;
        this.categoria = categoria;
    }
    static getLocalStorage = () => JSON.parse(localStorage.getItem('produtos')) ?? [];
    static setLocalStorage = (produto) => localStorage.setItem('produtos', JSON.stringify(produto));

    static addProduto(p){
        const produtos = Produto.getLocalStorage();
        produtos.push(p);
        Produto.setLocalStorage(produtos);
    }
    static searchProduto(nome){
        const allProdutos = this.getLocalStorage();
        const nomeLowercase = nome.toLowerCase();
        for (let i = 0; i < allProdutos.length; i++){
            if (allProdutos[i].nome.toLowerCase() == nomeLowercase){
                return allProdutos[i];
            }
        }
    }
    static deletar(nome){
        if (nome != "" && nome != undefined){
            let allProdutos = this.getLocalStorage();
            for (let i = 0; i < allProdutos.length; i++){
                if (allProdutos[i].nome == nome){
                    allProdutos.splice(i, 1);
                    Produto.setLocalStorage(allProdutos);
                }
            }
        }
    }
    static updateProduto(nome, produto){
        if (nome != "" && nome != null && nome != undefined){
            if (produto != "" && produto != null && produto != undefined){
                let todosOsProdutos = Produto.getLocalStorage();
                let produtoParaAtualizar = todosOsProdutos.find(p => p.nome === nome);
                produtoParaAtualizar.nome = produto.nome;
                produtoParaAtualizar.url = produto.url;
                produtoParaAtualizar.preco = produto.preco;
                produtoParaAtualizar.descricao = produto.descricao;
                produtoParaAtualizar.categoria = produto.categoria;
                Produto.setLocalStorage(todosOsProdutos);
            }
        }
    }
}