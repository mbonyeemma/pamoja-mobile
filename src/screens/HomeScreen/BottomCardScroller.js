import React from 'react';
import { View, Text, ScrollView, StyleSheet } from 'react-native';
import Icon from 'react-native-vector-icons/MaterialIcons';
import Styles from './HomeStyles';

export default ({ clicked, styles }) => (
  <ScrollView horizontal style={[{ width: '100%', paddingRight: 5 }, styles]}>
    {dataS.map(item => (
      <View
        key={Math.random()}
        style={{
          // alignSelf: 'center',
          borderRadius: 10,
          marginLeft: 15,
          justifyContent: 'center',
          alignItems: 'center',
          width: 60,
          height: 60
        }}
      >
        <Icon
          name={item.iconName}
          color="#bbb"
          size={30}
          style={[
            { backgroundColor: 'white', padding: 3, borderRadius: 10 },
            Styles.iconShadow
          ]}
          onPress={() => clicked(item.title)}
        />
        <Text
          allowFontScaling
          style={{ marginTop: 5, color: '#aaa', fontSize: 9 }}
        >
          {item.title}
        </Text>
      </View>
    ))}
  </ScrollView>
);

const dataS = [
  {
    iconName: 'delete',
    title: 'Airtime'
  },
  {
    iconName: 'person',
    title: 'Mobile Data'
  },
  {
    iconName: 'people',
    title: 'Tv'
  },
  {
    iconName: 'phone',
    title: 'Water'
  },
  {
    iconName: 'camera',
    title: 'Yaka'
  },
  {
    iconName: 'adb',
    title: 'Dstv'
  }
];
