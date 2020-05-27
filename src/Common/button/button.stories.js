import React from 'react';
import {action} from '@storybook/addon-actions';
import {withKnobs,text} from '@storybook/addon-knobs';
import ButtonComponent from './SignInButton';
export default {
    component:ButtonComponent,
    title:"ButtonComponent",
    decorators:[withKnobs]
};

export const defaultView = () => <ButtonComponent 
text={text('Content','SignIn')}
backgroundcolor={text('Color','black')}
padding={text('Padding','10px')}/>;

