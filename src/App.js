import React, {useRef, useEffect} from 'react';

import './App.css';
import { Controller, Scene } from 'react-scrollmagic';
import { Tween, Timeline} from 'react-gsap';
import { TweenMax, Power3} from 'gsap';
import Button from "./Button"
import "./testJs"
import  "./kursor.css"
import kursor from "kursor"
// import inView from "in-view"



// import LoggingButton from './testCklik.js'
// import inView from "./in-view"
// import on from 'in-view' 


// import {TweenMax, Power3} from 'gsap'
// import {Tween} from 'react-gsap'
// import { Controller, Scene } from 'react-scrollmagic';
// import ScrollMagic from 'react-scrollmagic';

function App() {



  let kursor2 = useRef(null);
 
 
 


  // inView('.circle').on('enter', doSomething);

  // .on('enter', doSomething)
  
  // function handleClick(e) {
  //   e.preventDefault();
//   //   console.log(1)
//   let h = 300
//   // }
//   inView.offset({
    
   
//     bottom: h
   
// });
  // let circle = useRef(null);
  let circleRed = useRef(null);
  // let circleBlue = useRef(null);

// const hadleExpand = () => {
//   console.log("показать")
//   TweenMax.from(circleRed, .5, {opacity:0, y:+50, ease: Power3.easeIn})
//   // TweenMax.to(circleRed, .8, {width:200, height:200, ease: Power3.easeIn})
// }

// const hadleEnd = () => {
//   console.log("Спрятать")
//   // TweenMax.from(circleRed, .8, {opacity:0, x:-20, ease: Power3.easeIn})
//   TweenMax.to(circleRed, .5, {opacity:0, y:+50, ease: Power3.easeIn})
// }
useEffect(() => {
  console.log(kursor2)
  new kursor({
    type: 1
    
})




},[]);

// const bly =() => {
//   console.log('значение this:', this);
//   TweenMax.to(circleRed, .5, {width:200, height:200, ease: Power3.easeIn})
// }
  // useEffect(() => {
   
  //   console.log(circleRed);
 
   
    // TweenMax.to(app, 0, {css:{visibility: 'visible'}})
    // TweenMax.staggerFrom([circle, circleRed, circleBlue], .8, {opacity: 0, x:70, ease:Power3.easeOut}, .8 )

  // }, [])

  // useEffect(() => {
  //  console.log(LogoItem);
  //   TweenMax.from(
  //     LogoItem, 
  //     1.5, 
  //     {
  //       opacity: 0,
  //     y:+50,
  //     ease: Power3.easeInOut
  //   }
  //   )
  // }, [])

  // inView(circle).on('enter', el => {el.style.opacity = 0.5;});
 
  return (
    <>
    <div ref={el => kursor2 = el} >
        <div style={{ height: "100vh" }}></div>
       
         <div className="t">
           <div>1</div>
           <div>1</div>
           <div>1</div>

         </div>
         <div className="grid">
         <Controller>
          <Scene
            pin={false}
            reverse={true}
            indicators={true}
            triggerElement="#trigger1"
            duration={"20%"}
            triggerHook={0.6}
          
          >
            <Tween staggerFrom={{ opacity:0, x:"-100%", ease: 'Expo.easeOut' }} 
            >
              
              <div id="trigger1"></div>
              <div className="circle" ><Button/></div>
            </Tween>
          </Scene>
          </Controller>

          <div className="circle circle1  blue"></div>
          </div>

          {/* <Controller>
          <Scene
            pin={false}
            reverse={true}
            indicators={false}
            triggerElement="#trigger2"
            duration={"30%"}
            triggerHook={0.5}
          
          > */}
            {/* <Timeline 
                target={
                  <div className="heading">
                    <h2>This is a cool heading</h2>
                  </div>
                }
              ><Tween
              from={{ opacity: 0 }}
              to={{ opacity: 1 }}
            />
            <Tween
              to={{ x: '110%' }}
            /> </Timeline> */}
            {/* <Tween staggerFrom={{ opacity: 0, x:-100,  ease: 'Expo.easeOut' } } 
             onCompleteAll={() => { hadleExpand()}}
            >
              <div id="trigger2"></div>
              <div 
              
              
              className="circle red" ></div>

           
            </Tween> */}
           
          {/* </Scene>
        </Controller> */}
        <div ref={el => circleRed = el} className="circle blue"></div>
       

        <div style={{ height: "100vh" }} ></div>
      
      
        
         
      </div>
   
 
   </>
  );
}

export default App;
