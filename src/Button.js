import React, {useRef, useEffect} from 'react';
import { TweenMax, Power3} from 'gsap';


const Button = () => {

let button = useRef(null)
    

useEffect(()=>{
    console.log(button)
   
})

const bly =() => {
    TweenMax.to(button, .8, {width:100, height:100, ease: Power3.easeIn})
}

return (
<button onClick={bly} ref={el => button = el}>Привет</button>

)

}


export default Button