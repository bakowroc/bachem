import * as eva from 'eva-icons';
import * as React from 'react';

interface IconProps {
  name: string;
  className?: string;
  onClick?: () => void;
}

const Icon = ({ name, className = '', onClick }: IconProps) => {
  const getSvg = () => {
    try {
      return eva.icons[name];
    } catch (err) {
      return eva.icons.github;
    }
  };

  const { attrs, contents } = getSvg();
  return (
    <i className={className} onClick={onClick}>
      <svg {...attrs} dangerouslySetInnerHTML={{ __html: contents }} />
    </i>
  );
};

export { Icon };
