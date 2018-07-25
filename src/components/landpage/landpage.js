import React, { Component } from 'react';
import ReactDom from 'react-dom';
import './landpage.css';
import Landpage_left_side from './landpage_left_side/landpage_left_side';
import Landpage_right_side from './landpage_right_side/landpage_right_side';
import {BrowserRouter as Router,Route, Link } from 'react-router-dom';
import Section1_right from '../section1/section1_right';
import Btn01 from './../btn01/B_btn01';
// import closeFooter_arrow from './../../../dist/images/shooting/landpage_inside_shoot_returnArrow.svg'
import {TweenMax , Power2,TimelineLite ,ease ,SlowMo ,Power3} from 'gsap/TweenMax';
import { METHODS } from 'http';
let footer_tl = new TimelineLite;


class Landpage extends Component {
  
  constructor(props){
   
    super(props);
     //this.lastTime = 0;
     localStorage.setItem('lastTime', 0);
     localStorage.setItem('B_touchStart',0);
      this.state={
        compoFilter:"a",
        page:1,
        index:null ,
        lastTime:0 ,
        deltaY : 0 ,
        num:1,
        dir : null ,
      
      }
      // this.getTime =this.getTime.bind(this)
   
    
    }


    getFilter(compoFilter , page  , index){
      this.setState({ 
        compoFilter:compoFilter,
        page : page ,
        index : index,    
       }   
      )
  } 


  //滾輪事件  ----------------------------------------------
    
    
    getTime(e){ 
      
      let delta_data = e.deltaY;
      
            e.stopPropagation();
            e.preventDefault();
            var tstamp = new Date().getTime();
            let lastTime = localStorage.getItem('lastTime') * 1;
            if(tstamp - lastTime< 300){ 
                // this.lastTime = tstamp;
                localStorage.setItem('lastTime', tstamp);
                // console.log(lastTime, tstamp - lastTime, tstamp - lastTime< 500)
                return;
            } else{  
                //  console.log("做事的時間"+lastTime)
                //  console.log(lastTime, tstamp - lastTime, tstamp - lastTime< 500)
                 localStorage.setItem('lastTime', tstamp);
                if(delta_data>0 && this.state.page<5){
                  this.setState({
                    deltaY:delta_data,
                    page:this.state.page+1,
                    
                  }) 
                }else if(delta_data<0 &&this.state.page>1){
                  this.setState({
                    deltaY:delta_data,
                    page:this.state.page-1,   
                  }) 
                }
             
                 
            }   
    }
  // touch 事件--------------------------------------------
  touchStart(e){
    let  touch_start_X =  e.touches[0].clientX;
     console.log(touch_start_X);
    let   B_touchStart   =localStorage.getItem('B_touchStart')*1 ;
    localStorage.setItem('B_touchStart' , touch_start_X)
  }
  touchEnd(e){
    let touch_end_X =  e.changedTouches[0].clientX;
    let t_StartX = localStorage.getItem('B_touchStart')*1 
    
      if(t_StartX>touch_end_X && this.state.page<5){
        
        console.log('touch前：'+this.state.page +"   !!!!!!!!!!!!!")
        this.setState({
          page:this.state.page+1,
          
        }) 
      }else if(t_StartX<touch_end_X && this.state.page>1){
        this.setState({  
          page:this.state.page-1,   
        }) 
      }else{
        return ;
      }
    
  }
    
      // ------------------------------------------------------------


    closeFooter(){
      footer_tl.reverse()
    }
    openFooter(){
      console.log("open footer")
      footer_tl.play()
    }
  componentWillUpdate(nextProps ,nextState){
      // console.log(this.lastTime)
      // console.log("componentWillUpdate->更新時間為： " + this.lastTime )
    
      // console.log("deltaY更新為"+nextState.deltaY)    
   }
  
 
  componentDidMount(){
        
      let body = document.querySelector('body');
        body.addEventListener('scroll' ,function(){
            console.log("a")
        })
                
    } //didMount結束  


  componentDidUpdate(){
     
    
  }
  render() { 
   
    // ---------------------------------
      let main =<Landpage_right_side  compoFilter={this.state.compoFilter} page={this.state.page}    />
      let Section1Right = <Section1_right  compoFilter={this.state.compoFilter} page={this.state.page}   index={this.state.index} deltaY={this.state.deltaY} />  
    return (
      <Router>
        <div  className="landpage"   onTouchEnd={this.touchEnd.bind(this)}    onTouchStart={this.touchStart.bind(this)}   onWheel={this.getTime.bind(this)}>
       
            <div className="landpage_overlay"></div>

              <Landpage_left_side     page={this.state.page}    getFilter={this.getFilter.bind(this)}    deltaY={this.state.deltaY}      />

              <Route exact path="/landpage" render={(...props) => (main)}/>
            
              {/* <Route path="/section1" component={Section1_right} /> */}
              <Route path="/section1" render={(...props) => (Section1Right)}/>
          
        
        </div>
      </Router>  
    );
  }
}

export default Landpage;