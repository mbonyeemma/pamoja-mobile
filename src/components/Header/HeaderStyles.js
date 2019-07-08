import { StyleSheet } from 'react-native';

export default StyleSheet.create({
  container: {
    width: '100%',
    height: '100%',
    display: 'flex',
    // borderWidth: 1,
    borderColor: 'black',
    backgroundColor: 'white'
  },
  topHeader: {
    width: '100%',
    height: '50%',
    backgroundColor: 'blue'
  },
  bottomHeader: {
    width: '100%',
    height: '50%',
    backgroundColor: 'blue',
    borderBottomLeftRadius: 0,
    borderTopLeftRadius: 0,
    borderBottomRightRadius: 200,
    borderTopRightRadius: 0
  }
});
