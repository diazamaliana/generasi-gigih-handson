import React from "react";
import style from './style.module.css';


export default function index(props) {
  return (
    <>
      <div className={style.card}>
          <div className={style.card_image}>
              <img src={props.url}
                   alt={props.title} /> 
          </div>
          <div className={style.card_title}>
              <p>{props.title} | {props.rating}</p>
          </div>
      </div>   
      
    </>
  );
}