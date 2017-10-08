/**
 * Created by Ramm on 10/8/2017.
 */

import React, { PropTypes } from 'react';
import LandingPage from './landing';

const AppBody = ({ title, isActive }) => (
  <LandingPage />
    );

AppBody.defaultProps = {
  isActive: false,
  tileTile: 'tile1',
};

AppBody.propTypes = {
};
export default AppBody;