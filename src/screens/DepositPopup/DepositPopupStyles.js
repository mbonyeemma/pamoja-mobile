import { StyleSheet } from 'react-native';
import theme from '../../constants/theme';

export default StyleSheet.create({
  modalContainer: {
    padding: '5%',
    width: '100%',
    height: '100%',
    display: 'flex',
    marginTop: '5%',
    backgroundColor: theme.colors.darkGray
  },
  phone: {
    display: 'flex',
    flexDirection: 'row',
    height: '10%',
    width: '90%',
    alignItems: 'center'
  },
  phoneContainer: {
    display: 'flex',
    height: '100%',
    marginLeft: 10,
    width: '85%',
    flexDirection: 'row',
    alignItems: 'center'
    // borderBottomWidth: 1,
    // borderColor: 'rgb(229,229,229)'
  },
  countryCodes: {
    width: '20%',
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
  phoneLabelText: {
    fontSize: theme.fonts.base,
    fontFamily: theme.fonts.regular
  },
  popUpHeadings: {
    fontSize: theme.fonts.base,
    fontFamily: theme.fonts.semibold
  },
  iconDropdown: {
    width: '10%',
    borderColor: 'rgb(229,229,229)',
    borderRightWidth: 1,
    justifyContent: 'center',
    display: 'flex',
    height: '50%',
    padding: 4
  },
  iconCardContainer: {
    flexDirection: 'row',
    height: '30%',
    marginTop: 10
  },
  selectAccountText: {
    paddingLeft: 10,
    fontFamily: theme.fonts.semibold,
    fontSize: theme.fonts.base,
    color: theme.colors.gray
  },
  cardComponent: {
    backgroundColor: theme.colors.blue,
    height: 120,
    marginTop: -5
  },
  amountFieldContainer: {
    flex: 3,
    backgroundColor: theme.colors.white,
    borderRadius: 20,
    borderWidth: 1,
    borderColor: theme.colors.darkGray
  },
  depositAmountContainer: {
    flex: 1,
    marginLeft: -40,
    borderRadius: 20,
    backgroundColor: theme.colors.blue,
    justifyContent: 'center',
    alignItems: 'center'
  },
  actionButtonsContainer: {
    width: '100%',
    flexDirection: 'row',
    marginTop: 25,
    justifyContent: 'flex-end'
  },
  actionButtonText: {
    fontFamily: theme.fonts.regular,
    fontSize: theme.fonts.base + 2
  },
  positiveActionButton: { paddingLeft: 30, paddingRight: 15 },
  amountNewField: {
    fontFamily: theme.fonts.regular,
    fontSize: theme.fonts.base + 2,
    color: theme.colors.red,
    borderBottomColor: theme.colors.darkerGray,
    borderBottomWidth: 1
  },
  amountNewFieldContainer: {
    flex: 1,
    padding: 30,
    width: '100%'
  }
});
