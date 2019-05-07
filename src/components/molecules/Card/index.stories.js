import React from 'react';
import { storiesOf } from '@storybook/react';
import Card from '.'

storiesOf('Molecules', module).add('Card', () => 
    <Card 
        cardTitle="HAPZ Descontos"
        descriptionCard="Saraiva 10%"
        dayOff="Curta o som" /> 
);