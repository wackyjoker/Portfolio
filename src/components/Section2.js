import React from "react";
import ReactDOM from "react-dom";
import ContentBox from './section2/ContentBox';
import {Content} from './section2/Content';
import {Content2} from './section2/Content';
import ProgressBar from './section2/ProgressBar';
import{Progress} from './section2/Progress';


class Section2 extends React.Component{
  constructor(props) {
    super(props);

    this.progressbarComplete = React.createRef();
    this.percentCount = React.createRef();
    this.list = React.createRef();
    this.proGress= this.proGress.bind(this);
    this._handleScroll=this._handleScroll.bind(this);
    this.state={scrolled:false}; 
  }
  

  componentDidMount(){
    console.log("--------------- :",this.refs);
    console.log(this.progressbarComplete.current.style.width);
    const list = ReactDOM.findDOMNode(this.list.current);
    window.addEventListener("scroll",this._handleScroll); 
  }
  componentWillUnmount() {
    const list = ReactDOM.findDOMNode(this.list.current);
    window.removeEventListener('scroll', this._handleScroll);
    this.state.scrolled?this.proGress:console.log("nothing");
}

_handleScroll() {
  let isHere= window.scrollY >= 1000;
    console.log("element.offsetTop value  is :"+this.list.current.offsetTop+"-----");
    isHere?this.setState({scrolled:true},this.proGress):this.setState({scrolled:false});
    
}

   proGress(){
    
    let prg = this.progressbarComplete;
    let percent = this.percentCount;
    let counter = 3;
    let progress = 3;
    console.log(prg.current.style.width);
    let id = setInterval(frame,50);
      
    function frame(){
        if(progress == 99 && counter == 99){
            prg.current.style.width="20%";
            percent.current.innerHTML="Not Enough";
            clearInterval(id);
        } else {   
            progress += 3;
            counter += 3;
            prg.current.style.width = progress + '%';
            percent.current.innerHTML= counter + '%';
        }
    }
    window.removeEventListener("scroll",this._handleScroll);
}
  

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
    );
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
     );

    const ProgressBars = Progress.map((progress,index)=>(
      <ProgressBar
        key={index} 
        skill={progress.skill}
        percentage={progress.percentage}
        width={progress.width}
      />
    ));

  
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
          {ProgressBars}
           <div ref={this.list} className="progressbar-progress" style={{cursor:"pointer"}}>
           <span>CSS</span>
          <div className="complete-container">
           <div ref={this.progressbarComplete} className="progressbar-complete" style={{width:"70%"}}></div>
           <span ref={this.percentCount}>70%</span>
           </div>
           </div>
           <div ref={this.list} className="progressbar-progress" style={{cursor:"pointer"}}>
           <span>SCSS</span>
          <div className="complete-container">
           <div ref={this.progressbarComplete} className="progressbar-complete" style={{width:"75%"}}></div>
           <span ref={this.percentCount}>75%</span>
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
