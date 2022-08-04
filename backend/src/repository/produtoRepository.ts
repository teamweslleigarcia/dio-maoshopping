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

//FUNCOES
/* 
getAll -> buscar todos
getById -> buscar por uuid
getByName -> buscar por nome do produto
save -> criar produto 
update -> atualizar produto
remove -> excluir produto
*/

class ProdutoRepository{

   async getProdutoAll(){
      const produtos = await dataSourceSQLite
         .getRepository(Produto)
         .find()


      return produtos
   }

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
      
      //maneira certa const produtoUpdate  = await Promise.resolve(produtoId)
      await Promise.resolve(produtoId)
   }

   async remove(uuid : string): Promise<void>{
      
      const removeDataSource = await dataSourceSQLite
         .createQueryBuilder()
         .delete()
         .from(Produto)
         .where("id=:id", { id: uuid })
         .execute()

         await Promise.resolve(removeDataSource)
   }

}

export { ProdutoRepository }