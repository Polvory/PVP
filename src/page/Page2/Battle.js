import React,{useRef, useEffect} from 'react';
import {TweenMax, TimelineLite, Power3} from "gsap"
import s from './Battle.module.css'
import { Button } from 'antd';
import d from '../../images/Screensаhot_4.png'
import { Avatar } from 'antd';

export const Battle = () => {
    
let app = useRef(null)  
let app2 = useRef(null)    


// let  el2 = useRef(null) 

let tl = new TimelineLite()




   useEffect(() =>{


     
    tl.from(app, 1.2, {opasity:0, y:300, ease: Power3.easeOut})
    .from(app2, 1.2, {opasity:0, y:300, ease: Power3.easeOut}, .2)

    //   console.log(el2) 
   }) 
return (
<>
<div  className={s.Battle_Parent_grid}>



<h1 ref={el => (app = el)} className={s.test_tecst}>тьест</h1>
<h1 ref={el => (app2 = el)}  className={s.test_tecst_2}>тест 2</h1>


</div>
</>

)

}
