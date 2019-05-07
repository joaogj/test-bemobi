import React from 'react';
import { storiesOf } from '@storybook/react';
import HapzTabs from '.';
import cardsRechargeData from '../../../data/tabsData';


storiesOf('Organisms', module).add('HapzTabs', () => 
    <HapzTabs renderTabsPanel={cardsRechargeData}/>
);