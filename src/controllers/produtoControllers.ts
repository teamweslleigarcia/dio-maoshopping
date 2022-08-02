import {Request, Response, NextFunction} from 'express'
import { StatusCodes } from 'http-status-codes'

import {ProdutoService} from '../services/produtoServices'

class ProdutoControllers{
    getProdutoAll(req: Request, res: Response, next: NextFunction){
        const produtoService = new ProdutoService()

        const produtos = produtoService.buscarProdutos()

        return res.status(StatusCodes.OK).json(produtos)
    }

    getProdutoById(req: Request, res: Response, next: NextFunction){
        return res.status(StatusCodes.OK).json({ message : 'PRODUTO POR ID'})
    }

    getProdutoByName(req: Request, res: Response, next: NextFunction){
        return res.status(StatusCodes.OK).json({ message : 'PRODUTOS POR NOME'})
    }

    createNewProduto(req: Request, res: Response, next: NextFunction){
        return res.status(StatusCodes.CREATED).json({ message : 'CREATE PRODUTO'})
    }

    updateProduto(req: Request, res: Response, next: NextFunction){
        return res.status(StatusCodes.OK).json({ message : 'PRODUTO ATUALIZADO'})
    }

    removeProduto(req: Request, res: Response, next: NextFunction){
        return res.status(StatusCodes.OK).json({ message : 'PRODUTO REMOVIDO'})
    }
}

export { ProdutoControllers }