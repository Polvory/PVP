import React, {useState} from 'react';
import {NavLink} from 'react-router-dom'
import s from './mainPage.module.css'
import d from '../../images/Screensаhot_4.png'
import { Avatar } from 'antd';

export const MainPage = () => {

 

return (
<>
<div className={s.MainPage_Parent_grid}>
<div
className={s.MainPage_HelloUser_grid}
>
<div className={s.MainPage_UserAvatar}>
<Avatar className={s.UserAvatarImg} size={100} icon src={d} />

</div>

<div className={s.MainPage_UserName}>
<h1>Фамилия Имя Очество dsafasf</h1>

< NavLink  to="/Battle"  activeStyle={{color: 'red'}}>
<button className={s.MainPage_button}>Начать батлл</button>
</ NavLink >





</div>
</div>
</div>
</>

)



}

