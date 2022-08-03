import { Produto } from '../entities/Produto'
import { ProdutoRepository } from '../repository/produtoRepository'

class ProdutoService{
    
    async buscarProdutos(){
        const produtoRepository = new ProdutoRepository()

        const produtos = await produtoRepository.getProdutoAll()

        return produtos
    }
    //id: string, cod: string, nome: string, descricao: string, preco: number, urlImagem: string
    async criarProdutos(produto: Produto){
        const produtoRepository = new ProdutoRepository()

        const newProduto : Produto = produto

        //{id, cod, nome, descricao, preco, urlImagem}
       const produtoNovo = await produtoRepository.create(newProduto)

        return produtoNovo

    }
}

export { ProdutoService }