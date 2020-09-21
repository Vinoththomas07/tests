import React from 'react';
import {shallow} from 'enzyme';
import Task2a from './../assignment/task2a';
import { expect} from 'chai';
import { Button } from 'native-base'

describe('Timer test', () => {
    describe('check for timer', () => {
        it('should be 0 on start and 100 on click', () => {
            const component = shallow(<Task2a/>)
            let initialTimer = component.state('timer')
            expect(initialTimer).to.equal(0)
            component.find(Button).first().props().onPress()
            let newTimer = component.state('timer')
            expect(newTimer).to.equal(100)
        });
    });
});