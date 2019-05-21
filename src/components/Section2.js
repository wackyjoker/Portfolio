import React from "react";

const Section2 = () => (
  <section id="section2">
    <div className="s2-container">
      <h2>ABOUT</h2>
      <hr />
      <div className="svg-wrap">
          <div className="s2-wrap">
                <div className="box1 content-box">
                  <svg className="icon fast" />
                  Fast
                  <p>
                    Fast load times and lag free interaction, my highest priority.
                  </p>
                </div>
                <div className="box2 content-box">
                  <svg className="icon responsive" />
                  Responsive
                  <p>My layouts will work on any device, big or small. </p>
                </div>
              </div>
        <div className="s2-wrap">
              <div className="box3 content-box">
                <svg className="icon dynamic" />
                Dynamic
                <p>
                  Websites don't have to be static, I love making pages come to life.
                </p>
              </div>
            <div className="box4 content-box">
                <svg className="icon intuitive" />
                Intuitive
                <p>
                  Strong preference for easy to use, intuitive UX/UI.
                </p>
              </div>
              <svg className="icon" />
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
      <div></div>
      <div></div>
      <div></div>
      <div></div>
      <div></div>
      <div></div>
    </div>
    </div>
  </div>
    
  </section>
);

export default Section2;
