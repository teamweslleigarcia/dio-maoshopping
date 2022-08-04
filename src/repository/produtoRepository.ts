import { Produto } from '../entities/Produto'
import {  dataSourceSQLite } from "../configorm"
import { UpdateResult} from 'typeorm'
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
      try{
         const produtoId = await dataSourceSQLite.getRepository(Produto)
            .findOneBy(
               {
                  id: uuid
               }
            )

         const produto  =  Promise.resolve(produtoId)

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

   async update(produto: Produto):Promise<void>{

      const {id, cod, nome, descricao, preco, urlImagem} = produto
      console.log("id do Repository", id)
      const produtoId = await dataSourceSQLite
      .createQueryBuilder()
      .update(Produto)
      .set(
         {
            cod : cod, 
            nome : nome, 
            descricao : descricao, 
            preco: preco,
            urlImagem: urlImagem
         }
      )
      .where("id=:id", { id: id })
      .execute()
      
      console.log("ProdutoId Repository", produtoId)

      const produtoUpdate  = await Promise.resolve(produtoId)
      console.log("produtoUpdate Repository", produtoUpdate)
   }

   remove(produto: IProduto){
      return "Produto Removido" 
   }

}

export { ProdutoRepository }