import React from 'react';
import {reducer, StateType, TOGGLE_COLLAPSED} from "./UncontrolledAccordion";


test('Test UncontrolledAccordion collapsed should be true', () => {
    const state: StateType = {
        collapsed: false
    }
    const newState = reducer(state, {type: 'TOGGLE-COLLAPSED'})

    expect(newState.collapsed).toBe(true);

});
test('Test UncontrolledAccordion collapsed should be false', () => {
    const state: StateType = {
        collapsed: true
    }
    const newState = reducer(state, {type: TOGGLE_COLLAPSED})

    expect(newState.collapsed).toBe(false);

});
// test('Test UncontrolledAccordion collapsed error', () => {
//     const state: StateType = {
//         collapsed: true
//     }
//
//     expect(() => {
//         reducer(state, {type: 'FAKETYPE'})
//     }).toThrowError();
//
// });