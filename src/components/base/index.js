import React from 'react';
import { View, TouchableOpacity, Text } from 'react-native';

import Icon from '../icon';
import { icons } from '../../assets';
import styles, { HEIGHT } from './styles';
import colors from 'react-native-toast-message/src/colors';

const BaseToast = (props) => {
  const { color, icon, text1, text2, onClose, backgroundColor, textColor } = props;

  const baseStyle = [
    styles.base,
    styles.borderLeft,
    { borderLeftColor: color }
  ];

  return (
    <View style={[baseStyle, {backgroundColor: backgroundColor } ]}>
      <View style={styles.iconContainer}>
        {icon ? (
          <Icon style={styles.icon} source={icon} />
        ) : (
          <View style={styles.icon} />
        )}
      </View>

      <View style={styles.contentContainer}>
        <View style={styles.body}>
          {text1 !== undefined && (
            <View>
              <Text style={[styles.text1, { color: textColor }]} numberOfLines={1}>
                {text1}
              </Text>
            </View>
          )}
          {text2 !== undefined && (
            <View>
              <Text style={[styles.text2, { color: textColor } ]} numberOfLines={2}>
                {text2}
              </Text>
            </View>
          )}
        </View>
      </View>

      <TouchableOpacity style={styles.closeButtonContainer} onPress={onClose}>
        <Icon style={styles.closeIcon} source={icons.close} />
      </TouchableOpacity>
    </View>
  );
};

BaseToast.HEIGHT = HEIGHT;

export default BaseToast;
