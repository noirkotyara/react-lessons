import React from 'react';
import cl from './User.module.css';
import avaDefault from '../../../assets/images/zorro.jpg'
import { NavLink } from 'react-router-dom';
import * as axios from 'axios';

const User = (props) => {
    return (
        <>
            <div className={cl.userItem}>
                <NavLink to={'profile/' + props.user.id}><img className={cl.avatar} 
                                src={props.user.photos.small != null ? props.user.photos.small : avaDefault} 
                                alt='ava'></img>
                </NavLink>
                
                <div className={cl.country}>props.country,</div>

                <div className={cl.name}>{props.user.name}</div>
                <div className={cl.city}>props.city</div>
                <div className={cl.lastMessage}>props.lastMessage</div>

<div>

    {
    props.user.followed ? 
    <button onClick={() => {
        console.log('doUnfollow --> ' + props);
               axios.delete(`https://social-network.samuraijs.com/api/1.0/follow/${props.user.id}`, {
                   withCredentials: true,
                   headers: {
                       "API-KEY": "9c2e4d66-4ed0-4976-8ef0-e6d697c58441"
                   }
               } )
                   .then(response => {
                      if(response.data.resultCode === 0){
                          props.doUnfollow(props.user.id);
                      }
                   
                   });
               
               
               }
    
    } className={cl.statusFollow}>UNFOLLOW</button>  
    : <button onClick={() => {
 console.log('dofollow --> ' + props);
        axios.post(`https://social-network.samuraijs.com/api/1.0/follow/${props.user.id}`, {}, {
            withCredentials: true,
            headers: {
                "API-KEY": "9c2e4d66-4ed0-4976-8ef0-e6d697c58441"
            }
        } )
            .then(response => {
               
               if(response.data.resultCode === 0){
                   props.doFollow(props.user.id);
               }
            
            });
        
        
        }} className={cl.statusFollow}>FOLLOW</button> }
    
</div>
                
            </div>
        </>
    );
}

export default User;