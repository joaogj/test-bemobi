import React from 'react';
import logo from './logo.svg';
import './App.css';
import Card from './components/Card';
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
    renderRechargeCards: [
      {
        cardValue: "5"
      },
      {
        cardValue: "10"
      }
    ]
  },
  {
    bg: bg2,
    renderRechargeCards: [
      {
        cardValue: "5"
      },
      {
        cardValue: "15"
      }
    ]
  },
] 

const cardData = [
  {
    cardTitle: "Hapz Descontos",
    img: saraiva,
    descriptionCard: "Saraiva 10%",
    dayOff: "CURTA O SOM"
  },
  {
    cardTitle: "HapFit",
    img: hapfit,
    descriptionCard: "Corpo perfeito",
    dayOff: "5 DIAS GRÁTIS"
  },
  {
    cardTitle: "Hapz Sounds",
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

function App() {
  return (
    // <div className="App">
    //   <header className="App-header">
    //     <img src={logo} className="App-logo" alt="logo" />
    //     <p>
    //       Edit <code>src/App.js</code> and save to reload.
    //     </p>
    //     <a
    //       className="App-link"
    //       href="https://reactjs.org"
    //       target="_blank"
    //       rel="noopener noreferrer"
    //     >
    //       Learn React
    //     </a>
    //   </header>
    // </div>
    <div>
      <HapzTabs renderTabsPanel={cardRechargeData}/>
      <PageContainer>
        <CardMap cardRender={cardData} />
      </PageContainer>
    </div>
  );
}

export default App;
