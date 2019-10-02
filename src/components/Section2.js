import React from "react";
import ContentBox from './section2/ContentBox';
import {Content} from './section2/Content';
import {Content2} from './section2/Content';
import {ProgressBar} from './section2/ProgressBar';


class Section2 extends React.Component{

   proGress() {
    console.log(this.refs);
    var prg = this.refs.progressbarComplete;
    var percent = this.refs.percentCount;
    var counter = 3;
    var progress = 3;
    var id = setInterval(frame,50);

    function frame(){
        if(progress == 99 && counter == 99){
            prg.style.width="20%";
            percent.innerHTML="Not Enough";
            clearInterval(id);
        } else {
            progress += 3;
            counter += 3;
            prg.style.width = progress + '%';
            percent.innerHTML= counter + '%';
        }
    }
}


  render(){
    var prg = document.getElementsByClassName('progressbar-complete');
    console.log(this.refs);
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
            <span onClick={this.proGress.bind(this)}>HTML</span>
          <div className="complete-container">
            <div ref="progressbarComplete" className="progressbar-complete" style={{width:"60%"}}></div>
            <span ref="percentCount" id="percentCount">60%</span>
           </div>
           </div>
           <div className="progressbar-progress">
           <span>CSS</span>
          <div className="complete-container">
           <div ref="progressbarComplete" className="progressbar-complete" style={{width:"70%"}}></div>
           <span ref="percentCount">70%</span>
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
