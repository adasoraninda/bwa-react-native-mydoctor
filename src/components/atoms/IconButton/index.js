import {TouchableOpacity} from 'react-native';
import React from 'react';

const IconButton = ({Icon, disabled, onPress, style}) => {
  return (
    <TouchableOpacity style={style} disabled={disabled} onPress={onPress}>
      {Icon}
    </TouchableOpacity>
  );
};

export default IconButton;
