import {h, Component} from 'preact';
import {Router} from 'preact-router';
import {Header} from "./Header/Header";
import {Home} from "./Home/Home";
import {Product} from "./Product/Product";

export class App extends Component {
  state = {
    isAppScrolled: false
  };

  onHomeScroll = (isHomeScrolled) => this.setState({isAppScrolled: isHomeScrolled});

  render({}, {isAppScrolled}, {}) {
    return (
      <div>
        <Header isPageScrolled={isAppScrolled}/>
        <Router>
          <Home path="/" onScroll={this.onHomeScroll} />
          <Product path="/:product" />
        </Router>
      </div>
    );
  }
}