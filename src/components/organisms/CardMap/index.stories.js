import React from 'react';
import { storiesOf } from '@storybook/react';
import cardsData from '../../../data/cardsData.js';
import CardMap from '.';

storiesOf('Organisms', module).add('CardMap', () => 
    <CardMap cardRender={cardsData} />
);