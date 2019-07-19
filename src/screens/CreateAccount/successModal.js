import React from 'react';
import { View, Text } from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';

import theme from '../../constants/theme';
import styles from './CreateAccountStyles';

export default ({ close, label= 'Joint Account successfully created' }) => (
    <View style={styles.successModalContainer}>
      <View>
        <View style={styles.contentContainer}>
          <Icon
            name='md-checkmark-circle'
            size={25}
            color={theme.colors.lightGreen}
          />
          <View style={styles.spacedPadding}>
            <Text style={styles.actionText}>Success</Text>
            <Text style={styles.regularBaseFonted}>
              {label}
            </Text>
          </View>
          <Icon
            name='md-close'
            size={25}
            onPress={close}
          />
        </View>
      </View>
    </View>
);