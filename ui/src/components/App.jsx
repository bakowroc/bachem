import {h, Component} from 'preact';
import {Router} from 'preact-router';
import {Header} from "./Header/Header";
import {Home} from "./Home/Home";
import {Product} from "./Product/Product";
import {Footer} from "./Footer/Footer";

import * as style from './app.scss';
import {Snackbar} from "./Snackbar/Snackbar";

export class App extends Component {
  snackbarTimeout = undefined;
  app = undefined;
  state = {
    isAppScrolled: false,
    snackbar: {
      isShown: false,
      message: ''
    }
  };

  onAction = (snackbar) => {
    clearTimeout(this.snackbarTimeout);
    this.setState({snackbar}, () => {
      this.snackbarTimeout = setTimeout(() => {
        this.setState({snackbar: {isShown: false}});
      }, 3500)
    });
  };

  onAppScroll = () => {
    const isAppScrolled = this.app.scrollTop !== 0;
    if(isAppScrolled !== this.state.isAppScrolled) {
      this.setState({isAppScrolled});
    }
  };

  handleRouteChange = () => {
    if(this.app) {
      this.app.scrollTop = 0;
    }
  };

  render({}, {isAppScrolled, snackbar}, {}) {
    return (
      <div>
        <Snackbar isShown={snackbar.isShown} message={snackbar.message}/>
        <Header isAppScrolled={isAppScrolled}/>
        <div className={style.scrollable} ref={ref => this.app = ref} onScroll={this.onAppScroll} >
          <Router onChange={this.handleRouteChange}>
            <Home path="/" onAction={this.onAction} isAppScrolled={isAppScrolled}/>
            <Product path="/produkty/:product" />
          </Router>
          <Footer />
        </div>
      </div>
  );
  }
}