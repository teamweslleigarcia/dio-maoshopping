/*import IProduto from '../Models/IProduto'
import http from './http-common' */

import api from "./http-common"

class ProdutoService{

    /*getAll(){
        return http.get<Array<IProduto>>("/produtos")
    }

    getById(id:string){
        return http.get<IProduto>(`/produtos/${id}`)
    }

    findByName(name:string){
        return http.get<Array<IProduto>>(`/produtos/${name}`)
    }

    create(data:IProduto){
        return http.post<IProduto>("/produtos", data)
    }

    update(data:IProduto, id:string){
        return http.put<any>(`/produtos/${id}`, data)
    }

    delete(id:string){
        return http.delete<any>(`/produtos/${id}`)
    }

    deleteAll(){
        return http.delete<any>(`/produtos`)
    } */

    async getAllProdutos(){
        try{
            return await api.get('/produtos')
                .then((response)=>{
                    return response.data
                })
        }catch(error){
            console.log(error)
        }
        
    }

    async getProductById(uuid:string){
        try{
            return await api.get(`/produtos/${uuid}`)
                    .then((response)=>{
                        return response.data
        })
        }catch(error){
            console.log(error)
        }
    }

}

export  {ProdutoService}