import { StyleSheet } from 'react-native';
import theme from '../../constants/theme';

export default StyleSheet.create({
  container: {
    width: '100%',
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: theme.colors.darkGray,
    paddingBottom: '2%',
    paddingTop: '2%'
  },
  titleText: {
    fontSize: theme.fonts.base,
    fontFamily: theme.fonts.semibold
  },
  bolderText: {
    fontSize: 10,
    fontFamily: theme.fonts.semibold,
    color: theme.colors.darkerGray
  },
  regularText: {
    fontSize: theme.fonts.base,
    fontFamily: theme.fonts.regular
  },
  fromText: {
    fontSize: theme.fonts.base,
    fontFamily: theme.fonts.regular,
    color: theme.colors.lighterBlack
  },
  transactionStatusContainer: {
    backgroundColor: theme.colors.yellow,
    marginLeft: '12%',
    // padding: 4,
    borderRadius: 4,
    height: '10%',
    justifyContent: 'center',
    alignItems: 'center',
    flexShrink: 10,
    paddingLeft: 5,
    paddingRight: 5
  },
  transactionStatusText: {
    fontSize: theme.fonts.base,
    fontFamily: theme.fonts.regular,
    color: theme.colors.white
  },
  actionButtonsContainer: { flexDirection: 'row', marginLeft: '50%' },
  actionPayText: {
    fontSize: theme.fonts.base,
    fontFamily: theme.fonts.regular,
    color: theme.colors.blue
  }
});
