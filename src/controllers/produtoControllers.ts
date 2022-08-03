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

    getProdutoById(req: Request, res: Response, next: NextFunction){
        return res.status(StatusCodes.OK).json({ message : 'PRODUTO POR ID'})
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
        return res.status(StatusCodes.OK).json({ message : 'PRODUTO ATUALIZADO'})
    }

    removeProduto(req: Request, res: Response, next: NextFunction){
        return res.status(StatusCodes.OK).json({ message : 'PRODUTO REMOVIDO'})
    }
}

export { ProdutoControllers }