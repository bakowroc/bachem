import {h} from 'preact';
import {route} from "preact-router";

import * as style from './style.scss';

export const Button = ({onClick = undefined, text, outline = false, href = undefined, className = ''}) => {

  const getOnClickAction = () => {
   if(href !== undefined) {
     return () => route(href)
   }

   return onClick;
  };

  return (
   <button onClick={getOnClickAction()} className={`${style.button} ${className} ${outline ? style.outline: ''}`}>
     {text}
   </button>
  )
}
