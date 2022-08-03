import { Produto } from '../entities/Produto'
import {  dataSourceSQLite } from "../configorm"

interface IProduto{
   id: string
   cod: string
   nome: string
   descricao: string
   preco: number
   urlImagem: string
}


class ProdutoRepository{
   
   /*getProdutoAll(){
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
   }*/

   async getProdutoAll(){
      const produtos = await dataSourceSQLite
         .getRepository(Produto)
         .find()


      return produtos
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

   update(produto: IProduto){
      return "Produto Atualizado" 
   }

   remove(produto: IProduto){
      return "Produto Removido" 
   }

}

export { ProdutoRepository }