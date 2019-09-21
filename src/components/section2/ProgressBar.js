import React, { Component } from 'react'

export default class ProgressBar extends React.Component {
    
    render(){
        <div className={"progressbar-progress"}>
    <span>HTML</span>
  <div className="complete-container">
    <div className="progressbar-complete" style={{width:"60%"}}></div>
    <span>60%</span>
   </div>
   </div>
}
}