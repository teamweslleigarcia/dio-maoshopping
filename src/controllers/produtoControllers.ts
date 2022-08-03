import {Request, Response, NextFunction} from 'express'
import { StatusCodes } from 'http-status-codes'
import { Produto } from '../entities/Produto'
import {ProdutoService} from '../services/produtoServices'
class ProdutoControllers{
    async getProdutoAll(req: Request, res: Response, next: NextFunction){
        const produtoService = new ProdutoService()

        const produtos = await produtoService.buscarProdutos()

        return res.status(StatusCodes.OK).json(produtos)
    }

    async getProdutoById(req: Request<{uuid: string}>, res: Response, next: NextFunction){
        
        const uuid = req.params.uuid
        console.log("req.params.uuid: ", uuid)
        const produtoService = new ProdutoService()

        const produtoId  = await produtoService.buscarProdutosById(uuid)
        console.log("Controllers produtoId: ", produtoId)
      
        const produto  = await Promise.resolve(produtoId)

        return res.status(StatusCodes.OK).json(produto)
    }

    getProdutoByName(req: Request, res: Response, next: NextFunction){
        return res.status(StatusCodes.OK).json({ message : 'PRODUTOS POR NOME'})
    }

    createNewProduto(req: Request, res: Response, next: NextFunction){
        const produtoService = new ProdutoService()
        const produto : Produto = req.body
        const uuid = produtoService.criarProdutos(produto)
        return res.status(StatusCodes.CREATED).json(uuid)
    }

    updateProduto(req: Request, res: Response, next: NextFunction){
        const produtoService = new ProdutoService()

        const produto : Produto = req.body

        const uuid =produtoService.atualizarProduto(produto)

        return res.status(StatusCodes.OK).json(uuid)
    }

    removeProduto(req: Request, res: Response, next: NextFunction){
        return res.status(StatusCodes.OK).json({ message : 'PRODUTO REMOVIDO'})
    }
}

export { ProdutoControllers }