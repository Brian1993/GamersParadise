import React, { Component } from 'react';
import './section1_right.css';
import Frame from './s1_components/frame';
import frontPic_adventure from './../../images/各類遊戲圖片/動作/魔物獵人/bg1-2.jpg';
import frontPic_shooting from './../../images/各類遊戲圖片/射擊/湯姆克蘭西：全境封鎖/homepage_shooting.jpg';
import frontPic_sport from './../../images/各類遊戲圖片/運動/homepage_sport.png';
import frontPic_horror from './../../images/各類遊戲圖片/恐怖/邪靈入侵/The-evil-within_07.png'
import Btn02 from './../../components/btn02/B_btn02'
import { TweenMax, TimelineLite ,Elastic ,Power3 , SlowMo } from 'gsap';
import {withRouter} from 'react-router-dom';
import { copyFileSync } from 'fs';
let tl = new TimelineLite ;
// let section1_right = this
// let back = document.querySelector(".back");
// let halo = document.querySelector(".halo");
class Section1_right extends Component {
    constructor(props){
      super(props);
      
      this.state={
        compoFilter: this.props.compoFilter,
        page :this.props.page,
        game:[
          { gameClass:"冒險類",
            frontPic: frontPic_adventure,
            back:"back_adventure",
            halo:"halo_adventure"},
          { gameClass:"射擊類",
            frontPic: frontPic_shooting,
            back:"back_shooting",
            halo:"halo_shooting"}  ,           
          { gameClass:"運動類",
            frontPic: frontPic_sport,
            back:"back_sport",
            halo:"halo_sport"}  ,
          { gameClass:"恐怖類",
            frontPic: frontPic_horror,
            back:"back_horror",
            halo:"halo_horror"}        
          ],     
          index:this.props.page-2
      }
      console.log(this.props);    
      // console.log("右邊在construcor收到: " + this.props.page + this.props.index)
      
    }
    
    
   


    componentWillMount(){
      // console.log("hey it's here")
      // console.log("右邊的willmount: index -> " + this.props.index)
          // switch(this.props.page){
          //   case 2 :
          //   this.setState({
          //        i :0
          //   })
          //   break ;
          //   case 3 :
          //   this.setState({
          //       i:1
          //   })
          //   break ;
          //   case 4 :
          //   this.setState({
          //        i :2
          //   })
          //   break ;
          //   case 5 :
          //   this.setState({
          //        i :3
          //   })
          //   break ;
          // }
      
          

    }


    componentDidMount(){
        // console.log("在右邊收到的i是 ->" +this.state.i)
      // TweenMax.from('.s1_r_content_wrap' , 1 ,{x:500, opacity:0,y:500},"-=1");  
        let tl= new TimelineLite 
        // tl.timeScale(2)
          // tl.from('#frame_svg .right' ,.8, {x:300} ,.1)
          //     .from('#frame_svg .top' ,.8, {y:-150} ,.1 )
          //       .from('#frame_svg .bottom' ,.8, {y:300 } , .1)
          //       .from('.s1_main_content' , .8 , {scale:0} ,)
          //       .from(".gameTag_btn" ,.7, {opacity:0 , x:300},"-=.8" )
              tl.from('#frame_svg .right' ,.8, {x:300} ,.1)
              .from('#frame_svg .top' ,.8, {y:-150} ,.1 )
                .from('#frame_svg .bottom' ,.8, {y:300 } , .1)
                .from('.s1_main_content' , .8 , {opacity:0} ,)
                .from(".gameTag_btn" ,.7, {opacity:0 , x:300},"-=.8" )
               
   }
    componentWillReceiveProps(nextProps){
        console.log(nextProps.page)
        if (nextProps.page == 1) {
          TweenMax.to('.s1_r_content_wrap', .7, {
            y: -300, opacity: 0, onComplete: () => {
              return this.props.history.push("/landpage")
            }
          })    
        } else {
          let w = window.innerWidth;
          let tl_state = new TimelineLite;
    
          if(w>500){
           
            tl_state.timeScale(1.5)
            tl_state
              .to('.front', .5, {
                scale: 1.2, rotationX:85, opacity: 0, onComplete: () => {
                  this.setState({
                    index: nextProps.page - 2
                  })
      
                }
              })
              .to(".tag-text h2" , .4 ,{opacity:0 ,x:150},"-=.5")
              .to(".tag-text h4" , .4 ,{opacity:0 ,x:150},"-=.4")
              .to(".game-btn" , .4 , {opacity:0 , x:-100} , "-=8")
              .to(".back", 1.5, { scale: 1.2, translateX: -120, rotationX: 90, rotationY: 90, opacity: .5 }, "-=.4")
              .to('.halo', 1, { scale: 0}, "-=1")
              .to('.front', .8, { scale: 1, rotationX: 0, opacity: 1, rotationY: 0 }, "-=.4")
              .to('.back', .8, { scale: 1, opacity: 1, rotationX: 0, rotationY: 0, rotationZ: 0 }, "-=.4")
              .to(".halo", .8, { scale: 1}, "-=1.2")
              .to(".tag-text h2" , .4 ,{opacity:1 ,x:0},"-=.8")
              .to(".tag-text h4" , .4 ,{opacity:1 ,x:0},"-=1.2")
              .to(".game-btn" , .4 , {opacity:1 , x:0} , "-=1.2")
          }
          else{
            tl_state.to('.s1_main_content' ,.4 ,{x:-150, opacity:0 ,onComplete: () => {
              this.setState({
                index: nextProps.page - 2
              })
    
            }})
              .to(".tag-text h2" , .4 ,{opacity:0 ,x:300},"-=.5")
              .to(".tag-text h4" , .4 ,{opacity:0 ,x:300},"-=.4")
              .to(".s1_main_content" , .4 ,{x:0 ,opacity:1})
              .to(".tag-text h2" , .4 ,{opacity:1 ,x:0},"-=.8")
              .to(".tag-text h4" , .4 ,{opacity:1 ,x:0},"-=1.2")        
          }    
        }
     

    }
   
    componentWillUpdate(nextProps, nextState){

            
    }
   
 
    componentDidUpdate(){
       
    }
    
  render() {    

    return (
  
        <div className="section1_right">
        
            <div className="s1_r_content_wrap">
                <Frame />
                <div className="s1_main_content">
                    <div className="front">
                          <img src={this.state.game[this.state.index].frontPic}  />
                      </div>
                    <div className={`back ${this.state.game[this.state.index].back}`} ></div>
                    <div className={`halo ${this.state.game[this.state.index].halo}`}></div>
                </div>
                <div className="gameTag_btn">
                      <div className="game-tag">
                          <div className="tag-text">
                            <h4>熱門遊戲</h4>
                            <h2>{this.state.game[this.state.index].gameClass}</h2>
                          </div> 
                      </div>
                      <div className="game-btn">
                        <Btn02 text="進入此館" />
                      </div>
                 </div>
            </div>      
        </div>

        )
  }
}
export default  withRouter(Section1_right) ;