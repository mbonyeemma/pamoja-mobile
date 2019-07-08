import { StyleSheet } from 'react-native';
import theme from '../../constants/theme';

export default StyleSheet.create({
  container: {
    flex: 1,
    width: '100%',
    height: '100%',
    backgroundColor: theme.colors.darkGray
  },
  sortContainer: {
    justifyContent: 'center',
    width: '100%',
    padding: 12
  },
  sortButton: {
    flexDirection: 'row',
    justifyContent: 'flex-end',
    alignItems: 'center'
  },
  transactionButton: {
    flex: 1,
    borderRadius: 10,
    backgroundColor: theme.colors.darkGray,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 5
  },
  transactionButtonContainer: {
    flexDirection: 'row',
    height: '10%'
  },
  sortText: {
    fontSize: theme.fonts.base,
    fontFamily: theme.fonts.regular
  },
  scrollViewContainer: {
    height: '70%',
    backgroundColor: theme.colors.white
  },
  headerImageContainer: {
    width: this.width > 320 ? 45 : 35,
    height: this.width > 320 ? 45 : 35,
    // borderWidth: 1,
    borderColor: 'white',
    borderRadius: this.width > 320 ? 25 : 20,
    alignItems: 'center',
    justifyContent: 'center',
    marginRight: '1%'
  },
  imageStyles: { width: '98%', height: '98%', borderRadius: 50 },
  topHeaderContainer: {
    width: '100%',
    height: '100%',
    justifyContent: 'center',
    alignItems: 'flex-end'
  }
});
