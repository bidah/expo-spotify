import React from 'react';
import PropTypes from 'prop-types';
import { BottomTabBar } from 'react-navigation';

// components
import BarMusicPlayer from './BarMusicPlayer';

const CustomTabBar = props => {
  const { navigation, screenProps } = props;
  const { currentSongData } = screenProps;

  const tab = !screenProps.toggleTabBarValue ? (
    <React.Fragment>
      <BarMusicPlayer navigation={navigation} song={currentSongData} />
      <BottomTabBar {...props} />
    </React.Fragment>
  ) : null;

  return tab;
};

CustomTabBar.propTypes = {
  // required
  navigation: PropTypes.object.isRequired,
  screenProps: PropTypes.object.isRequired
};

export default CustomTabBar;
