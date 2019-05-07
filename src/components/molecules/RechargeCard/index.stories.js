import React from 'react';
import { storiesOf } from '@storybook/react';
import RechargeCard from '.';

storiesOf('Molecules', module).add('RechargeCard', () => 
    <RechargeCard cardValue="5" textButton="Contratar" />
);