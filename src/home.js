import React, { Component } from 'react';
import './home.scss';
import Landpage from './components/landpage/landpage';
import Section1 from './components/section1/section1';
import Navbar from './components/navbar/navbar';
import {TweenMax , Power2,TimelineLite ,ease ,SlowMo ,Power3} from 'gsap';
import Circle from './circle';

let tl =new TimelineLite;
class Home extends Component {




  componentDidMount(){
    let tl_home = new TimelineLite ;
    // tl.timeScale(2)
    // TweenMax.set(".landPageSvg" ,{rotationX:180})
  //   tl_home
    
  //  .from(".landPageSvg ",.8 ,{y:-300 ,opacity:0 ,rotationX:90 ,ease: SlowMo.ease.config(0.7, 0.7, false) })
  //   .to(".landPageSvg ",.5 ,{rotationY:100 , rotationZ:100 ,scaleY:1.5,scaleX:1.5,ease: Power3.easeOut })
  //   .to('.landPageSvg ' , .5 , {rotationX:360 ,rotationZ:180,})
  //   .to('.landPageSvg ' , 1, {rotationX:0 ,rotationZ:0 , rotationY:0 ,scaleY:1, scaleX:1})
  
  //   .from('.landpage_logo .firstImg' ,1 ,{opacity:0,rotationY:360} , "-=1")
  //   .from('.landpage_logo .back' ,1 ,{ opacity:0})
   }


  render() {  
    return (
       
        <div className="home">    
            <Navbar />
            <Landpage /> 
           
            {/* <div className="for_transition"></div> */}
            {/* <Section1 /> */}
         
            {/* <Circle /> */}
        </div>
       
        )
  }
}
export default Home;