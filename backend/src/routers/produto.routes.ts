import { Router } from 'express'
import { ProdutoControllers } from '../controllers/produtoControllers'

const router = Router()

const produtoControllers = new ProdutoControllers()

router.get('/', produtoControllers.getProdutoAll)
router.get('/:uuid', produtoControllers.getProdutoById)
router.get('/:nome=?', produtoControllers.getProdutoByName)
router.post('/', produtoControllers.createNewProduto)
router.put('/:uuid', produtoControllers.updateProduto)
router.delete('/:uuid', produtoControllers.removeProduto)

export default  router