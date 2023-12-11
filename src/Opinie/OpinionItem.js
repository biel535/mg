import React from 'react';
import { Link } from 'react-router-dom';

function OpinionItem(props) {
  return (
    <>
      <li className='opinions__item'>
        <Link className='opinions__item__link' to={props.path}>
          <div className='opinions__item__text'
            >{props.text}</div>
         
          <div className='opinions__item__info'>
            <h5 className='opinions__item__author'>{props.author}</h5>
          </div>
        </Link>
      </li>
    </>
  );
}

export default OpinionItem;