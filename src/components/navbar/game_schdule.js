import React, { Component } from 'react';
import './game_schdule.css';
import {TweenMax , Power2,TimelineLite ,ease ,SlowMo ,Power3} from 'gsap/TweenMax';

import img01 from './../../pre-order/img/png/對馬幽魂.png';
import img02 from './../../pre-order/img/png/湯姆克蘭西：全境封鎖 2.png';
import img03 from './../../pre-order/img/png/侏羅紀世界：進化《中文版》.png';
import img04 from './../../pre-order/img/png/噬血代碼《中文版》.png';
import img05 from './../../pre-order/img/png/最後生還者 二部曲.png';
import img06 from './../../pre-order/img/png/異塵餘生 76.png';
import img07 from './../../pre-order/img/png/英雄傳說 閃之軌跡 III《中文版》.png';
import img08 from './../../pre-order/img/png/惡魔獵人5.png';
import img09 from './../../pre-order/img/png/新忍出擊.png';
class Ｇame_schdule extends Component {




  componentDidMount(){
    let tl_home = new TimelineLite ;
   }


  render() {  

    let  game_schdule_datas = [ {name:"對馬幽魂" , date: "2018/06/30"  , price:"$1600",  btn:"預購"  , img:img01 } 
                                ,{name:"湯姆克蘭西：全境封鎖 2" , date: "2018/07/14"  , price:"$1600",  btn:"預購" ,img:img02}
                               , {name:"侏羅紀世界：進化《中文版》" , date: "2018/07/22"  , price:"$1600",  btn:"預購" , img:img03}
                               ,{name:"噬血代碼《中文版》" , date: "2018/08/02"  , price:"$1600",  btn:"預購" ,img:img04}
                               ,{name:"最後生還者 二部曲" , date: "2018/08/03"  , price:"$1600",  btn:"預購" ,img:img05}
                               ,{name:"異塵餘生 76" , date: "2018/08/07"  , price:"$1600",  btn:"預購" ,img:img06}
                               ,{name:"英雄傳說 閃之軌跡 III《中文版》" , date: "2018/08/15"  , price:"$1600",  btn:"預購" ,img:img07} 
                               ,{name:"惡魔獵人 5" , date: "2018/08/15"  , price:"$1600",  btn:"預購" ,img:img08}
                               ,{name:"NARUTO TO BORUTO 新忍出擊 " , date: "2018/08/22"  , price:"$1600",  btn:"預購" ,img:img09 }
                              ]
                        
    let game_schdule_data =game_schdule_datas.map((item , index)=>
                      <div className="B_game_schdule_row">
                            <div className="B_game_schdule_row_data B_game_schdule_row_name"><div className="B_game_schdule_row_name_pic"><img src={item.img}/></div><span>{item.name}</span></div>
                            <div className="B_game_schdule_row_data B_game_schdule_row_date"><span>{item.date}</span></div>
                            <div className="B_game_schdule_row_data B_game_schdule_row_pric"><span>{item.price}</span></div>
                            <div className="B_game_schdule_row_data B_game_schdule_row_btn"><div className="B_row_btn">{item.btn}</div></div>
                      </div>        
  
  )
    return (
       
        <div className="B_game_schdule">    
                {/* <div className="B_game_schdule_dec_cornor"></div> */}
                <div className="B_game_schdule_content_wrap">
                      <div className="B_game_schdule_content_label">
                          <div className="B_label_name">遊戲名稱</div>
                          <div className="B_label_date">發售日期</div>
                          <div className="B_label_price">價格</div>
                      </div>
                      <div className="B_game_schdule_content">
                            
                            {game_schdule_data}
                      </div>
                </div> 
        </div>
          
        )
  }
}
export default Ｇame_schdule;