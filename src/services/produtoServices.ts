
import { ProdutoRepository } from '../repository/produtoRepository'

class ProdutoService{
    
    buscarProdutos(){
        const produtoRepository = new ProdutoRepository()

        const produtos = produtoRepository.getProdutoAll()

        return produtos
    }

    criarProdutos(id: string, cod: string, nome: string, descricao: string, preco: number, urlImagem: string){
        const produtoRepository = new ProdutoRepository()


        const produto = produtoRepository.create({id, cod, nome, descricao, preco, urlImagem})

        return produto

    }
}

export { ProdutoService }