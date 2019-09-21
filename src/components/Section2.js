import React from "react";
import ContentBox from './section2/ContentBox';
import {Content} from './section2/Content';
import {Content2} from './section2/Content';
import {Progress} from './section2/Progress';


class Section2 extends React.Component{

  render(){
    const Contents=Content.map((content,index)=>
            (
         <ContentBox 
         key={index} 
         box={content.box}
         svg={content.svg}
         type={content.type}
         description={content.description}
         />
        )
    )
    const Contents2 = Content2.map((content,index)=>
    (
        <ContentBox 
        key={index} 
        box={content.box}
        svg={content.svg}
        type={content.type}
        description={content.description}
        />
        )
     )
    
return(
  <section id="section2">
    <div className="s2-container">
      <h2>ABOUT</h2>
      <hr />
      <div className="svg-wrap">
      <div className="s2-wrap">
      {Contents}
      </div>
      <div className="s2-wrap">
      {Contents2}
      </div>
    </div>

    <div className="wacky">
    <div className='portrait'>
    <img  />
    <h2>Who's wacky?</h2>
    <p>I'm the Full-Stack Developer/UI Desginer mainly grind on Front-End Development. 
    I have serious passion for UI effects, animations and creating intuitive, dynamic user experiences. </p>
    </div>
    <div className="progressBar">
            <div className="progressbar-progress">
            <span>HTML</span>
          <div className="complete-container">
            <div className="progressbar-complete" style={{width:"60%"}}></div>
            <span>60%</span>
           </div>
           </div>
           <div className="progressbar-progress">
           <span>CSS</span>
          <div className="complete-container">
           <div className="progressbar-complete" style={{width:"70%"}}></div>
           <span>70%</span>
           </div>
           </div>
           <div className="progressbar-progress">
           <span>JS</span>
          <div className="complete-container">
           <div className="progressbar-complete" style={{width:"50%"}}></div>
           <span>50%</span>
           </div>
           </div>
           <div className="progressbar-progress">
           <span>React</span>
           <div className="complete-container">
           <div className="progressbar-complete" style={{width:"50%"}}></div>
           <span>50%</span>
           </div>
          </div>

  </div>
  </div>
  </div>
    
  </section>
);
              }
}
export default Section2;
