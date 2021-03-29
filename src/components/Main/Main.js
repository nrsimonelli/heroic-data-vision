import React, { Component } from 'react';
import { connect } from 'react-redux';

import Hero from '../Hero/Hero';
import GraphArea from '../GraphArea/GraphArea';
import GraphBar from '../GraphBar/GraphBar';

class Main extends Component {
  componentDidMount = () => {
    console.log('hello from Main.js');
    this.props.dispatch({
      type: 'FETCH_HERO',
    });
  };

  changeGraphType = () => {
    this.setState({ switchGraph: !this.state.switchGraph });
  };

  changeHeroTwo = () => {};

  state = {
    switchGraph: true,
    heroOne: 70,
    heroTwo: 75,
  };

  render() {
    const eggOneId = (thisId) => {
      console.log('eggOne', thisId);
      this.setState({ heroOne: thisId });
    };
    const eggTwoId = (thisId) => {
      console.log('eggTwo', thisId);
      this.setState({ heroTwo: thisId });
    };

    const heroOne = this.state.heroOne;
    const heroTwo = this.state.heroTwo;

    return (
      <div className='main-root'>
        <div className='main-content-container'>
          <Hero data={this.props.hero} heroId={eggOneId} />
          <Hero data={this.props.hero} heroId={eggTwoId} />
          <div className='graph-secondary'>
            <div
              className='switch-icon'
              onClick={this.changeGraphType}
            >
              {this.state.switchGraph ? 'click me' : 'switch back'}
            </div>
            {this.props.hero !== undefined ? (
              this.state.switchGraph ? (
                <GraphArea
                  heroOne={heroOne}
                  heroTwo={heroTwo}
                  data={this.props.hero}
                />
              ) : (
                <GraphBar
                  heroOne={heroOne}
                  heroTwo={heroTwo}
                  data={this.props.hero}
                />
              )
            ) : (
              <p>Loading...</p>
            )}
          </div>
        </div>
      </div>
    );
  }
}

const mapReduxStateToProps = (reduxState) => ({
  hero: reduxState,
});

export default connect(mapReduxStateToProps)(Main);
