import { StyleSheet } from 'react-native';

export default StyleSheet.create({
  container: {
    width: '100%',
    // height: '20%',
    display: 'flex',
    alignItems: 'center',
    // justifyContent: 'center',
    marginBottom: '3%',
    // backgroundColor: 'white',
    padding: 5
  },
  actNameAndTypeContainer: {
    width: '90%',
    height: '90%',
    borderRadius: 10,
    shadowColor: '#aaa',
    shadowOffset: {
      height: 20,
      width: 0
    },
    shadowOpacity: 0.1,
    shadowRadius: 10,
    elevation: 3,
    backgroundColor: 'blue',
    display: 'flex',
    flexDirection: 'row'
  },
  actNameAndType: {
    display: 'flex',
    flexDirection: 'column',
    paddingLeft: '10%',
    height: '75%',
    paddingTop: '10%'
  },
  actNameText: {
    fontWeight: 'bold',
    color: 'white',
    fontSize: 12
  },
  actTypeText: {
    fontSize: 11,
    color: 'rgba(255,255,255,.6)'
  },
  timeContainer: {
    alignContent: 'flex-end',
    paddingLeft: '10%'
  },
  timeText: {
    fontSize: 10,
    color: 'rgba(255,255,255,.6)'
  },
  membersContainer: {
    width: '100%',
    display: 'flex',
    alignItems: 'flex-end',
    height: '20%',
    paddingRight: '5%',
    justifyContent: 'flex-start',
    position: 'absolute',
    top: '5%'
  },
  membersAmtBalCurContainer: {
    display: 'flex',
    width: '50%',
    flexDirection: 'column',
    alignItems: 'flex-end',
    marginRight: '5%',
    justifyContent: 'flex-end',
    paddingBottom: '10%'
  },
  members: {
    justifyContent: 'center',
    alignItems: 'center',
    padding: 1,
    backgroundColor: 'red',
    color: 'white',
    borderRadius: 50,
    width: 20,
    height: 20
  },
  currency: {
    fontSize: 9,
    color: 'rgba(255,255,255,.9)',
    alignSelf: 'flex-end',
    backgroundColor: 'rgb(251,188,5)',
    borderRadius: 1,
    marginBottom: '3%',
    marginRight: '7%',
    paddingLeft: 3,
    paddingRight: 3
  },
  amount: {
    fontSize: 20,
    fontWeight: 'bold',
    color: 'rgba(255,255,255,.9)',
    alignSelf: 'flex-end'
  },
  currencyAmountContainer: {
    width: '100%',
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'flex-end',
    alignItems: 'center'
  },
  membersText: {
    fontSize: 10,
    fontWeight: 'bold',
    color: 'white'
  },
  totalBalance: {
    fontSize: 10,
    color: 'rgba(255,255,255,.9)',
    alignSelf: 'flex-end'
  },
  curAmtBalContainer: {
    display: 'flex',
    width: '100%',
    paddingRight: '10%'
  },
  hiddenButtons: {
    shadowColor: '#aaa',
    shadowOffset: {
      height: 10,
      width: 0
    },
    shadowOpacity: 0.8,
    shadowRadius: 2,
    elevation: 20,
  }
});
