import { configureStore } from '@reduxjs/toolkit'
import products from '../Redux/slices/products.slice'

const store = configureStore({
reducer : {
    products
}

})

// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<typeof store.getState>
// Inferred type: { produtos: ProdutosState }
export type AppDispatch = typeof store.dispatch

export default store