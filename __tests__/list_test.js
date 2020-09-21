import React from 'react';
import {shallow, mount} from 'enzyme';
import Task2b from './../assignment/task2b';
import { expect} from 'chai';
import ListBody from './../assignment/components/ListBody'
import {
    ActivityIndicator,
    FlatList
  } from "react-native";
import StickyParallaxHeader from "react-native-sticky-parallax-header";

describe('List test', () => {
    describe('Check for data', () => {
        it('Data should be available for the list', async () => {
            const component = shallow(<Task2b/>)
            expect(component.find(StickyParallaxHeader)).to.exist;
            const ListComp = shallow(<ListBody/>)
            let isLoading = ListComp.state("isLoading")
            if(!isLoading){
                expect(ListComp.find(FlatList)).to.exist;
            } else {
                expect(ListComp.find(ActivityIndicator)).to.exist;
            }
        });
    });
});