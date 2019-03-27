import * as React from 'react';
import * as style from './style.scss';

interface IPaperProps {
  className?: string;
  children: any;
  depth?: number;
  round?: number;
}

const Paper = ({ className = '', children, depth = 0, round = 0 }: IPaperProps) => {
  const depthClass = `paper-${depth}`;

  return (
    <div className={`${style[depthClass]} ${className}`} style={{ borderRadius: `${round}px` }}>
      {children}
    </div>
  );
};

export { Paper };
