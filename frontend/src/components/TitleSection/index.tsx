import React , { FunctionComponent } from 'react';
import './titleSection.scss'

type TitleProps = {
  titulo : string
}

const TitleSection: FunctionComponent<TitleProps> = ({titulo}: TitleProps) =>{
  return (
    <div className='container-title-section'>
      <div className='title'>
        <h1>{titulo}</h1>
      </div>
    </div>
  )
}

export default TitleSection