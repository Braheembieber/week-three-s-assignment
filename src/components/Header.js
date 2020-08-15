import React from 'react';
import './Header.css';

const Header =()=>{
    return(
<div>
    {/*.NAV.BAR*/}
    <nav class="navbar">
      <div class="container">
        <a href="#">Hulk</a>
        {/*.<!--.Currently.Active.-->.*/}
        <a href="#" class="logo is-active">Mavel</a>
        <a href="#">Venom</a>
      </div>
    </nav>

</div>

    )
}

export default Header;