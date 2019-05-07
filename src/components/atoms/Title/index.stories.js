import React from 'react';
import { storiesOf } from '@storybook/react';
import Title from '.'

storiesOf('Atoms', module).add('Title', () => 
    <Title title="Oi, eu sou um H1" />
);