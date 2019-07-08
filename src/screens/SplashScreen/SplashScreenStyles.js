import { StyleSheet } from 'react-native';

export default StyleSheet.create({
  container: {
    display: 'flex',
    flexDirection: 'column',
    height: '100%',
    backgroundColor: '#4285F4'
  },
  logoContainer: {
    height: '60%',
    width: '100%',
    justifyContent: 'flex-end',
    alignItems: 'center'
  },
  footerContainer: {
    height: '40%',
    justifyContent: 'flex-end',
    alignItems: 'center'
  },
  logoImageStyles: {
    width: 155,
    height: 100
  },
  copyrightText: {
    fontSize: 12,
    color: '#FFFFFF',
    marginBottom: 10
  }
});
