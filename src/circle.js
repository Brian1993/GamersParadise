import React from 'react'
import './circle.css'
import ReactDom from "react-dom";
import {
    TweenMax,
    TimelineLite
} from 'gsap'
// import { BrowserRouter as Router, Route, NavLink, match, path } from 'react-router-dom';
// import ReactDom from 'react-dom'

// import Coverflow from 'react-coverflow';

// import { TweenMax, TimelineLite, Elastic } from 'gsap/TweenMax';
class C_slider extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            active: 1,
            complete: true
        };

    }
    componentDidMount() {

        let slider_page = document.querySelectorAll('.slider_box').length
        console.log(slider_page)
        let deg = 360 / parseInt(slider_page);
        // let deg =parseInt(60)
        console.log(deg)
        let mydiv = document.getElementById('slider_list');
        console.log(mydiv)
        let r = parseInt(window.getComputedStyle(mydiv).getPropertyValue('width')) / 2
        console.log(r)
        console.log("cos:" + Math.cos(Math.PI))
        for (let i = 0; i < slider_page; i++) {
            let selected = document.querySelector(`.slider_box:nth-child(${i + 1})`)
            let lasttop = parseInt(window.getComputedStyle(selected).getPropertyValue('top'))
            let lastleft = parseInt(window.getComputedStyle(selected).getPropertyValue('left'))
            let newtop = r * Math.cos(2 * 3.14 / 360 * (180 - (deg * i)))

            let newleft = r * Math.sin(2 * 3.14 / 360 * (180 - (deg * i)))
            if (i === 0) {
                selected.classList.add('main_slider')
            }
            selected.style.top = parseFloat(newleft + lastleft) + "px"
            selected.style.left = parseFloat(newtop + lasttop) + "px"
            console.log(newleft + lastleft)
            console.log(newtop + lasttop)
            console.log(i)
            // console.log(selected)
        }

    }
    setvalue(event) {
        let target = event.target.getAttribute('value')
        let NowActive = this.state.active
        let NextActive
        // console.log(NewActive);
        switch (target) {
            case 'up':
                if (NowActive === 6) {
                    this.setState({
                        active: 1
                    })
                    NextActive = 1
                } else {
                    this.setState({
                        active: NowActive + 1
                    })
                    NextActive = NowActive + 1
                }

                break;
            case 'down':
                if (NowActive === 1) {
                    this.setState({
                        active: 6
                    })
                    NextActive = 6
                } else {
                    this.setState({
                        active: NowActive - 1
                    })
                    NextActive = NowActive - 1
                }
                break;
            case '1':
                this.setState({
                    active: 1
                })
                NextActive = 1
                break;
            case '2':
                this.setState({
                    active: 2
                })
                NextActive = 2
                break;
            case '3':
                this.setState({
                    active: 3
                })
                NextActive = 3
                break;
            case '4':
                this.setState({
                    active: 4
                })
                NextActive = 4
                break;
            case '5':
                this.setState({
                    active: 5
                })
                NextActive = 5
                break;
            case '6':
                this.setState({
                    active: 6
                })
                NextActive = 6
                break;
        }
        console.log(NextActive)
        console.log(this.state.active)
        this.change(NextActive, NowActive)
        // console.log(this.state.active)
    }
    
    change(NextActive, NowActive) {
        let movestep = NextActive - NowActive;
        if (movestep === -5) {
            movestep = 1
        } else if (movestep === 5) {
            movestep = -1
        }
        let movedegA = "+=" + movestep * 60
        let movedegB = "-=" + movestep * 60
        let get = ReactDom.findDOMNode(document.querySelector('.slider_list'))
        let getall = ReactDom.findDOMNode(document.querySelector('.slider_box'))
        var tl = new TimelineLite({
            delay: 0

        });
        // console.log(movedeg)
        tl.fromTo(get, .8, {
            rotation: "+=0"
        }, { rotation: movedegA })
            .fromTo(document.querySelectorAll('.slider_box'), .8, {
                rotation: "+=0",
                
            }, { rotation: movedegB, scale: 0.6, backgroundColor: '#66a7d7', opacity: .6,z:-40 }, "-=.8")
            .to(document.querySelector(`.slider_box:nth-child(${NextActive})`), .8, {
                // transform: "translateZ(0px)",
                backgroundColor: '#66cc78',
                scale: 1,
                opacity: .9,
                z:0

            },"-=.8",0)
    }

    componentDidUpdate() {
        console.log(this.state.active)
        // console.log(this.props.test)
    }
    render() {

        return (

            <div className="C_slider_container" >
                < div id="slider_list" className="slider_list" >
                    <div key="1" className={`slider_box`}>
                        { /* <img src='../images/Monster_Hunter_World02.jpg' alt='Album two' data-action="http://passer.cc" /> */} </div>
                    <div key="2" className="slider_box">
                        { /* <img src='../images/Monster_Hunter_World02.jpg' alt='Album two' data-action="http://passer.cc" /> */} </div>
                    <div key="3" className="slider_box" >
                        { /* <img src='../images/Monster_Hunter_World02.jpg' alt='Album two' data-action="http://pas ser.cc" /> */} </div>
                    <div key="4" className="slider_box" >
                        { /* <img src='../images/Monster_Hunter_World02.jpg' alt='Album two' data-action="http://passer.cc" /> */} </div>
                    <div key="5" className="slider_box" >
                        { /* <img src='../images/Monster_Hunter_World02.jpg' alt='Album two' data-action="http://passer.cc" /> */} </div>
                    < div key="6" className="slider_box" >
                        { /* <img src='../images/Monster_Hunter_World02.jpg' alt='Album two' data-action="http://passer.cc" /> */} </div>
                </div >
                <div value="up" className="btnclass" onClick={this.setvalue.bind(this)} > 往上 </div>
                <div value="down" className="btnclass" onClick={this.setvalue.bind(this)}> 往下 </div>
                <div value="1" className="btnclass" onClick={this.setvalue.bind(this)}> 1 </div>
                <div value="2" className="btnclass" onClick={this.setvalue.bind(this)}> 2 </div>
                <div value="3" className="btnclass" onClick={this.setvalue.bind(this)}> 3 </div>
                <div value="4" className="btnclass" onClick={this.setvalue.bind(this)}> 4 </div>
                <div value="5" className="btnclass" onClick={this.setvalue.bind(this)}> 5 </div>
                <div value="6" className="btnclass" onClick={this.setvalue.bind(this)}> 6 </div>
            </div >





        )

    }

}

export default C_slider