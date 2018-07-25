import React, { Component } from 'react';
import './btn.css';

class Btn extends Component {
  constructor(props){
    super(props);
      
  }   
  render() {  
      
    return (
        <div className="btn_wrap">
              <a ><span></span><span></span>{this.props.btnName}</a> 
       </div>
    )
  }
}

export default Btn ;