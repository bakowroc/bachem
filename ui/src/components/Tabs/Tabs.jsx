import {Component, h} from 'preact';

import {Button} from "../Button/Button";

import * as style from './style.scss';
import {Paper} from "../Paper/Paper";

export class Tabs extends Component {
  state = {
    activeTab: 0
  };

  componentDidMount() {
    if(this.props.active) {
      const activeTab = this.props.body.tabs.map(tab => tab.toLowerCase()).indexOf(this.props.active);
      console.log(activeTab);
      this.setState({activeTab});
    }
  }

  handleTabSwitch = (key) => this.setState({activeTab: key});
  renderSwitch = (tab, key) => (
    <Button
      outline={false}
      onClick={() => this.handleTabSwitch(key)}
      text={tab}
      className={`${style.tab} ${this.state.activeTab === key ? style.active : ''}`}
    />
  );


  render({body}, {activeTab}, {}) {
    const {tabs, content} = body;

    return (
      <div className={style.tabs}>
        <Paper depth={1} round={4} className={style.headerWrapper}>
          <header className={style.header}>
            {tabs.map((tab, key) => this.renderSwitch(tab, key))}
          </header>
        </Paper>
        {content[activeTab]}
      </div>
    )
  }
}