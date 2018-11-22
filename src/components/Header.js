import React from 'react';

const Header = ()=>(
    <header id='header'>
    {/* small device bar */}
    <div id='burger'>
     <div></div>
     <div></div>
     <div></div>
    </div>
    <nav className="s1-navbar">
    

    
    <a id='head-anc' href='#'>WAC<span>K<span>evin</span></span><span>Y<span>oung</span></span></a>
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