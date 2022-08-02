import { Produto } from '../entities/Produto'
import { ProdutoRepository } from '../repository/produtoRepository'

class ProdutoService{
    
    buscarProdutos(){
        const produtoRepository = new ProdutoRepository()

        const produtos = produtoRepository.getProdutoAll()

        return produtos
    }
    //id: string, cod: string, nome: string, descricao: string, preco: number, urlImagem: string
    criarProdutos(produto: Produto){
        const produtoRepository = new ProdutoRepository()

        const newProduto : Produto = produto

        //{id, cod, nome, descricao, preco, urlImagem}
       const produtoNovo = produtoRepository.create(newProduto)

        return produtoNovo

    }
}

export { ProdutoService }