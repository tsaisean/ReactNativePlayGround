import React from 'react';
import { View, Text, TouchableOpacity, TouchableHighlight,
  TouchableNativeFeedback } from 'react-native';

const Button = ({ onPress, children }) => {
  const { textStyle, buttonStyle } = styles;

  return (
      <TouchableOpacity style={buttonStyle} onPress={onPress}>
        <Text style={textStyle}>
          {children}
        </Text>
      </TouchableOpacity>
  );
};

const styles = {
  textStyle: {
    alignSelf: 'center',
    color: '#007aff',
    fontSize: 16,
    fontWeight: '600',
    paddingTop: 10,
    paddingBottom: 10
  },
  buttonStyle: {
    flex: 0.5,
    alignSelf: 'stretch',
    backgroundColor: '#fff',
    borderRadius: 5,
    borderColor: '#007aff',
    borderWidth: 1,
    marginRight: 5,
    marginLeft: 5
  }
}

export default Button;
