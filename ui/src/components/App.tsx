import * as React from 'react';
import {Router, Route} from 'react-router';
import {history} from '../history';
import {Header} from "./Header/Header";
import {Home} from "./Home/Home";
import {Product} from "./Product/Product";
import {Footer} from "./Footer/Footer";

import * as style from './app.scss';
import {Snackbar} from "./Snackbar/Snackbar";
import {Methods} from "./Methods/Methods";
import {GalleryPopup} from "./Gallery/GalleryPopup";
import {appContext} from "../context/AppProvider";
import {SnackbarProvider} from "../context/SnackbarProvider";
import {GalleryProvider} from "../context/GalleryProvider";
import {TabsProvider} from "../context/TabsProvider";
import {useEffect} from "react";

const App = () => {
  const appRef = React.useRef(document.createElement('div'));
  const app = React.useContext(appContext);

  useEffect(() => {
    setupApp();
    scrollToView();

    history.listen(() => {
      setupApp();
      scrollToView();
    });
  }, []);

  const setupApp = () => {
    app.setValue({
      isInRoot: history.location.pathname === "/"
    });
  };

  const scrollToView = () => {
    const hash = history.location.hash;
    let section;

    try {
     section = document.getElementById(hash.replace('#', ''));
      section.scrollIntoView({ block: 'start',  behavior: 'smooth' });
    } catch(e) {
      appRef.current.scrollTop = 0;
    }
  };

  const onAppScroll = () => {
    const isScrolled = appRef.current.scrollTop !== 0;
    if(isScrolled !== app.isScrolled) {
      app.setValue({
        isScrolled,
        isSidebarShown: !isScrolled || ['metody', 'produkty'].map(route => history.location.pathname.includes(route)).indexOf(true) > -1
      });
    }
  };

  return (
    <Router history={history}>
      <SnackbarProvider>
        <GalleryProvider>
          <GalleryPopup />
          <Snackbar />
          <Header/>
          <div className={style.scrollable} ref={appRef} onScroll={onAppScroll} >
              <Route exact path="/" component={Home}/>
              <Route path="/produkty/:product" component={Product}/>
              <TabsProvider>
                <Route path="/metody/:method?" component={Methods}/>
              </TabsProvider>
            <Footer />
          </div>
        </GalleryProvider>
      </SnackbarProvider>
    </Router>
  );
};

export {App};