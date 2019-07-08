import { StyleSheet } from 'react-native';

export default StyleSheet.create({
  phone: {
    display: 'flex',
    flexDirection: 'row',
    height: '10%',
    width: '90%',
    alignItems: 'center'
  },
  password: {
    display: 'flex',
    flexDirection: 'row',
    height: '8%',
    width: '90%',
    borderColor: 'green',
    marginTop: 5,
    alignItems: 'center'
  },
  phoneContainer: {
    display: 'flex',
    height: '100%',
    marginLeft: 10,
    width: '85%',
    flexDirection: 'row',
    alignItems: 'center',
    borderBottomWidth: 1,
    borderColor: 'rgb(229,229,229)'
  },
  countryCodes: {
    width: '15%',
    justifyContent: 'center',
    display: 'flex'
  },
  phoneInputContainer: {
    width: '10%',
    borderColor: 'rgb(229,229,229)',
    borderRightWidth: 1,
    justifyContent: 'center',
    display: 'flex',
    height: '50%',
    padding: 4
  },
  passwordInput: {
    height: '100%',
    display: 'flex',
    width: '75%',
    marginLeft: 10,
    borderBottomWidth: 1,
    borderColor: 'rgb(229,229,229)'
  },
  togglePasswordContainer: {
    width: '10%',
    height: '100%',
    borderBottomWidth: 1,
    borderColor: 'rgb(229,229,229)',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center'
  }
});
