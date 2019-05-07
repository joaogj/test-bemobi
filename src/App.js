import React, {Component} from 'react';
import CardMap from './components/organisms/CardMap';
import HapzTabs from './components/organisms/Tabs';
import cardsData from './data/cardsData';
import cardsRechargeData from './data/tabsData';

import {
  PageContainer
} from './App.jsx'

class App extends Component {

  render(){
    return (
      <div>
        <HapzTabs renderTabsPanel={cardsRechargeData}/>
        <PageContainer>
          <CardMap cardRender={cardsData} />
        </PageContainer>
      </div>
    ); 
  }
}

export default App;
