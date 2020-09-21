import React from 'react';
import {shallow} from 'enzyme';
import Task1 from '../assignment/task1';
import Task2a from '../assignment/task2a';
import Task2b from '../assignment/task2b';
import Accordion from '../assignment/components/Accordion'

describe('Snapshot test', () => {
    describe('Rendering', () => {
        it('Task1, should match to snapshot', () => {
            const component = shallow(<Task1/>)
            expect(component).toMatchSnapshot()
        });
        it('Task2a, should match to snapshot', () => {
            const component = shallow(<Task2a/>)
            expect(component).toMatchSnapshot()
        });
        it('Task2b, should match to snapshot', () => {
            const component = shallow(<Task2b/>)
            expect(component).toMatchSnapshot()
        });
    });
});