import React, { Component } from 'react';
import './section1.css';
import Landpage_left_side from './../landpage/landpage_left_side/landpage_left_side';
import Section1_right from './../section1/section1_right';

class Section1 extends Component {
  constructor(props){
    super(props);
        this.state={
          animate:null
        }
        console.log(props)
  }

  componentDidMount(){ 

    
   }
  render() { 
      
    return (

        <div className="section1">
            {/* <div className="section1_overlay"></div> */}
              {/* <Landpage_left_side />     */}
              <Section1_right   animate={this.state.animate}/>
        </div>
    );
  }
}

export default Section1;