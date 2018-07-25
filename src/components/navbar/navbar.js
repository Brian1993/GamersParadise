import React, { Component } from 'react';
import './navbar.css';
import { TweenMax, TimelineLite } from 'gsap';
import {BrowserRouter as Router,Route} from 'react-router-dom';
import Game_schedule from './game_schdule';
import Member from './member';
import Contact from './contact';
import logo from './../../images/logo/logo03.svg';
import return_arrow from './../../images/landpage_inside_shoot_returnArrow.svg'
import Tec_background from './../../../src/images/tec/nav_pic.svg'
import { ENGINE_METHOD_DIGESTS } from 'constants';
let  Menu_tl = new TimelineLite;  
let member_tl =  new TimelineLite;
let Game_schedule_tl =  new TimelineLite;
let contact_tl =  new TimelineLite;
class Navbar extends Component {
  constructor(props){
    super(props);
             this.state={
                menuActive:true,
                switch:null ,
                class:["container_member" , "container_game_schedule" ,"container_contact"] ,
                i : null     ,   //取class中的值  
                container_open:false,
                timeLine:[{name:member_tl,open:false} ,{name:Game_schedule_tl ,open:false} ,{name:contact_tl ,open:false}],
                timeLine_index:null  //取timeLine裡面的值
             }                  
  }  


shouldComponentUpdate(nextProps,nextState){
        console.log("should:"+nextState.switch)
        return this.state.switch!==nextState.switch   //判斷如果 已經選到該component了就不再次渲染,如果不是的話就渲染
}
toggleMenu(){
        console.log("click menu")
        let bar1= document.querySelector('.bar1');
        let bar2= document.querySelector('.bar2');
        console.log(bar1)
        bar1.classList.toggle('B_bar1_click');
        bar2.classList.toggle('B_bar2_click');
        if(this.state.container_open){         //每次點擊選單時都會判斷選單內容是不是打開的 , 是打開的就
                this.state.timeLine[this.state.timeLine_index].name.reverse()
                this.state.timeLine[0].open =false;
                this.state.timeLine[1].open =false;
                this.state.timeLine[2].open =false;    //  將打開的內容收回
              Menu_tl.reversed()? Menu_tl.play() : Menu_tl.reverse()     //如果 選單是打開的就收起 是關閉單就打開
        }else{
        Menu_tl.reversed()? Menu_tl.play() : Menu_tl.reverse()  //如果 選單是打開的就收起 是關閉單就打開
        }
        
     
}
 member(){    
        this.state.timeLine[1].open =false;
        this.state.timeLine[2].open =false;    //不管點哪個，先將其他的open 設為 false , open為reversed的狀態的紀錄

        if(this.state.timeLine[0].open==true){   //如果
                member_tl.reversed(false)
                this.state.timeLine[this.state.timeLine_index].open = false
        } 
        console.log(member_tl.reversed())
        // this.state.timeLine[0].open = true
        this.setState({
                switch:"member" ,
                i:0,
                timeLine_index:0,
                container_open:true,
                })  
        
}


Game_schedule(){
        this.state.timeLine[0].open =false;
        this.state.timeLine[2].open =false;

        if(this.state.timeLine[1].open==true){
                Game_schedule_tl.reversed(false)
                this.state.timeLine[this.state.timeLine_index].open = false
        } 
        this.setState({
                switch:"Game_schedule",
                i:1,
                timeLine_index:1,
                container_open:true

        })
     
}
contact(){  
        this.state.timeLine[0].open =false;
        this.state.timeLine[1].open =false;

        if(this.state.timeLine[2].open==true){
                Game_schedule_tl.reversed(false)
                this.state.timeLine[this.state.timeLine_index].open = false
        } 
        this.setState({
                switch:"contact",
                i:2,
                timeLine_index:2,
                container_open:true,        
        })
      
}
return(){
        
        // console.log(!this.state.timeLine[this.state.timeLine_index].reversed())
        console.log("返回動畫")
        this.state.timeLine[this.state.timeLine_index].name.reversed(true)
        this.state.timeLine[this.state.timeLine_index].open = true
        console.log("member_tl:"+this.state.timeLine[0].open)    
        console.log("Game_schedule_tl:"+this.state.timeLine[1].open)    
        console.log("contact_tl:"+this.state.timeLine[2].open)   
}
componentDidUpdate(){
      
       
        if(this.state.timeLine[this.state.timeLine_index].name ==member_tl){
                console.log("第一個")
                member_tl
                .to(".nav_list" , .8 ,{rotationY:0})
                .to('.glitch' , .8 ,{rotationY:0 } ,"-=.8")
                .to(".menu" , .8 ,{x:"1000"})
                .from(".container",.8,{x:-2000} ,"-=.8")
                .to(".nav_return_btn" ,.8 ,{opacity:1}, "-=.8")  
        }    
        if(this.state.timeLine[this.state.timeLine_index].name ==Game_schedule_tl){
                console.log("第二個")
                Game_schedule_tl
                .to(".nav_list" , .5 ,{rotationY:0})
                .to('.glitch' , .5 ,{rotationY:0 } ,"-=.5")
                .to(".menu" , .5 ,{x:"1000"})
                .from(".container",.5,{x:-2000} ,"-=.5")
                .to(".nav_return_btn" ,.8 ,{opacity:1}, "-=.5")  
        }   
        // contact_tl
        // .to(".nav_list" , .8 ,{rotationY:0})
        // .to(".menu" , .8 ,{x:"100%"})
        // .from(".container_contact",.8,{opacity:0 ,x:"-200%"} ,"-=.8")
       
}
  componentDidMount(){


        
        
        Menu_tl.pause()
        
        Menu_tl.timeScale(1.1)
        // Menu_tl .to(".bar1" ,.1 , {rotation:-15}) 
        //         .to(".bar2" ,.1 , {rotation:15} ,"-=.1") 
                // .to(".bar1" ,1 ,{rotation:45}) 
                // .to(".bar3" ,.1 , {rotation:135} ,"-=.1") 
                .to(".hamburger .bar3",.1 , {opacity:0} ,"-=.1")
                .to('.ani_line',.4,{width:"90%"})
                .to('.ani_line',.4,{top:"100vh"})
                .to('.nav_overlay',.4, {top:0 } , "-=.4")      
                .from('.nav_list',.4 , { opacity:.5,x:"-200%" , rotationY:-80} )
                .from(".glitch", .4 ,{opacity:0,x:"-300%"} ,"-=.4")

                .reversed(this.state.menuActive)

      
        
} 
  render() {  

  
    let content =null ;
        if(this.state.switch==="member"){
                content =<Member />
        }
        else if (this.state.switch==="Game_schedule"){
                content = <Game_schedule />
        }else if(this.state.switch ==="contact"){
                content = <Contact />
        }

    return (

      <Router>  
                {/* <Route exact path="/" render={(...props) => (main)}/> */}
                <nav>  
                        <div className="logo"><img src={logo} alt="回首頁"/></div>     
                        <div className="nav_overlay">
                                <div className="menu">
                                        <div className="glitch_wrap">
                                                <div  class="glitch" data-text="選單">選單</div>  
                                        </div>          
                                        <ul className="nav_list">     
                                                <li onClick={this.member.bind(this)}>會員登入</li>       
                                                <li>會員中心</li>  
                                                <li onClick={this.Game_schedule.bind(this)}>遊戲發售日期</li>       
                                                <li>購物車</li>      
                                                <li>商店</li>      
                                                <li onClick={this.contact.bind(this)}>聯絡我們</li>  

                                        </ul>
                                </div>
                                <div   className="container">
                                       
                                        {content}                                    
                                       
                                </div> 
                                <div className="nav_return_btn" onClick={this.return.bind(this)}>
                                        <img className="nav_return_btn_arrow" src={return_arrow} />
                                </div>
                        </div>
                        
                        <div className="nav_btn_wrap" onClick={this.toggleMenu.bind(this)}>
                                <div className="hamburger"  >
                                        <div className="bar bar1"></div>
                                        <div className="bar bar2"></div>
                                        <div className="bar bar3"></div>
                                </div>
                        </div>
                        <div className="ani_line">
                       
                        </div>

                </nav> 
        </Router>   
        )
  }
}

export default Navbar;