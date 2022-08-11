import React  from 'react';
import './titleSection.scss'

type Props = {
  titulo : string
}

const TitleSection = ({titulo}: Props) =>{
  return (
    <div className='container-title-section'>
      <div className='title'>
        <h1>{titulo}</h1>
      </div>
    </div>
  )
}

export default TitleSection