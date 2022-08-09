import React from 'react'
import { useParams } from 'react-router-dom';
import ComponentProductItem from '../../components/ComponentProductItem';



const ProdutoItem = () => {

    let params  = useParams();
    console.log("uuid de Params:", params);

  return (  
    <ComponentProductItem uuid = {`${params.uuid}`} />
  )
}

export default ProdutoItem