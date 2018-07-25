import React, { Component } from 'react';
import './B_btn01.css';

class B_btn01 extends Component {
  constructor(props){
    super(props);
  }   
  
  render() {  

    return (
        <div className="B_btn01">{this.props.text}</div>
    )
  }
}

export default B_btn01 ;