import * as React from 'react';

import { snackbarContext } from '../../context/SnackbarProvider';
import * as style from './style.scss';

const Snackbar = () => {
  const snackbar = React.useContext(snackbarContext);

  return <div className={`${style.snackbar} ${snackbar.isShown ? style.show : ''}`}>{snackbar.value}</div>;
};

export { Snackbar };
