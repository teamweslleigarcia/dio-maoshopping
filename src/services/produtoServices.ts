import { Produto } from '../entities/Produto'
import { ProdutoRepository } from '../repository/produtoRepository'

class ProdutoService{
    
    async buscarProdutos(){
        const produtoRepository = new ProdutoRepository()

        const produtos = await produtoRepository.getProdutoAll()

        return produtos
    }

    async buscarProdutosById(uuid: string): Promise<Produto | null>{
        console.log("service uuid: ", uuid)
        const produtoRepository = new ProdutoRepository()

        const produtoId = await produtoRepository.getProdutoById(uuid)
        console.log("produtoId: ", produtoId)

        const produto  = await Promise.resolve(produtoId)

        return produto
    }

    async criarProdutos(produto: Produto){
        const produtoRepository = new ProdutoRepository()

        const newProduto : Produto = produto
        
        const produtoNovo = await produtoRepository.create(newProduto)

        return produtoNovo

    }

    async atualizarProduto(produto : Produto){
        const produtoRepository = new ProdutoRepository()

        const updateProduto : Produto = produto

        const produtoAtualizado = await produtoRepository.update(updateProduto)

        return produtoAtualizado

    }

}

export { ProdutoService }