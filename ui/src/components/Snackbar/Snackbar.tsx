import * as React from 'react';

import * as style from './style.scss';
import {snackbarContext} from "../../context/SnackbarProvider";

const Snackbar = () => {
  const snackbar = React.useContext(snackbarContext);

  return (
    <div className={`${style.snackbar} ${snackbar.isShown ? style.show : ''}`}>
      {snackbar.value}
    </div>
  );
};

export {Snackbar}
