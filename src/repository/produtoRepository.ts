import { Produto } from '../entities/Produto'
import { dataSource } from "../database/database"
import produtos from '../database/fakeDatabase'

interface IProduto{
   id: string
   cod: string
   nome: string
   descricao: string
   preco: number
   urlImagem: string
}

class ProdutoRepository{
   
   getProdutoAll(){
      return produtos
   }
   //{id, cod, nome, descricao, preco, urlImagem}
   create(produto: IProduto){
      const newProduto = [
         {
            id : produto.id,
            cod : produto.cod, 
            nome : produto.nome, 
            descricao : produto.descricao, 
            preco: produto.preco,
            urlImagem: produto.urlImagem
         }
      ]
      

      produtos.push(newProduto)
   }

   /*getProdutoAll(){
      const produtos = dataSource.getRepository(Produto)
         .createQueryBuilder('produtos')
         .select()
         .getMany()
      return produtos
   }*/

   /*create({id, cod, nome, descricao, preco}: IProduto){
      const produto = dataSource
         .createQueryBuilder()
         .insert()
         .into(Produto)
         .values([
            {
               id: id,
               cod : cod, 
               nome : nome, 
               descricao : descricao, 
               preco: preco,
               urlImagem: urlImagem
            }
      ])
      .execute()
         
      return produto
   }*/

}

export { ProdutoRepository }