import { Router } from 'express'
import { ProdutoControllers } from '../controllers/produtoControllers'

const router = Router()

const produtoControllers = new ProdutoControllers()

router.get('/produtos', produtoControllers.getProdutoAll)
router.get('/produtos/1', produtoControllers.getProdutoById)
router.get('/produtos/produto1', produtoControllers.getProdutoByName)
router.post('/produtos', produtoControllers.createNewProduto)
router.put('/produtos/:1', produtoControllers.updateProduto)
router.delete('/produtos/1', produtoControllers.removeProduto)

export default  router