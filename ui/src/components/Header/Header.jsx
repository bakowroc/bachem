import {Component, h} from 'preact';

import {Navigation} from "../Navigation/Navigation";
import {Logo} from "../Logo/Logo";
import {Paper} from "../Paper/Paper";

import * as style from './style.scss';
import {ProductNavList} from "../ProductNavList/ProductNavList";
import {Icon} from "../Icon/Icon";

const LOCK_IN_ROUTES = ['produkty', 'metody'];

export class Header extends Component {
  state = {
    isCloseRequested: false
  };

  componentDidUpdate(nextProps) {
    if(nextProps.isAppScrolled !== this.props.isAppScrolled) {
      this.setState({isCloseRequested: false});
    }
  }

  onProductNavToggle = () => this.setState(state => ({isCloseRequested: !state.isCloseRequested}));
  isNavbarLocked = () => {
    const pathname = window.location.pathname;
    for (let lockRoute of LOCK_IN_ROUTES) {
      if (pathname.includes(lockRoute)) {
        return true;
      }
    }
  };

  shouldNavListShown = () => {
    if(this.isNavbarLocked()) {
      return true
    }

    if (!this.props.isAppScrolled) {
      return this.state.isCloseRequested;
    }

    if(this.state.isCloseRequested && this.props.isAppScrolled) {
      return !this.state.isCloseRequested;
    }

    return this.props.isAppScrolled;
  };

  render({isAppScrolled}, {isListLocked}, {}) {
    return (
      <Paper depth={isAppScrolled ? 4 : 15} className={style.container}>
        <Icon name="menu-outline" onClick={this.onProductNavToggle} className={`${style.productNavIcon} ${style.open}`}/>
        <header className={style.header}>
          <Logo/>
          <Navigation />
          <ProductNavList
            isShown={this.shouldNavListShown()}
            onClose={this.onProductNavToggle}
          />
        </header>
      </Paper>
    )
  }
};
