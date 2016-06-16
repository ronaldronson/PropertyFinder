import React, { Component } from 'react';
import { AppRegistry, NavigatorIOS } from 'react-native';
import SearchPage from './SearchPage';

class PropertyFinderApp extends Component {
  render() {
    return (
      <NavigatorIOS
        style={{flex: 1}}
        initialRoute={{
          title: 'Property Finder',
          component: SearchPage,
        }}/>
    );
  }
}

AppRegistry.registerComponent('PropertyFinder', function() { return PropertyFinderApp });
