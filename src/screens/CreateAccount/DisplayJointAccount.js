import React from 'react';
import { View, Text, TouchableOpacity, ScrollView } from 'react-native';

import AccountProfilePicture from '../../components/AccountProfilePicture/AccountProfilePicture';
import UserPermissionItem from '../../components/UserPermissionItem/UserPermissionItem';

import config from './config';
import styles from './CreateAccountStyles';

const { accountMembers } = config;

const DisplayJointAccount = ({ title, label, data }) => {
  return (
    <ScrollView style={styles.jointMembersContainer}>
      <View style={[styles.addMembersContainer, { paddingLeft: '2%' }]}>
        <Text style={[styles.membersText, { fontSize: 10 }]}>{label}</Text>
        <TouchableOpacity
          onPress={() => alert('adding member to the ' + title)}
        >
          <Text style={styles.addBtnText}>Add</Text>
        </TouchableOpacity>
      </View>
      <View
        style={[
          styles.membersPicturesContainer,
          { paddingLeft: '4%', paddingRight: '4%' }
        ]}
      >
        <ScrollView
          horizontal
          showsHorizontalScrollIndicator={false}
          pagingEnabled
        >
          {accountMembers.map(member => (
            <AccountProfilePicture key={member.id} name={member.name} />
          ))}
        </ScrollView>
      </View>

      <View style={styles.jointTitleContainer}>
        <Text style={styles.regularBaseFonted}>Admin Rules</Text>
        <Text style={styles.regularBaseFonted}>
          These are the administrator rules specifying the
          <Text style={styles.strongTextDescription}>
            "number of admins required to"...
          </Text>
        </Text>
        {data.map(item => (
          <UserPermissionItem
            key={item.id}
            name={item.name}
            number={item.number}
          />
        ))}
      </View>
    </ScrollView>
  );
};
export default DisplayJointAccount;
