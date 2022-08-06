import axios from 'axios'
import { ProdutoModel } from '../Models/ProdutoModel'

class ProdutoService{

    async getAllProdutos(){
        try{
            const response = await axios.get('http://localhost:3000/produtos')
            console.log(response)
        }catch(error){
            console.log(error)
        }
        
    }

    getProduto(){
        const produto : ProdutoModel = {
            id :  "92208322-6a0f-43c9-837e-6485dd83f769",
            nome : "Tênis Asics Gel Equation",
            descricao : "11 Masculino",
            preco : 242.99,
            urlImagem : "https://github.com/teamweslleigarcia/dio-maoshopping/blob/main/produtos/esportivos/T%C3%AAnis%20Asics%20Gel%20Equation%2011%20Masculino-2FV-8435-038.jpg?raw=true"
        }

        return produto
    }
}

export  {ProdutoService}