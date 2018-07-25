//左邊的標籤欄整塊整合

import React, { Component } from 'react';
import './landpage_left_side.css';
import TagImg01 from './../../../images/tec/tec01.svg' ;
import TagImg02 from './../../../images/tec/tec02.svg' ;
import Line from './line' ;
import { TweenMax } from 'gsap';
import ReactDom from'react-dom'

class Landpage_left_side extends Component {
  constructor(props){
    super(props);
        this.state={
                compoFilter:"a",
                page: 1,
                index:1
                
        }     
                 
  }  

  changepage(event){
       let page_date=event.target.getAttribute('page')
       let  page =parseInt(page_date)
       let  compo_filter 
       let  index 
       console.log(page)
        if(page == 1){
                compo_filter="a";
                index =-1;
        }else if (page === 2){
                compo_filter= "b"   ;
                 index=0;
        }else if (page === 3){
                compo_filter= "b"   ;
                index=1;
        }else if (page === 4){
                compo_filter= "b"   ;
                index=2;
        }else if (page ===5){
                compo_filter= "b"   ;
                index=3;
        }
      this.setState({
                compoFilter:compo_filter,
                page:page,
                index:index
        })
        this.props.getFilter(compo_filter ,page ,index)    
  }



 // 滾輪事件 ＿＿＿＿＿＿＿＿＿＿＿＿＿＿＿＿＿＿＿＿＿＿＿＿＿＿＿
//   componentWillReceiveProps(nextProps){
//         console.log("Tag收到資訊 ： "+nextProps.deltaY)    
//         if(nextProps.deltaY>0 && this.state.page<5){
//                 console.log("判斷為正數")
//                 this.setState({
//                         page:this.state.page+1
//                 })
//         }else if(nextProps.deltaY<0 && this.state.page>1){
//                 console.log("判斷為負數")
//                 this.setState({
//                         page:this.state.page-1
//                 })
//         }

//   }
  componentWillReceiveProps(nextProps){
        //   console.log(this.props.page)
        //   console.log(typeof(nextProps.page) );
        let page = parseInt(nextProps.page)  ;
        this.setState({
                page:page
        })
  }
 
         

//__________________________________________________________

  componentWillUpdate(nextProps ,nextState){
        // this.props.getTime(nextState.page)
  }
  componentDidUpdate(){     
        console.log("現在的page是： " + this.state.page)  
        // console.log(`Tag:i get ->compoFilter:${this.state.compoFilter} ,  page: ${this.state.page}  , index :${this.state.index}`  )
  }
  componentDidMount(){
                             
}
  render() {  
    let ls =  "lp_left_side" ;
    let tag_wrap = "lp_left_tags_wrap";
    let tag_line= "lp_side_tag_line";
    let tag_body = "lp_side_tag_body";
    let data = [
                {name:"首頁" ,page:1}   
                ,{name:"冒險類" ,page:2}   
                ,{name:"射擊類",page:3}        
                ,{name:"運動類",page:4}
                ,{name:'恐怖類',page:5}

                 ]
    let datas =data.map((item,index)=>
   <div  className={`lp_side_tag_each tag${index+1} ${this.state.page==item.page?'tag_move':null}`}>
                <div className={tag_line}>
                        <Line />
                </div>
                <div  className={tag_body}>
                <span className="pointer_event">{item.name}</span>
                <img  onClick={this.changepage.bind(this)}  page={item.page}  src={TagImg02} alt="首頁"/>
                </div>
        </div>  
    )
    
   
    return (

        <div className={ls}>
            <div className="scroll_down"><span >Scroll</span></div>
                <div className={tag_wrap}>
                        {datas}
                </div>
                
        </div>
        )
  }
}
export default Landpage_left_side;