import React from 'react'
import mealsImage from '../../assets/HeaderImage6.jpg'
import classes from './Header.module.css';
import HeaderCartButton from './HeaderCartButton';

function Header(props) {
  return (
    <>
      <header className={classes.header}>
          <h1>Meals</h1>
          <HeaderCartButton onClick={props.onShowCart}/>
      </header>
      <div className={classes['main-image']}>
          <img src={mealsImage} alt='Header'></img>
      </div>
    </>
  )
}

export default Header