import React, {Component} from 'react';
import {connect} from 'react-redux';
import {recarga} from './actions/recarga';
import {simpleAction} from './actions/simpleAction';

import CardMap from './components/CardMap';
import HapzTabs from './components/Tabs';
import saraiva from './img/saraiva-img.png';
import hapfit from './img/hapfit-img.png';
import sounds from './img/hapz-sounds-img.png';
import playkids from './img/playkids-img.png';
import bg from './img/bg-credits-img.png';
import bg2 from './img/bg-data-img.png';

import {
  PageContainer
} from './App.jsx'

const cardRechargeData = [
  {
    bg: bg,
    api: "https://tidal-hearing.glitch.me/recarga",
    renderRechargeCards: [
      {
      },
      {
      }
    ]
  },
  {
    bg: bg2,
    api: "https://tidal-hearing.glitch.me/dados",
    renderRechargeCards: [
      {
      },
      {
      }
    ]
  },
] 

const cardData = [
  {
    cardTitle: "HAPZ Descontos",
    img: saraiva,
    descriptionCard: "Saraiva 10%",
    dayOff: "CURTA O SOM"
  },
  {
    cardTitle: "HAPFIT",
    img: hapfit,
    descriptionCard: "Corpo perfeito",
    dayOff: "5 DIAS GRÁTIS"
  },
  {
    cardTitle: "HAPZ Sounds",
    img: sounds,
    descriptionCard: "Curta um som",
    dayOff: "7 DIAS GRÁTIS"
  },
  {
    cardTitle: "Play Kids",
    img: playkids,
    descriptionCard: "Muita Diversão!",
    dayOff: "3 DIAS GRÁTIS"
  }
]

const mapDispatchToProps = dispatch => ({
  recarga: () => dispatch(recarga())
})

const mapStateToProps = state => ({
  ...state
 })

class App extends Component {

  componentDidMount() {
  this.props.recarga();
}


  render(){
    return (
      <div>
        <HapzTabs renderTabsPanel={cardRechargeData}/>
        <PageContainer>
          <CardMap cardRender={cardData} />
        </PageContainer>
        <pre>
        {
          JSON.stringify(this.props)
        }
        </pre>
        <button>Test redux action</button>
      </div>
    ); 
  }
}

export default connect(mapStateToProps, recarga())(App);
