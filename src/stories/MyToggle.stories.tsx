import React from 'react';
import {composeStory, ComponentMeta, ComponentStory} from '@storybook/react';
import MyToggle from './MyToogle';

export default {
    title: 'test/Mytoggle',
    component: MyToggle,
    argTypes: {

    }
} as ComponentMeta<typeof MyToggle>;

const Template: ComponentStory<typeof MyToggle> = (args)=> <MyToggle {...args}/>

export const Test1 = Template.bind({});
Test1.args = {
    label: '테스트 1'
}

export const Test2 = Template.bind({});
Test2.args = {
    label: '테스트 2',
    theme: 'dark'
}