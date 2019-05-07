import React from 'react';
import { storiesOf } from '@storybook/react';
import SubscribeButton from '.';

storiesOf('Atoms', module).add('SubscribeButton', () => 
    <SubscribeButton textButton="Assine" />
);