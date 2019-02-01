import {Component, h} from 'preact';

import {Navigation} from "../Navigation/Navigation";
import {Logo} from "../Logo/Logo";
import {Paper} from "../Paper/Paper";

import * as style from './style.scss';
import {ProductNavList} from "../ProductNavList/ProductNavList";
import {Icon} from "../Icon/Icon";

export class Header extends Component {
  state = {
    isCloseRequested: false
  };

  componentDidUpdate(nextProps) {
    if(nextProps.isPageScrolled !== this.props.isPageScrolled) {
      this.setState({isCloseRequested: false});
    }
  }

  onProductNavToggle = () => this.setState(state => ({isCloseRequested: !state.isCloseRequested}));
  shouldNavListShown = () => {
    if (!this.props.isPageScrolled) {
      return this.state.isCloseRequested;
    } else if(this.state.isCloseRequested && this.props.isPageScrolled) {
      return !this.state.isCloseRequested;
    }

    return this.props.isPageScrolled;
  };

  render({isAppScrolled}, {}, {}) {
    console.log(this.state.isCloseRequested);
    return (
      <Paper depth={isAppScrolled ? 4 : 15} className={style.container}>
        <Icon name="menu-outline" onClick={this.onProductNavToggle} className={`${style.productNavIcon} ${style.open}`}/>
        <header className={style.header}>
          <Logo/>
          <Navigation />
          <ProductNavList isShown={this.shouldNavListShown()} onClose={this.onProductNavToggle}/>
        </header>
      </Paper>
    )
  }
};
