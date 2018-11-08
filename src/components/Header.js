import React from 'react';

const Header = ()=>(
    <header id='header'>
    <nav className="s1-navbar">
    
    <a href="#">WebSiteName</a>
    
    <div id="pageList">
    <ul id="header-ul">
      <li id='header-li'><a href="#">Home</a></li>
      <li id='header-li'><a href="#">Page 1</a></li>
      <li id='header-li'><a href="#">Page 2</a></li>
      <li id='header-li'><a href="#">Page 3</a></li>
    </ul>
    </div>
    </nav>
    </header>
);

export default Header;