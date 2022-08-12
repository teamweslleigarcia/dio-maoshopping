import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import IProduto from "../../Models/IProduto.interface";
import { RootState } from "../store";

// fazer logica pra buscar no banco so produtos e preencher no array

const initialState : IProduto[] = [
    {
        id : "",
        cod : "",
        nome: "",
        descricao : "",
        preco : 0,
        urlImagem : "",
    }
]

const productsSlice = createSlice(
    {
        name: "products",
        initialState,
        reducers:{
            addProduct: (state, action: PayloadAction<IProduto>)=>{
                return [action.payload, ...state]
            }   
        }
    }
)


export const { addProduct } = productsSlice.actions

export const getProductsSelector = (state: RootState) => state.products

export default productsSlice.reducer