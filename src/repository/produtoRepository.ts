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

   create({id, cod, nome, descricao, preco, urlImagem}: IProduto){
      const produto = [
         {
            id : id,
            cod : cod, 
            nome : nome, 
            descricao : descricao, 
            preco: preco,
            urlImagem: urlImagem
         }
      ]
      

      produtos.push(produto)
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