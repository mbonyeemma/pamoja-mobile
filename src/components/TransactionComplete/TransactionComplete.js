import React from 'react';
import { View, Text } from 'react-native';

import Icon from 'react-native-vector-icons/MaterialIcons';
import ProgressBar from '../TotalExpenses/ProgressExpenses';
import CompleteDetail from '../CompleteDetail/CompleteDetail';

import theme from '../../constants/theme';

export default ({
  status,
  percentage = '40%',
  progressColor,
  close,
  dueDate = false,
  parentPercentage = '60%'
}) => (
  <View
    style={{
      flex: 1
    }}
  >
    <View
      style={{
        flex: 2,
        paddingTop: '5%',
        paddingLeft: '5%',
        paddingRight: '5%'
      }}
    >
      <View
        style={{
          flexDirection: 'row',
          justifyContent: 'space-between',
          alignItems: 'center'
        }}
      >
        <CompleteDetail label={`From`} answer={`Tusasanya Spending`} />
        <Icon name='close' size={20} onPress={close} />
      </View>
      <View
        style={{
          flexDirection: 'row',
          justifyContent: 'space-between',
          alignItems: 'center'
        }}
      >
        <CompleteDetail label={`To`} answer={`Alex Kamulegeya`} />
        {dueDate && (
          <CompleteDetail label={`Due Date`} answer={`23 Jun 2019`} />
        )}
      </View>
    </View>
    <View
      style={{
        flex: 1,
        flexDirection: 'row',
        backgroundColor: theme.colors.darkGray,
        borderBottomEndRadius: 20,
        borderBottomStartRadius: 20,
        borderTopWidth: 1,
        paddingRight: '5%',
        paddingLeft: '5%',
        paddingTop: '2%',
        borderTopColor: theme.colors.darkGray,
        justifyContent: 'space-between'
      }}
    >
      <View>
        <Text style={{ fontSize: 10 }}>{`${status}...`}</Text>
        <ProgressBar
          percentage={percentage}
          progressColor={progressColor}
          style={{ height: 10, marginTop: 5 }}
          showText={false}
          background={theme.colors.darkerGray}
        />
      </View>
      <View>
        <CompleteDetail
          label={`Deposit Amount`}
          answer={`1,230,000`}
          currencyCode={`Ugx`}
          bold
        />
      </View>
    </View>
  </View>
);
