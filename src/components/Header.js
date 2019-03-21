import React from 'react';
class Header extends React.Component{
    handleToggle= ()=> {
      $('.sidebar-mobile').toggleClass("sidebar-mobile-visible");
    } 
  render(){
  return(<header id='header'>
    {/* small device bar */}
    <div className='sidebar-mobile'>
    <ul id="header-ul-mobile">
      <li><a href="#">Home</a></li>
      <li><a href="#">Page 1</a></li>
      <li><a href="#">Page 2</a></li>
      <li><a href="#">Page 3</a></li>
    </ul>
    <div id='burger-btn' onClick={this.handleToggle} >
      <span></span>
      <span></span>
      <span></span>
    </div>
    
    </div>

    {/* normal header*/}
    <nav className="s1-navbar">
    <a id='head-anc' href='#'>WAC<span>K<span>evin</span></span><span>Y<span>oung</span></span></a>
    <div id="pageList">
    <ul id="header-ul">
      <li><a href="#">Home</a></li>
      <li><a href="#">Page 1</a></li>
      <li><a href="#">Page 2</a></li>
      <li><a href="#">Page 3</a></li>
    </ul>
    </div>
    
    </nav>
    </header>
  );
  };
};

export default Header;