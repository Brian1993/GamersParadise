import React, { Component } from 'react';
import './B_btn02.css';

class B_btn02 extends Component {
  constructor(props){
    super(props);
  }   
  
  render() {  

    return (
        <div className="B_btn02">{this.props.text}</div>
    )
  }
}

export default B_btn02 ;