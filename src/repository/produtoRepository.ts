import { Produto } from '../entities/Produto'
import {  dataSourceSQLite } from "../configorm"
import { QueryBuilder } from 'typeorm'
import { DatabaseError } from './../errors/database.error';


interface IProduto{
   id: string
   cod: string
   nome: string
   descricao: string
   preco: number
   urlImagem: string
}


class ProdutoRepository{

   async getProdutoAll(){
      const produtos = await dataSourceSQLite
         .getRepository(Produto)
         .find()


      return produtos
   }
   //db.query<User>(query, [uuid]);
   async getProdutoById(uuid: string): Promise<Produto | null>{
      console.log("uuid Repositoty", uuid)
      try{
         const produtoId = await dataSourceSQLite.getRepository(Produto)
            .findOneBy(
               {
                  id: uuid
               }
            )
         console.log("produtoId Repositoty", produtoId)
        
         //console.log("produto Repositoty", produto)

         const produto  =  Promise.resolve(produtoId)
         //const produto = await <Produto>

         console.log('produtoId Repository', produto)

         return produto
      }catch(error){
         throw new DatabaseError({ log: "erro ao buscar produto por id", data: error})
      }   
      
   }

   create(produto : IProduto) {

      const newProduto = dataSourceSQLite
         .createQueryBuilder()
         .insert()
         .into(Produto)
         .values([
            {
               id: produto.id,
               cod : produto.cod, 
               nome : produto.nome, 
               descricao : produto.descricao, 
               preco: produto.preco,
               urlImagem: produto.urlImagem
            }
      ])
      .execute()
         
      return newProduto
   }

   async update(produto: IProduto){

      const updateProduto = await dataSourceSQLite
      .createQueryBuilder()
      .update(Produto)
      .set(
         {
            cod : produto.cod, 
            nome : produto.nome, 
            descricao : produto.descricao, 
            preco: produto.preco,
            urlImagem: produto.urlImagem
         }
      )
      .where("produto.id = id")
      .execute()

      return updateProduto 
   }

   remove(produto: IProduto){
      return "Produto Removido" 
   }

}

export { ProdutoRepository }