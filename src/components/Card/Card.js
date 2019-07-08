import React from 'react';
import { View, Text } from 'react-native';
import Swipeable from 'react-native-gesture-handler/Swipeable';
import Icon from 'react-native-vector-icons/MaterialIcons';
import styles from './CardStyles';

const leftIcons = navigation => (
  <View style={{width: '50%', display: 'flex', flexDirection: 'row', justifyContent: 'space-evenly', alignItems: 'center'}}>
    <Icon name="edit" size={20} color="#bbb" style={[{padding: 5, backgroundColor: 'white', borderRadius: 50}, styles.hiddenButtons]} onPress={() => navigation.navigate('EditAccount')}/>
    <Icon name="lock" size={20} color="#bbb" style={[{padding: 5, backgroundColor: 'white', borderRadius: 50}, styles.hiddenButtons]}/>
    <Icon name="delete" size={20} color="#fff" style={[{padding: 5, backgroundColor: 'red', borderRadius: 50}, styles.hiddenButtons]} onPress={() => alert('deleting')}/>
  </View>
);

const card = ({ accountName = 'louis', accountType, totalMembers, time = 'Unknown', amount, style, whiteCard = false, navigation, swipeable }) => {

  const lessMembers = (
    <View style={styles.membersContainer}>
      <View style={styles.members}>
        <Text style={styles.membersText}>{totalMembers}</Text>
      </View>
    </View>
  )

  const moreMembers = (
    <View style={styles.membersContainer}>
      <View style={styles.members}>
        <Text style={styles.membersText}>{'9+'}</Text>
      </View>
    </View>
  )

  const members = totalMembers > 9 ? moreMembers : lessMembers;

  const swipeableCard = (
    <Swipeable renderRightActions={() => leftIcons(navigation)}>
      <View style={styles.container}>
        <View style={[styles.actNameAndTypeContainer, style]}>
          <View style={{ display: 'flex', width: '50%' }}>
            <View style={styles.actNameAndType}>
              <Text allowFontScaling style={[styles.actNameText, whiteCard ? { color: 'black' } : null]}>{accountName}</Text>
              <Text allowFontScaling style={[styles.actTypeText, whiteCard ? { color: 'rgba(0,0,0,.5)' } : null]}>{accountType}</Text>
            </View>
            <View style={styles.timeContainer}>
              <Text allowFontScaling style={[styles.timeText, whiteCard ? { color: 'rgba(0,0,0,.5)' } : null]}>{time}</Text>
            </View>
          </View>
          <View style={styles.membersAmtBalCurContainer}>
            {totalMembers > 0
              ? members
              : null}
            <View style={styles.curAmtBalContainer}>
              <Text allowFontScaling style={[styles.totalBalance, whiteCard ? { color: 'rgba(0,0,0,.7)' } : null]}>Total Balance</Text>
              <View style={styles.currencyAmountContainer}>
                <Text allowFontScaling style={styles.currency}>ugx </Text>
                <Text allowFontScaling style={[styles.amount, whiteCard ? { color: 'rgba(0,0,0,.3)' } : null]}>{amount}</Text>
              </View>
            </View>
          </View>
        </View>
      </View>
    </Swipeable>
  )

  const normalCard = (
    <View style={styles.container}>
        <View style={[styles.actNameAndTypeContainer, style]}>
          <View style={{ display: 'flex', width: '50%' }}>
            <View style={styles.actNameAndType}>
              <Text allowFontScaling style={[styles.actNameText, whiteCard ? { color: 'black' } : null]}>{accountName}</Text>
              <Text allowFontScaling style={[styles.actTypeText, whiteCard ? { color: 'rgba(0,0,0,.5)' } : null]}>{accountType}</Text>
            </View>
            <View style={styles.timeContainer}>
              <Text allowFontScaling style={[styles.timeText, whiteCard ? { color: 'rgba(0,0,0,.5)' } : null]}>{time}</Text>
            </View>
          </View>
          <View style={styles.membersAmtBalCurContainer}>
            {totalMembers > 0
              ? members
              : null}
            <View style={styles.curAmtBalContainer}>
              <Text allowFontScaling style={[styles.totalBalance, whiteCard ? { color: 'rgba(0,0,0,.7)' } : null]}>Total Balance</Text>
              <View style={styles.currencyAmountContainer}>
                <Text allowFontScaling style={styles.currency}>ugx </Text>
                <Text allowFontScaling style={[styles.amount, whiteCard ? { color: 'rgba(0,0,0,.3)' } : null]}>{amount}</Text>
              </View>
            </View>
          </View>
        </View>
      </View>
  )

  const renderCard = swipeable ? swipeableCard : normalCard;

  return (
    <>
      {renderCard}
    </>
  );
};

card.defaultProps = {
  accountName: 'accountName',
  accountType: 'accountType',
  totalMembers: 0,
  time: 'Unknown',
  amount: 1000000,
  style: {
    backgroundColor: 'rgb(79, 183, 174)'
  },
  whiteCard: false,
  swipeable: false
};

export default card;
