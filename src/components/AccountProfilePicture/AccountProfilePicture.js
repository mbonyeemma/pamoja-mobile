import React from 'react';
import { View, Text, Image, TouchableOpacity } from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';

import profile from '../../../assets/profilepic.png';
import theme from '../../constants/theme';
import styles from './AccountProfilePictureStyles';

const AccountProfilePicture = ({ name }) => (
  <View style={styles.profilePictureContainer}>
    <TouchableOpacity
      onPress={() => alert('remove the member from joint account')}
    >
      <View style={styles.profilePicture}>
        <Image
          source={profile}
          style={styles.profileImage}
          resizeMode='contain'
        />
        <Icon
          name='md-close-circle'
          size={25}
          color={theme.colors.gray}
          style={styles.removeIconButton}
        />
      </View>
      <Text style={styles.labelText}>{name}</Text>
    </TouchableOpacity>
  </View>
);
export default AccountProfilePicture;
