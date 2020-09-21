import React from 'react';
import {shallow} from 'enzyme';
import Task1 from './../assignment/task1';
import { expect} from 'chai';

describe('Pyramid Test', () => {
    describe('Check text', () => {
        it('Should match DEXHIGH', () => {
            const component = shallow(<Task1/>)
            expect(component.state("pyramid_text")).to.equal("DEXHIGH")
        });
    });
});