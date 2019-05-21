import React from 'react';
import {Link} from 'react-router-dom';

const Footer = ()=>(

<footer>
<div id='footer-container'>

<div id='ftRights'>
<p>©2018 <span>wacKY Joker</span> All rights Served.</p>
<div className='icons'>

<Link to="https://github.com/wackyjoker/Portfolio"><svg className="icon facebook"/></Link>
<a href='#'><svg className='icon github'/></a>
<a href='#'><svg className='icon twitter'/></a>
<a href='#'><svg className='icon linkedin'/></a>

</div>
</div>
</div>
</footer>

)


export default Footer;