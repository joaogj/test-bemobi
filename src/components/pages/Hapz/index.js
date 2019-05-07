import React from 'react'

import CardMap from '../../organisms/CardMap';
import HapzTabs from '../../organisms/Tabs';
import cardsData from '../../../data/cardsData';
import cardsRechargeData from '../../../data/tabsData';

import {
    PageContainer
} from './style'

const Hapz = () => {
    return (
        <div>
          <HapzTabs renderTabsPanel={cardsRechargeData}/>
          <PageContainer>
            <CardMap cardRender={cardsData} />
          </PageContainer>
        </div>
      ); 
}

export default Hapz