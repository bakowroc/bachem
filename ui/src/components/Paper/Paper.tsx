import * as React from 'react';
import * as style from './style.scss';

interface PaperProps {
  className?: string;
  children: any;
  depth?: number;
  round?: number;
}

const Paper = ({className= '', children, depth = 0, round = 0}: PaperProps) => {
  const depthClass = `paper-${depth}`;

  return(
    <div className={`${style[depthClass]} ${className}`} style={{borderRadius: `${round}px`}}>
      {children}
    </div>
  );
};

export {Paper};
