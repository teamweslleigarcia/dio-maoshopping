import { Produto } from '../entities/Produto'
import { ProdutoRepository } from '../repository/produtoRepository'
class ProdutoService{
    
    async buscarProdutos(){
        const produtoRepository = new ProdutoRepository()

        const produtos = await produtoRepository.getProdutoAll()

        return produtos
    }

    async buscarProdutosById(uuid: string): Promise<Produto | null>{
        const produtoRepository = new ProdutoRepository()

        const produtoId = await produtoRepository.getProdutoById(uuid)

        const produto  = await Promise.resolve(produtoId)

        return produto
    }

    async criarProdutos(produto: Produto){
        const produtoRepository = new ProdutoRepository()

        const newProduto : Produto = produto
        
        const produtoNovo = await produtoRepository.create(newProduto)

        return produtoNovo

    }

    async atualizarProduto(produto: Produto){
        const produtoRepository = new ProdutoRepository()

        //maneira certa const updateProduto  = await  produtoRepository.update(produto)
        await  produtoRepository.update(produto)

    }

    excluirProduto(uuid: string){

        const produtoRepository = new ProdutoRepository()

        produtoRepository.remove(uuid)
    }   

}

export { ProdutoService }