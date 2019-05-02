import React from 'react';
import logo from './logo.svg';
import './App.css';
import Card from './components/Card';
import CardMap from './components/CardMap';
import saraiva from './img/saraiva-img.png';
import hapfit from './img/hapfit-img.png';
import sounds from './img/hapz-sounds-img.png';
import playkids from './img/playkids-img.png';

import {
  PageContainer
} from './App.jsx'


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
    <PageContainer>
      <CardMap cardRender={cardData} />
    </PageContainer>
  );
}

export default App;