import {Request, Response, NextFunction} from 'express'
import { StatusCodes } from 'http-status-codes'
import { Produto } from '../entities/Produto'
import {ProdutoService} from '../services/produtoServices'
import  ProdutoModel  from '../models/produtoModel'
class ProdutoControllers{
    async getProdutoAll(req: Request, res: Response, next: NextFunction){
        const produtoService = new ProdutoService()

        const produtos = await produtoService.buscarProdutos()

        return res.status(StatusCodes.OK).json(produtos)
    }

    async getProdutoById(req: Request<{uuid: string}>, res: Response, next: NextFunction){
        
        const uuid = req.params.uuid

        const produtoService = new ProdutoService()

        const produtoId  = await produtoService.buscarProdutosById(uuid)
      
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

    async updateProduto(req: Request<{uuid: string}>, res: Response, next: NextFunction){
        const produtoService = new ProdutoService()

        const uuid = req.params.uuid

        const produtoId : ProdutoModel = req.body
        produtoId.id = uuid

        //maneira certa const produto : Produto = await produtoService.buscarProdutosById(produtoId.id)
        await produtoService.buscarProdutosById(produtoId.id)

        const updateProduto = await produtoService.atualizarProduto(produtoId)
  
        return res.status(StatusCodes.OK).json(updateProduto)
    }

    removeProduto(req: Request<{uuid: string}>, res: Response, next: NextFunction){

        const produtoService = new ProdutoService()

        const uuid = req.params.uuid

        produtoService.excluirProduto(uuid)

        return res.status(StatusCodes.OK).json()
    }
}

export { ProdutoControllers }