import React from 'react';
import { View, Text, Image, Dimensions, TouchableWithoutFeedback } from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';
import MaterialIcon from 'react-native-vector-icons/MaterialIcons';
import styles from './SignInStyles';
import App from '../../components/PhoneAndPassword/PhoneAndPassword';
import user from '../../../assets/user.png';
import FirstAndLastName from '../../components/FirstAndLastName/FirstAndLastName';

export default ({navigate}) => {
  const image = Dimensions.get('screen').width > 320 ? (
    <Icon name="md-camera" size={20} color="white" style={styles.cameraIconHighRes} onPress={null} />
  ) : (
    <Icon name="md-camera" size={15} color="white" style={styles.cameraIconLowRes} onPress={null} />
  );

  return (
    <View style={styles.registercontainer}>
      <View style={{ width: '30%', height: '12%', top: 0 }}>
        <Image source={user} style={{ width: '100%', height: '100%' }} resizeMode="contain" />
        {image}
      </View>
      <FirstAndLastName />
      <View style={{ height: '1%' }} />
      <App />
      <View style={styles.termsNConsContainer}>
        <MaterialIcon size={20} name="check-box-outline-blank" style={{ marginRight: '2%' }} />
        <Text style={{ fontSize: 12 }} allowFontScaling>I agree to the</Text>
        <TouchableWithoutFeedback>
          <Text style={styles.termsNConsText} allowFontScaling>Terms and conditions</Text>
        </TouchableWithoutFeedback>
      </View>
      <View style={styles.registerTextcontainer}>
        <TouchableWithoutFeedback style={{ width: '50%', backgroundColor: 'rgb(34, 50, 176)' }} onPress={navigate}>
          <Text allowFontScaling style={styles.registerText}>Register</Text>
        </TouchableWithoutFeedback>
      </View>
    </View>
  );
};
