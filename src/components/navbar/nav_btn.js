import React, { Component } from 'react';
import './nav_btn.css';

class Nav_btn extends Component {
  constructor(props){
    super(props);
    
  }  
 
  render() {  
    return (
                     
        <div className="nav_btn_wrap">
                <div className="outter"></div>  
                <div className="hamburger">
                        <div className="bar bar1"></div>
                        <div className="bar bar2"></div>
                        <div className="bar bar3"></div>
                </div>
        </div>

        )
  }
}

export default Nav_btn;