import React from 'react';
import PropTypes from 'prop-types';
import { createStackNavigator } from 'react-navigation';

import Home from '../screens/Home';
import Album from '../screens/Album';
import SvgTabHome from '../components/icons/Svg.TabHome';
import ModalMoreOptions from '../screens/ModalMoreOptions';

const Icon = ({ focused }) => <SvgTabHome active={focused} />;

Icon.propTypes = {
  // required
  focused: PropTypes.bool.isRequired
};

// const ModalStack = createStackNavigator(
//   {
//     Album,
//     ModalMoreOptions
//   },
//   {
//     headerMode: 'none',
//     initialRouteName: 'Album',
//     transparentCard: true,
//     mode: 'modal'
//   }
// );

export default createStackNavigator(
  {
    Home,
    Album
  },
  {
    headerMode: 'none',
    initialRouteName: 'Home'
  }
);
