import React from 'react'
import { action } from '@storybook/addon-actions'
import { withKnobs, text } from '@storybook/addon-knobs'
import Pagenator from './Pagenator';

export default {
   component: Pagenator,
   title: 'Ecommerce/Pagenator',
   decorators:[withKnobs]
}
export const defaultView = () => <Pagenator 
padding={text('Padding','10px')}
border={text('Border','2px solid black')}
fontsize={text('Fontsize','20px')}
/>