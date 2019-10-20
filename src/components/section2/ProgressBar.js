import React, { Component } from 'react'

export default class ProgressBar extends React.Component {
    
    render(){
return (
    <div className="progressbar-progress">
    <span>{this.props.skill}</span>
    <div className="complete-container">
    <div className="progressbar-complete" style={this.props.width}></div>
    <span>{this.props.percentage}</span>
     </div>
     </div>
        )}
}