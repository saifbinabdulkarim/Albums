import React from 'react';
import {View, Text, Platform} from 'react-native';

const Header = (props) => {
  const {viewStyles, textStyle} = styles;
  return (
    <View style={viewStyles}>
      <Text style={textStyle}>{props.headerTitle}</Text>
    </View>
  );
};

const styles = {
  viewStyles: {
    // backgroundColor: '#59D2FE',
    height: Platform.OS === 'ios' ? 100 : 76,
    paddingTop: Platform.OS === 'ios' ? 0 : 0,
    ...Platform.select({
      ios: {backgroundColor: '#59D2FE', paddingTop: 30},
      android: {backgroundColor: '#59D2FE'},
    }),
    justifyContent: 'center',
    alignItems: 'center',
    shadowColor: '#000',
    shadowOffset: {width: 0, height: 2},
    shadowOpacity: 0.2,
    elevation: 2,
    position: 'relative',
  },
  textStyle: {
    fontSize: 20,
    letterSpacing: 2,
  },
};
export default Header;
