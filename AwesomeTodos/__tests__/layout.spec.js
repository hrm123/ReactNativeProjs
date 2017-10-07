/**
 * Created by Ramm on 10/5/2017.
 */

// test file
import { shallow, mount, render } from 'enzyme';
import LayoutExample from '../src/components/layout.js';
import React from 'react';

describe('Layout component tests', () => {
    it('shallow mount works', () => {
        const wrapper = shallow(<LayoutExample />);
        expect(wrapper).toBeTruthy();
    };
}
