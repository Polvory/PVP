import React,{useState, useRef, useEffect} from 'react';
import { Switch, Route,  withRouter, Redirect, useHistory, useRouteMatch } from 'react-router-dom'
// import history from './history'

import { DatePicker } from 'antd';
import { Button } from 'antd';
import { Pagination } from 'antd';
import {MainPage} from './page/Page1/mainPage'
import {NavLink} from 'react-router-dom'

import {Battle} from './page/Page2/Battle'
import {TweenMax, Power3} from "gsap"
import Jooo from './page/Battun'

import 'antd/dist/antd.css';
// import {MainPage} from "./page/Page1/mainPage"

import s from './App.module.css';

const App = () =>  {
      


// State of our Menu

let menu = useRef(null)
let menu2 = useRef(null)
const [takeIt, settakeIt] = useState(0);
const updateNow =(value)=>{
  settakeIt(value)

}


const testAnimate = () =>{console.log(1)
  TweenMax.to( menu2,  0.8, {width: "99vw", ease: "power3.inOut", repeat:1, yoyo:true} )
  // TweenMax.to(menu, 0.8, {height: 0, ease: "power3.inOut", delay:0.1, repeat:1, yoyo:true} )

}


const [state, setState] = useState({
  initial: false,
  clicked: null,
  menuName: "Menu"
  })
  
    // State of our button
  const [disabled, setDisabled] = useState(false);

 

  const handleMenu = () => {
      // disableMenu();
      if (state.initial === false) {
        setState({
          initial: null,
          clicked: true,
          menuName: "Close"
        });
        // closeMenu()
        console.log(menu)
      } else if (state.clicked === true) {
        setState({
          clicked: !state.clicked,
          menuName: "Menu"
        });
        console.log(menu)
// openMenu()

      } else if (state.clicked === false) {
        setState({
          clicked: !state.clicked,
          menuName: "Close"
        });
        console.log(menu)
        // closeMenu()
       
      }
    };
  
  
   
    // const { match, location, history } = this.props;

    let history = useHistory();
   const Delay = (e) => { 
      e.preventDefault()
      setTimeout(() => { 

      history.push("/Battle")
      
      },500)
  }

    
    //Determine if out menu button should be disabled
    const disableMenu = () => {
      setDisabled(!disabled);
      setTimeout(() => {
        setDisabled(false);
      }, 1200);
    };

  return (
<>
{/* <button className={s.MainPage_button} disabled={false} onClick={handleMenu}> {state.menuName}</button> */}

  <button onClick={testAnimate} className={s.MainPage_button}>тест анимации</button>
<div>
<Jooo fn={updateNow}/>
  <h1>{takeIt}</h1>
  <div ref={ el => (menu = el)} className={s.menu}>
  
  </div>
  <div ref={ el => (menu2 = el)} className={s.menu2}>
   
  </div>
  </div>
    <div className={s.grid_body}>
  <header className={s.header}>
  </header>
  <content className={s.content}>
  <Switch>
 
  <Route exact  path='/' component={MainPage}/>
  <Route  path='/Battle' component={Battle}/>


  </Switch>
 
  </content>
<footer className={s.footer}>3</footer>



< NavLink  to="/Battle"  activeStyle={{color: 'red'}}  onClick={Delay}>
<button onClick={testAnimate} className={s.MainPage_button}>Начать батлл</button>
</ NavLink >


    </div>
    </>
  );
}
const kakynibyd =withRouter(App)
export default kakynibyd;


{/* <Button type="primary" className="button_castom">Primary</Button>
<DatePicker />
<Pagination  defaultCurrent={Current} total={700} />
let [Current, setCurrent] = useState(2) */}