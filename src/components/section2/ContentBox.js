import React, { Component } from 'react'

export default class ContentBox extends React.Component {
    
    render() {
        return (
          <div className={this.props.box}>
          <svg className={this.props.svg} />
          {this.props.type}
          <p>
            {this.props.description}
          </p>
        </div>
            
        )
    }
}
