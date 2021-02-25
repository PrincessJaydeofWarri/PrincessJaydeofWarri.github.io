import React from 'react'
import {Link} from 'react-router-dom'

function MainItem(props) {
  return (
    <>
    <li className='main__item'>
      <Link className='main__item__link' to={props.path}>
        <figure className='main__item__pic-wrap' data-category={props.label}>
          <img src={require('./images/dhjwp.png')} alt="Python computer" className='main__item__img' id="calculator"/>
        </figure>
        <div className='main__item__info'>
          <h5 className='main__item__text'>{props.text}</h5>
          </div>
        </Link>
      </li>

    </>
  )
}

export default MainItem
