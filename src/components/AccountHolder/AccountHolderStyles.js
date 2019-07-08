import { StyleSheet } from 'react-native';
import theme from '../../constants/theme';

export default StyleSheet.create({
  container: {
    flexDirection: 'row',
    width: '100%',
    height: 70,
    borderBottomWidth: 1,
    borderBottomColor: theme.colors.darkGray,
    justifyContent: 'center',
    alignItems: 'center'
  },
  regularText: {
    fontSize: 11,
    fontFamily: theme.fonts.semibold
  },
  detailContainer: {
    flex: 3,
    height: '70%',
    marginLeft: '4%',
    justifyContent: 'center',
    alignItems: 'flex-start'
  },
  adminButtonContainer: {
    flex: 1.3,
    height: '80%',
    justifyContent: 'center',
    alignItems: 'center'
  },
  itemDetailContainer: {
    height: '100%',
    justifyContent: 'center',
    alignItems: 'center'
  },
  iconDropdown: { position: 'absolute', right: -10 },
  imageContainer: {
    height: 55,
    width: 55,
    borderRadius: 45,
    justifyContent: 'center',
    alignItems: 'center'
  },
  imageStyles: { width: '90%', height: '90%', borderRadius: 45 }
});
