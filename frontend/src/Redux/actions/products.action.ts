type Item ={
    item : number
}

export  function addToCart(item:Item){

    return{
        type: "ADD",
        payload: item
    }
}