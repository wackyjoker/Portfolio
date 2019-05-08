import React from 'react';

const Section2 =()=>(
    
    
    <section id="section2">
    <div className="s2-container">
    <h2 >ABOUT</h2>
    <hr />
         <div className='svg-wrap'>

           <div className='box1 content-box'> <svg className="icon fast" />
           Fast
           <p>Fast load times and lag free interaction, my highest priority.</p>
           </div>

           <div className='box2 content-box'> 
            <svg className="icon responsive" />
            Responsive
            <p>
            My layouts will work on any device, big or small. </p>
            </div>

            
            <div className='box3 content-box'>
            <svg className="icon dynamic" />
            Dynamic
            <p>Websites don't have to be static, I love making pages come to life.
            </p></div>
            <svg className="icon" />
            
         </div>
    </div>
    
    
</section>
    
    
);

export default Section2;