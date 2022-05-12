import React, { Fragment } from 'react';
import mealsImg from './../../assets/meals.jpeg';
import "./Header.css";
import HeaderCartButton from './HeaderCartButton';

const Header=(props)=> {
    return ( 
        <Fragment>
            <header className="header"> 
                <h1>React Meals </h1>
                <HeaderCartButton showCartHandler={props.showCart}/>
            </header>
            <div className='main-image'>
                <img src={mealsImg} alt='A table fuul of food !'/>
            </div>
        </Fragment>
     );
}

export default Header;