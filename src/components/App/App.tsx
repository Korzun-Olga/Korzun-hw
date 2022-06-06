import React from 'react';
import './App.css';
import Button from '../Button/Button';
import BurgerCrossIcon from '../icons/burger_cross.png'

/*  <img src={buttonIcon} alt='button-icon'/>
import buttonIcon from './icon.png'
*/


const App = () => {
  return (
    <div className="App">
<header className='AppHeader'>
    <div className='HeaderWhite'>
<div className='HeaderWhiteBurger'></div>
        <p className='HeaderWhiteText'> Username</p>
        </div>
    <div className='HeaderBlue'>
        <img className='HeaderBlueIcon' src={BurgerCrossIcon} alt='burger-icon'></img>
<ul className='HeaderNavigationList'>
      <li className='HeaderNavigatonItem'>All posts</li>
        <li className='HeaderNavigatonItem'>My posts</li>
        <li className='HeaderNavigatonItem'>Add posts</li>
</ul>
            </div>
</header>
<main className='AppMain'>
    <h1 className='MainHeader'>
        Make your <br/>Blog <span className='SpanMainHeader'>Online</span>
    </h1>
    <p className='MainText'> Lorem ipsum is simply dummy text of the printing and typesetting induxtry.</p>
    <Button title='Learn More'/>
</main>
       </div>
  );
}
/*<Button title='UserName' disabled={false} onClickHandler = {onClickHandler}/>*/
export default App;
